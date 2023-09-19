

import { ActionTypes, ApiMethods, LayerTypes } from 'constants/index';
import { ActionAlarm, ActionLayer, ActionCart, ActionReview, ActionCS, ActionUser, ActionEvents } from 'actions/index';
import { requestAPI, successAPI } from 'utils/api';
import { isErrorModeByPathName, isBlankModeByPathName, goHome } from 'utils/url';
import { getSnsName } from 'utils/sns';
import { getUserToken, setUserToken, removeUserToken, setUserId, removeUserId, getReviewNotificationHide, getMarketingAgreePopupVisited, clearMarketingAgreePopupVisited } from 'utils/storage';
import { sha512 } from 'js-sha512';

import md5 from 'md5';
import { dataLayerLogin, dataLayerJoinAndLogin } from 'configs/google-analytics/ga'
import { gtmV4_login } from 'configs/google-analytics/ga-v4'
import { gtmV4_user_property } from 'configs/google-analytics/ga-v4'

const encodePassword = (password) => {
	return md5(password);
};

const fetchUser = () => {
	return { type: ActionTypes.FETCH_USER }
};

const successUser = () => {
	return { type: ActionTypes.SUCCESS_USER }
};

const failureUser = (message) => {
	return { type: ActionTypes.FAILURE_USER, message }
};

const updateUserLoggedIn = (loggedIn) => {
	return { type: ActionTypes.UPDATE_USER_LOGGED_IN, loggedIn }
};

const updateUserInfo = (info) => {
	return { type: ActionTypes.UPDATE_USER_INFO, info }
};

export const resetUserInfo = () => {
	return { type: ActionTypes.RESET_USER_INFO }
};

export const resetUserError = () => {
	return { type: ActionTypes.RESET_USER_ERROR }
};

export const changeUserError = (message) => {
	return { type: ActionTypes.CHANGE_USER_ERROR, message }
};

export const createUserLogin = (params, options) => {
	let { userId, userName, userPassword, snsId, snsType } = params;

	return (dispatch, getState) => {
		let { user: { fetching } } = getState();

		if (!fetching) {
			dispatch(fetchUser());

			return requestAPI({
				method: ApiMethods.POST,
				url: '/account/user/login',
				params: {
					loginId: userId,
					hashedPassword: snsType.match('EMAIL') ? encodePassword(userPassword) : null,
					snsId,
					snsType
				}
			}).then(result => {
				let { data } = result;
				let { errorCode } = data;

				if (String(errorCode).match(/A400104/)) {
					return Promise.all([
						dispatch(successUser())
					]).then(() => {
						return { snsYN: true };
					});
				} else {
					let { token, userId, snsType } = data;
					let { redirect } = options || {};

					return Promise.all([
						setUserToken(token),
						String(snsType).match(/EMAIL/i) ? setUserId(userId) : removeUserId(),

						dispatch(successUser()),
						dispatch(updateUserInfo(data)),
						dispatch(updateUserLoggedIn(true)),
						dispatch(requestUserByToken()),
						dispatch(ActionLayer.closeLayer()),
						redirect && redirect(),
            dispatch(ActionUser.requestUserGradeType())
					]).then((result) => {
            dataLayerLogin(data, result[8]);
            gtmV4_user_property(data, result[8]);
            gtmV4_login({method: `${getSnsName(snsType)}_로그인`, uid: data.userId});
            let { receiveSMSAgreeYN, receiveEmailAgreeYN } = result[5];

            /*dispatch(ActionEvents.eventAlready(28, null)).then((res)=>{
              if(!res &&  !getMarketingAgreePopupVisited() && (receiveSMSAgreeYN !== "Y" || receiveEmailAgreeYN !== "Y")){
                dispatch(ActionLayer.openContentsLayer(LayerTypes.MARKETING_AGREE, {userInfo : result[5]}));
              }
            });*/

						return data;
					}).catch(error => {
						return data;
					});
				}
			}).catch(error => {
				removeUserToken();

				dispatch(failureUser(error));

				throw error;
			});
		}
	}
};

export const deleteUserLogout = () => {
	return (dispatch, getState) => {
		let { user: { fetching } } = getState();

		if (!fetching) {
			dispatch(fetchUser());

			return requestAPI({
				method: ApiMethods.DELETE,
				url: '/account/user/logout'
			}).then(result => {
				let { data } = result;

				return Promise.all([
					removeUserToken(),

					dispatch(successUser()),
					dispatch(resetUserInfo()),
					dispatch(ActionLayer.closeLayer()),
					dispatch(ActionAlarm.resetAllCount()),
					dispatch(ActionCS.deleteCSQNAPopItems()),
					goHome()
				]).then(() => {
          gtmV4_user_property({
            userNo: "",
            userId: "",    //고객 UID
            userLevel: ""
          }, []);
					return data;
				});
			}).catch(error => {
				dispatch(failureUser(error));

				throw error;
			});
		}
	}
};

export const createUserJoin = (params) => {
	let { userId, userName, userPassword, snsId, snsType, recommendUserId } = params;

	return (dispatch, getState) => {
		let { user: { fetching } } = getState();

		if (!fetching) {
			dispatch(fetchUser());

			return requestAPI({
				method: ApiMethods.POST,
				url: '/account/user',
				params: {
					userName,
					userId,
					hashedPassword: snsType.match('EMAIL') ? encodePassword(userPassword) : null,
					snsId,
					snsType,
					recommendUserId
				}
			}).then(result => {
				let { data } = result;
				let { token, userId, snsType } = data;

				return Promise.all([
					setUserToken(token),
					String(snsType).match(/EMAIL/i) ? setUserId(userId) : removeUserId(),

					dispatch(successUser()),
					dispatch(updateUserInfo(data)),
					dispatch(updateUserLoggedIn(true)),
          dispatch(ActionUser.requestUserGradeType())
				]).then((result) => {

          dataLayerJoinAndLogin(data.userNo, data.userLevel, result[5]);

					return data;
				})
			}).catch(error => {
				dispatch(failureUser(error));

				throw error;
			});
		}
	}
};

export const requestUserByToken = () => {
	return (dispatch) => {
		let token = getUserToken();

		if (token) {
			dispatch(fetchUser());

			return requestAPI({
				method: ApiMethods.GET,
				url: '/account/user'
			}).then(result => {
				let { data } = result;

				return Promise.all([
					dispatch(successUser()),
					dispatch(updateUserInfo(data)),
					dispatch(updateUserLoggedIn(true)),
					!isBlankModeByPathName(window.location.pathname) && dispatch(ActionCart.requestCartCount()),
					!isBlankModeByPathName(window.location.pathname) && dispatch(ActionReview.requestReviewNotification())
				]).then(result => {
					let reviewNotification = result[ 4 ] ? result[ 4 ] : {};

					window.setTimeout(() => {
						(
							!isErrorModeByPathName(window.location.pathname)
							&& !isBlankModeByPathName(window.location.pathname)
							&& reviewNotification[ 'isNotification' ]
							&& getReviewNotificationHide() !== 'Y'
						) && dispatch(ActionLayer.openContentsLayer(LayerTypes.REVIEW_NOTIFICATION, reviewNotification));
					}, 1000);

					return data;
				});
			}).catch(error => {
				removeUserToken();

				dispatch(failureUser(error));
				dispatch(resetUserInfo());

				throw error;
			});
		} else {
			return Promise.resolve();
		}
	}
};

export const requestUserCheckExistence = (userId, snsType) => {
	return requestAPI({
		method: ApiMethods.GET,
		url: '/account/user/existence',
		params: {
			type: 'ACCOUNT',
			loginId: userId,
			snsType
		}
	}).then(result => {
		let { data } = result;

		return data;
	}).catch(error => {
		throw error;
	});
};

export const requestUserCheckEmailExistence = (email) => {
	return requestAPI({
		method: ApiMethods.GET,
		url: `/account/user/${email}/existence`
	}).then(result => {
		let { data } = result;

		return data;
	}).catch(error => {
		throw error;
	});
};

export const requestUserCheckRecommendExistence = (recommendUserId) => {
	return requestAPI({
		method: ApiMethods.GET,
		url: `/account/user/recommend/existence`,
		params: {
			recommendUserId
		}
	}).then(result => {
		let { data } = result;

		return data;
	}).catch(error => {
		throw error;
	});
};

export const createUserCheckPassword = (userPassword) => {
	return (dispatch, getState) => {
		let { user: { fetching } } = getState();

		if (!fetching) {
			dispatch(fetchUser());

			return requestAPI({
				method: ApiMethods.POST,
				url: '/account/user/password',
				params: { hashedPassword: encodePassword(userPassword) }
			}).then(result => {
				return Promise.all([
					dispatch(successUser())
				]).then(() => {
					return undefined;
				});
			}).catch(error => {
				dispatch(failureUser(error));

				throw error;
			});
		}
	}
};

export const updateUserResetPassword = (params) => {
	let { userId, userName } = params;

	return (dispatch, getState) => {
		let { user: { fetching } } = getState();

		if (!fetching) {
			dispatch(fetchUser());

			return requestAPI({
				method: ApiMethods.PUT,
				url: `/account/user/password/${userId}/username/${userName}`
			}).then(result => {
				let { data } = result;

				return Promise.all([
					dispatch(successUser())
				]).then(() => {
					return data;
				});
			}).catch(error => {
				dispatch(failureUser(error));

				throw error;
			});
		}
	}
};

export const updateUserProfile = (params) => {
	let { userName, userEmail, userCellPhoneNumber, receiveEmailAgreeYN, receiveSMSAgreeYN, receiveConsultAgreeYN, hashedPassword, newHashedPassword } = params;

	return (dispatch, getState) => {
		let { user: { fetching } } = getState();

		if (!fetching) {
			dispatch(fetchUser());

			return requestAPI({
				method: ApiMethods.PUT,
				url: '/account/user/',
				params: {
					userName, userEmail, userCellPhoneNumber, receiveEmailAgreeYN, receiveSMSAgreeYN, receiveConsultAgreeYN,
					hashedPassword: !!hashedPassword ? encodePassword(hashedPassword) : null,
					newHashedPassword: !!newHashedPassword ? encodePassword(newHashedPassword) : null
				}
			}).then(result => {
				let { data } = result;

				return Promise.all([
					dispatch(successUser()),
					dispatch(updateUserInfo(data))
				]).then(() => {
					return data;
				});
			}).catch(error => {
				dispatch(failureUser(error));

				throw error;
			});
		}
	}
};

export const updateUserWithdraw = (params) => {
	let { withdrawCode, withdrawReason } = params;

	return (dispatch, getState) => {
		let { user: { fetching } } = getState();

		if (!fetching) {
			dispatch(fetchUser());

			return requestAPI({
				method: ApiMethods.PUT,
				url: '/account/user/withdraw',
				params: { withdrawCode, withdrawReason }
			}).then(result => {
				let { data } = result;

				return Promise.all([
					dispatch(successUser()),
					dispatch(resetUserInfo()),
					goHome()
				]).then(() => {
					return data;
				});
			}).catch(error => {
				dispatch(failureUser(error));

				throw error;
			});
		}
	}
};

export const updateUserEmailReceive = (userNo, userEmail) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.PUT,
			url: '/account/user/email/receive',
			params: {
				userNo,
				userEmail
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestUserGrade = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/account/user/grade`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	};
};

export const requestUserGradeType = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/account/user/grade/type`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	};
};

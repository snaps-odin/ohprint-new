

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { ActionReview, ActionProduct } from 'actions/index';
import { addDomain } from 'utils/url';
import { getDatasetByName, getHeight } from 'utils/dom';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { InputField, TextAreaField, FileField } from 'components/common/fields'
import ThumbnailProduct from 'components/common/thumbnail-product';
import ThumbnailProductApparel from 'components/common/thumbnail-product-apparel';
import Grades from 'components/common/grades';
import Attention from 'components/common/attention';

class ReviewCreate extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			data: null,
			grade: {
				focus: 5,
				messages: [ '노력바라요!', '그럭저럭', '믿어도 좋아!', '추천합니다!', '감동먹었어!' ]
			},
			category: null,
			ready: false
		};

		this.onClickGrades = this.onClickGrades.bind(this);
		this.onClickClose = this.onClickClose.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickGrades(index) {
		this.setState(update(this.state, { grade: { focus: { $set: index } } }));
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onSubmit(values) {
		let { actions: { handleCreateReview, handleCloseContentsLayer, handleOpenAlertLayer }, options: { callback } } = this.props;
		let { data, grade: { focus: starRating } } = this.state;

		let selectedFile = values[ 'selectedFile' ];
		let isErrorFiles = selectedFile.find(file => file[ 'error' ]);

		if (!isErrorFiles) {
			let formData = new FormData();

			formData.append('orderCode', data[ 'orderCode' ]);
			formData.append('projectCode', data[ 'projectCode' ]);
			formData.append('title', values[ 'title' ]);
			formData.append('content', values[ 'contents' ]);
			formData.append('productClassCode', data[ 'productClassCode' ]);
			formData.append('starRating', starRating);

			selectedFile.length > 0 && selectedFile.map(file => {
				file && formData.append('file', file[ 'file' ]);
			});

			return handleCreateReview(formData).then(result => {
				let { issueCouponReason } = result;

				handleOpenAlertLayer({
					description: `${issueCouponReason || ''}${issueCouponReason ? '<br/>' : ''}작성하신 리뷰는 해당 상품의 소개 페이지에서<br/>확인해 보세요.`,
					confirm: true,
					confirmLabel: '리뷰 확인하기',
					callback: (confirmed) => {
						callback && callback(confirmed);
						handleCloseContentsLayer();
					}
				});
			}).catch(error => {
				handleOpenAlertLayer({
					description: error
				})
			});
		}
	}

	componentDidMount() {
		let { actions: { handleRequestReviewByOrderCode, handleUpdateLayer, handleGetProductByProductGroupCode }, options: { orderCode, projectCode } } = this.props;

		handleRequestReviewByOrderCode(orderCode, projectCode).then(result => {
			return result[ 'productClassCode' ] ? new Promise(resolve => {
				let { category } = handleGetProductByProductGroupCode(result[ 'productClassCode' ].slice(0, 3)) || {};
				resolve({ review: result, category: category || '' });
			}) : { review: result, category: null };
		}).then(result => {
			this.setState({ data: result[ 'review' ], category: result[ 'category' ], ready: true });
		}).then(() => {
			handleUpdateLayer();
		});
	}

	render() {
		let { states: { ui: { view: { height } }, config: { url: { cdn: cdnUrl } } }, actions: { handleChangeFormValue }, handleSubmit, valid, pristine, submitting } = this.props;
		let { data, grade: { focus: focusGrade, messages }, ready, category } = this.state;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;
		let isApparel = (category || '').match(/apparel/i);

		return ready &&
			(
				<div className="review-create-layer-wrap popup">
					<div className="container">
						<form onSubmit={handleSubmit(this.onSubmit)}>
							<div className="top">
								<h2>리뷰쓰기</h2>
							</div>

							<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
								<div className="inner" ref={(c) => {this.inner = c;}}>

									{React.cloneElement(<Attention/>, {
										value: {
											children: [
												{ value: '주문 번호당 1회에 한하여 리뷰를 작성하시면, 전 상품 할인쿠폰을 선물로 드립니다.' },
												{ value: '텍스트 리뷰 작성 시  1,000원 할인 쿠폰이, 포토 리뷰 작성 시  2,000원 쿠폰이 제공됩니다.' },
												{ value: '리뷰 작성 쿠폰으로 구매 후 재 리뷰 작성 시 쿠폰이 발급되지 않습니다.' },
												{ value: '종료 상품 및 1개월 이전에 구매한 상품은 리뷰를 작성하실 수 없습니다.' }
											]
										}
									})}

									<table border={0}>
										<caption><span className="blind">리뷰쓰기</span></caption>
										<colgroup>
											<col style={{ width: '120px' }}/>
											<col style={{ width: '270px' }}/>
											<col style={{ width: '120px' }}/>
											<col style={{ width: '270px' }}/>
										</colgroup>
										<tbody>
										<tr>
											<th>대표 이미지</th>
											<td colSpan={3} className={isApparel ? 'apparel' : ''}>
												{!isApparel && React.cloneElement(<ThumbnailProduct/>, {
													className: 'thumbnail',
													imageUrl: addDomain(cdnUrl, data[ 'thumbnailUrl' ]),
                          paperCode: data[ 'paperCode' ],
													productCode: data[ 'productCode' ],
													frameCode: data[ 'frameCode' ],
													directionType: data[ 'directionCode' ],
													type: 'showcase'
												})}

												{isApparel && (React.cloneElement(<ThumbnailProductApparel/>, {
													imageUrl: addDomain(cdnUrl, data[ 'thumbnailUrl' ]),
													skinUrl: addDomain(cdnUrl, data[ 'thumbnailSkinUrl' ]),
													frameType: data[ 'frameType' ] || '',
													position: data[ 'position' ] || 0
												}))}
											</td>
										</tr>

										<tr>
											<th>상품명</th>
											<td>{`${data[ 'productName' ]} [${data[ 'projectName' ]}]`}</td>
											<th>만족도 평가</th>
											<td className="evaluation">
												<span>{messages[ focusGrade - 1 ]}</span>
												<span>
													{React.cloneElement(<Grades/>, {
														maxLength: 5,
														className: 'big',
														focus: focusGrade,
														handleChangeIndex: this.onClickGrades
													})}
												</span>
												<span>별을 클릭하여 만족도를 평가해 주세요.</span>
											</td>
										</tr>

										<tr>
											<th>이미지 첨부</th>
											<td className="attach" colSpan={3}>
												<Field name="file"
												       id="file"
												       multiple={false}
												       accept="image/*"
												       maxFileLength={1}
												       maxFileSize={5}
												       handleChangeFormValue={handleChangeFormValue}
												       component={FileField}/>
											</td>
										</tr>

										<tr>
											<th>제목</th>
											<td colSpan={3}>
												<Field name="title"
												       className="box"
												       placeholder="제목을 입력해 주세요."
												       component={InputField}
												       validate={[ Validate.required ]}/>

											</td>
										</tr>
										</tbody>
										<tfoot>
										<tr>
											<td colSpan={4}>
												<Field name="contents"
												       className="box"
												       placeholder="내용을 입력해 주세요."
												       maxLength={2000}
												       showLength={true}
												       component={TextAreaField}
												       validate={[ Validate.required ]}
												       normalize={Normalize.maxLength(2000)}/>
											</td>
										</tr>
										<tr>
											<td colSpan={4}>
												* 상품과 관계없거나 인터넷 윤리에 부적절한 내용은 삭제될 수 있으며, 완료된 리뷰는 더 이상 수정이 불가능하니 신중하게 작성해 주세요.
											</td>
										</tr>
										</tfoot>
									</table>
								</div>
							</div>

							<div className="bottom" ref={(c) => {this.bottom = c;}}>
								<button type="button"
								        className="btn-white-medium"
								        onClick={this.onClickClose}>취소
								</button>

								<button type="submit" disabled={submitting}
								        className={`btn-${valid ? 'blue' : 'gray'}-medium`}>확인
								</button>
							</div>
						</form>
					</div>

					<button type="button"
					        className="icon icon-close-w-1414 close"
					        onClick={this.onClickClose}/>
				</div>
			)
	}
}

const formName = 'layer-review-create';

const mapStateToProps = (state, ownerProps) => {
	return {
		initialValues: {
			file: null,
			selectedFile: []
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

			handleRequestReviewByOrderCode: (orderCode, projectCode) => dispatch(ActionReview.requestReviewByOrderCode(orderCode, projectCode)),
			handleCreateReview: (formData) => dispatch(ActionReview.createReview(formData)),

			handleGetProductByProductGroupCode: (productGroupCode) => dispatch(ActionProduct.getProductByProductGroupCode(productGroupCode))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(ReviewCreate));

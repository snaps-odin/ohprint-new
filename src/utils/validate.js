

const aMB = 1000 * 1000;

export const isEmail = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,99}$/i.test(value);

export const isPhoneNumber = (value) => /^\d{3}-\d{3,4}-\d{4}|^\d{3}\d{3,4}\d{4}$/.test(value);

export const required = (value) => value && String(value).replace(/(\s*)/g, "") ? undefined : '필수 항목입니다.';

export const fileRequired = (value) => value && value.length > 0 ? undefined : '필수 항목입니다.';

export const shareURL = (value) => value && (value.match(/twitter.com/i) || value.match(/instagram.com/i)) ? undefined : '형식이 잘못 되었습니다.';

export const quietRequired = (value) => value && String(value).replace(/(\s*)/g, "") ? undefined : '';

export const requiredEmail = (value) => value ? undefined : '아이디를 입력해 주세요.';

export const requiredPassword = (value) => value ? undefined : '비밀번호를 입력해 주세요.';

export const requiredCouponNumber = (value) => value ? undefined : '쿠폰번호를 입력해 주세요.';

export const email = (value) => (!value || isEmail(value)) ? undefined : '유효하지 않은 이메일입니다.';

export const recommendEmail = (value) => {
  let res = (!value || isEmail(value)) ? undefined : '유효하지 않은 이메일입니다.';

  if(value && value.length > 0 && (value.substr(0,1) === "@")){
    res = undefined;
  }

  return res
};

export const minLength = (min,isShortMsg,required) => {
  if(!required) {
    return (value) => (!value || (value && String(value).length >= min)) ? undefined : isShortMsg ? `최소 ${min}자리 이상` : `최소 ${min}자리 이상 입력해 주세요.`;
  }
  return (value) => (value && String(value).length >= min) ? undefined : isShortMsg ? `최소 ${min}자리 이상` : `최소 ${min}자리 이상 입력해 주세요.`;
}

export const minLength2 = minLength(2,false,false);

export const minLength3 = minLength(3,false,false);

export const minLength4 = minLength(4,false,false);

export const minLength5 = minLength(5,false,false);

export const minLength6 = minLength(6,false,false);

export const minLength7 = minLength(7,false,false);

export const minLength8 = minLength(8,false,false);

export const minLength20 = minLength(20,false,false);

export const minLength33 = minLength(33,false,false);

export const shortMinLength2 = minLength(2, true,false);

export const shortMinLength3 = minLength(3, true,false);

export const shortMinLength4 = minLength(4, true,false);

export const shortMinLength5 = minLength(5, true,false);

export const shortMinLength6 = minLength(6, true,false);

export const shortMinLength7 = minLength(7, true,false);

export const shortMinLength2Required = minLength(2,true,true);

export const shortMinLength3Required = minLength(3,true,true);

export const shortMinLength4Required = minLength(4,true,true);

export const minValue = (min) => (value) => (!value || (value && Number(value) >= min) ) ? undefined : `최소 값은 ${min}입니다.`;

export const minValue1 = minValue(1);

export const minValue20 = minValue(20);

export const number = (value) => (!value || (value && !isNaN(Number(value)))) ? undefined : '숫자만 입력 가능.';

export const receiverZipCode = (value) => {
  return !value || (value && /^[0-9a-zA-Z]{1,7}$/.test(value))
    ? undefined
    : '숫자와 영문만 입력 가능'
}
export const phoneNumber = (value) => (!value || (value && isPhoneNumber(value))) ? undefined : '유효하지 않은 전화번호 입니다.';

export const passwordCase0 = (value) => /^(?=.*[a-zA-Z]+)(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]|.*[0-9]+).{6,15}$/.test(value);

export const passwordCase1 = (value) => /^(?=.*[0-9]+)(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]|.*[a-zA-Z]+).{6,15}$/.test(value);

export const passwordCase2 = (value) => /^(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+)(?=.*[0-9]|.*[a-zA-Z]+).{6,15}$/.test(value);

export const password = (value) => value && (passwordCase0(value) || passwordCase1(value) || passwordCase2(value)) ? undefined : '영문/숫자/특수문자 조합 8자리 이상 입력하세요.';

export const maxFileSize = (size) => (fileList, allValues, props) => fileList && fileList.length > 0 && new Array(fileList.length).fill(true).find((item, index) => fileList[ index ][ 'size' ] > size) ? `${size / (aMB)}MB 제한초과` : undefined;

export const maxFileSize3MB = maxFileSize(3 * aMB);

export const maxFileSize5MB = maxFileSize(5 * aMB);

export const includeNumber = (value) => !!value.match(/[0-9]/ig);

export const includeAlphabet = (value) => !!value.match(/[a-zA-Z]/ig);

export const includeSpace = (value) => !!value.match(/\s/g);

export const includeSpecialCharacter = (value) => !!value.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi);

export const includeKorean = (value) => !!value.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/ig);

export const notSpace = (value) => !includeSpace(value) ? undefined : '공백은 허용되지 않습니다.';

export const notSpecialCharacter = (value) => !includeSpecialCharacter(value) ? undefined : '특수문자는 허용되지 않습니다.';

export const notKorean = (value) => !includeKorean(value) ? undefined : '한글은 허용되지 않습니다.';

export const isMobile = () => !!window.navigator.userAgent.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/i);

export const isIOS = () => !!window.navigator.userAgent.match(/iPhone|iPod|iPad/i);

export const isMSIE = () => !!window.navigator.userAgent.match(/Trident|MSIE/g);

export const msieVersion = () => {
	let version = '';
	let ua = window.navigator.userAgent;
	let trident = ua.match(/Trident\/(\d.\d)/i);

	if (trident !== null) {
		switch (trident[ 1 ]) {
			case '3.0':
				version = '7';
				break;

			case '4.0':
				version = '8';
				break;

			case '5.0':
				version = '9';
				break;

			case '6.0':
				version = '10';
				break;

			case '7.0':
			default:
				version = '11';
				break;
		}
	} else {
		let reg = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
		if (reg.exec(ua) !== null) version = parseFloat(RegExp.$1);
	}
	return String(version);
};

export const browserType = () => {
	let type = '';
	let ua = String(window.navigator.userAgent).toLowerCase();

	if (ua.indexOf('edge') !== -1) {
		type = 'edge';
	} else if (ua.indexOf('chrome') !== -1) {
		type = 'chrome';
	} else if (ua.indexOf('safari') !== -1 || ua.indexOf('applewebkit/5') !== -1) {
		type = 'safari';
	} else if (ua.indexOf('firefox') !== -1) {
		type = 'firefox';
	} else if (ua.indexOf('opera') !== -1) {
		type = 'opera';
	} else {
		type = isMSIE() ? 'msie' + msieVersion() : 'unknown-browser';
	}
	return type;
};

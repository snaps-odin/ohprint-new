

import numeral from 'numeral';

import { isISOTimeFormat, getDateUnit, parseDateByTimestamp, getTimestamp, getADay, getAHour, getAMinute } from 'utils/date';

export const addZero = (value, length) => `${value}`.length < +length ? `${'0'.repeat(+length - 1)}${value}` : value;

export const toDate = (timestamp, format) => {
	let date = parseDateByTimestamp(timestamp);

	return getDateUnit().reduce((target, unit, index) => {
		target = target.includes(unit) ? target.replace(unit, date[ unit ]) : target;

		return target;
	}, format);
};

export const toNumber = (value) => numeral(value)[ 'value' ]() || 0;

export const toNumberOnly = (value) => Number(String(value).replace(/[^0-9]/g, ''));

export const toCash = (value) => numeral(value)[ 'format' ]('0,0');

export const toPhoneNumber = (value) => {
	let numbers = String(value).replace(/[^0-9]/g, '');

	if (numbers.length >= 11) {
		return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
	} else if (numbers.length == 10 && numbers.slice(0, 2) !== '01') {
		return `${numbers.slice(0, 2) || ''}-${numbers.slice(2, 6) || ''}-${numbers.slice(6, 10)}`;
	} else {
		return `${numbers.slice(0, 3) || ''}-${numbers.slice(3, 6) || ''}-${numbers.slice(6, 10)}`;
	}
};

export const getNumberWord = () => [ '', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구' ];

export const getDigitWord = () => [ '', '십', '백', '천' ];

export const getManWord = () => [ '', '만', '억', '조' ];

export const toCashKorean = (value) => {
	if (value) {
		let num = String(value).split('');
		let total = num.length;

		return num.reduceRight((target, key, index) => {
			let reverseIndex = total - (index + 1);

			target[ index ] = getNumberWord()[ key ];

			(key !== '0') && (target[ index ] += getDigitWord()[ reverseIndex % 4 ]);

			(reverseIndex % 4 === 0) && (target[ index ] += getManWord()[ reverseIndex / 4 ]);

			return target;
		}, []).join('');
	}
};

export const toDateKorean = (timestamp) => {
	let date = parseDateByTimestamp(timestamp);
	let distance = (getTimestamp() - new Date(toDate(timestamp, 'YYYY/MM/DD HH:mm:ss')).getTime());
	let output = '';

	if (distance >= getADay() * 2) {
		output = `${date[ 'YYYY' ]}.${date[ 'MM' ]}.${date[ 'DD' ]}`;
	}  else if (distance < getADay() * 2 && distance >= getADay()) {
		output = '어제';
	} else if (distance < getADay() && distance >= getAHour()) {
		output = `${parseInt(distance / getAHour(), 10)}시간전`;
	} else if (distance < getAHour() && distance >= getAMinute()) {
		output = (distance > getAMinute() ? `${parseInt(distance / getAMinute(), 10)}분전` : '방금');
	}

	return output;
};
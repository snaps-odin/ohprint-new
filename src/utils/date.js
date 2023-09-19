

import { addZero, toDate } from 'utils/format';
import moment from 'moment-timezone';

export const getASec = () => 1000;

export const getAMinute = () => 1000 * 60;

export const getAHour = () => 1000 * 60 * 60;

export const getADay = () => 1000 * 60 * 60 * 24;

export const getAMonth = () => 1000 * 60 * 60 * 24 * 30;

export const getWeekDays = () => [ '일', '월', '화', '수', '목', '금', '토' ];

export const getDateUnit = () => [ 'YYYY', 'MM', 'DD', 'HH', 'hh', 'mm', 'ss', 'w', 'AMPM', 'ampm' ];

export const getNow = () => new Date();

export const getTimestamp = (value) => value ? new Date(value).getTime() : getNow().getTime();

export const isISOTimeFormat = (value) => `${value}`.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/i);

export const parseDateByTimestamp = (timestamp) => {
	let value = isISOTimeFormat(timestamp) ? String(timestamp).replace(/-/g, '/').replace(/T/, ' ').split('.')[ 0 ] : timestamp;
	let date = value ? new Date(value) : getNow();

	return {
		'YYYY': date.getFullYear(),
		'MM': addZero(date.getMonth() + 1, 2),
		'DD': addZero(date.getDate(), 2),
		'HH': addZero(date.getHours(), 2),
		'hh': (date.getHours() <= 12) ? addZero(date.getHours(), 2) : addZero(date.getHours() - 12, 2),
		'mm': addZero(date.getMinutes(), 2),
		'ss': addZero(date.getSeconds(), 2),
		'w': getWeekDays()[ date.getDay() ],
		'AMPM': (date.getHours() <= 12) ? 'AM' : 'PM',
		'ampm': (date.getHours() <= 12) ? 'am' : 'pm'
	};
};

export const offsetTimestampByDate = (sourceDate, targetDate) => {
	let sourceTimestamp = new Date(toDate(sourceDate, 'YYYY/MM/DD HH:mm:ss')).getTime();
	let targetTimestamp = new Date(toDate(targetDate, 'YYYY/MM/DD HH:mm:ss')).getTime();

	return sourceTimestamp - targetTimestamp;
};

export const checkOverTime = (sourceDate) => {
	let nowDate = moment().tz("Asia/Seoul");
	let endDate = moment(sourceDate, 'YYYY-MM-DD HH:mm:ss');
	return (endDate.diff(nowDate, 'seconds') > 0 );
}

export const checkOverTimeStartEnd = (firstDate,secondDate) =>{
  return (!checkOverTime(firstDate) && checkOverTime(secondDate))
}

export const checkOverTimeSelect = (fristDate,secondDate) => {
	let nowDate = moment(fristDate, 'YYYY-MM-DD HH:mm:ss');
	let endDate = moment(secondDate, 'YYYY-MM-DD HH:mm:ss');
	return (nowDate.diff(endDate, 'seconds') > 0 );
}

export const nowDate = () => {
  return moment().tz("Asia/Seoul");
}


export const offsetMonthByDate = (sourceDate, targetDate) => {
	let sourceYYYY = Number(toDate(sourceDate, 'YYYY')) * 12;
	let sourceMM = Number(toDate(sourceDate, 'MM'));
	let targetYYYY = Number(toDate(targetDate, 'YYYY')) * 12;
	let targetMM = Number(toDate(targetDate, 'MM'));

	return (sourceYYYY + sourceMM) - (targetYYYY + targetMM);
};

export const offsetDayByDate = (sourceDate, targetDate) => {
	return Math.ceil(offsetTimestampByDate(sourceDate, targetDate) / (1000 * 3600 * 24));
};

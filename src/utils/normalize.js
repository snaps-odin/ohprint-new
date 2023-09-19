

import { toNumberOnly, toCash } from 'utils/format';

export const maxLength = (max) => (value, previousValue) => String(value).length <= max ? value : String(previousValue).slice(0, max);

export const underValue = (maxValue, prefix) => (value, previousValue, allValues) => {
	let currentValue = toNumberOnly(value);
	let nextValue = maxValue <= currentValue ? maxValue : currentValue;

	return `${(prefix && nextValue !== 0) ? prefix : ''}${toCash(nextValue)}`;
};

export const upperValue = () => (value, previousValue, allValues) => {
	return Math.max(1, Math.ceil(value));
};

export const onlyNumber = () => (value, previousValue, allValue) => {
	return value
		? toNumberOnly(value)
		: null;
};

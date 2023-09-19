

export const getDeepValue = (source, paths) => paths.split('.').reduce((target, path, index, array) => {
	target = target[ path ] || (array.length - 1 === index ? null : {});

	return target;
}, source || {});

export const isEmpty = (source) => Object.getOwnPropertyNames(source).length < 1;

export const isEmptyObject = (param) => Object.keys(param).length === 0 && param.constructor === Object;

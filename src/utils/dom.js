

import { isMSIE } from './validate';
import { snakeToCamel } from 'utils/string';

export const getWidth = (el) => {
	let width = 0;

	if (el) {
		width += el.offsetWidth;
		width += Number(getStyle(el, 'margin-left').replace(/px/i, '')) || 0;
		width += Number(getStyle(el, 'margin-right').replace(/px/i, '')) || 0;
	}

	return width;
};

export const getHeight = (el) => {
	let height = 0;

	if (el) {
		height += el.offsetHeight;
		height += Number(getStyle(el, 'margin-top').replace(/px/i, '')) || 0;
		height += Number(getStyle(el, 'margin-bottom').replace(/px/i, '')) || 0;
	}

	return height;
};

export const getPosition = (el) => {
	let x = 0;
	let y = 0;

	if (el && el.getBoundingClientRect) {
		let rect = el.getBoundingClientRect();

		x = rect.left;
		y = rect.top;
	} else {
		while (el) {
			if (String(el.tagName).match(/body/i)) {
				x += (el.offsetLeft - ( el.scrollLeft || document.documentElement.scrollLeft || document.body.scrollLeft ) + el.clientLeft);
				y += (el.offsetTop - ( el.scrollTop || document.documentElement.scrollTop || document.body.scrollTop ) + el.clientTop);
			} else {
				x += (el.offsetLeft - el.scrollLeft + el.clientLeft);
				y += (el.offsetTop - el.scrollTop + el.clientTop);
			}

			el = el.offsetParent;
		}
	}

	return { top: y, left: x };
};

export const getDatasetByName = (el, name) => {
	return el.dataset ? el.dataset[ snakeToCamel(name) ] : el.getAttribute(`data-${name}`);
};

export const getDataURLByFile = (file) => {
	return new Promise((resolve, reject) => {
		let reader = new FileReader();

		reader.addEventListener('load', (event) => {
			resolve(event.currentTarget[ 'result' ]);
		}, false);

		reader.readAsDataURL(file);
	});
};

export const getStyle = (el, cssRule) => {
	if(!document) return '';
	let value = '';

	if (el) {
		if (document.defaultView && document.defaultView.getComputedStyle) {
			value = document.defaultView.getComputedStyle(el, '').getPropertyValue(cssRule);
		} else if (el.currentStyle) {
			cssRule = cssRule.replace(/\-(\w)/g, function (strMatch, p1) {
				return p1.toUpperCase();
			});

			value = el.currentStyle[ cssRule ];
		}
	}

	return value;
};

export const setFocus = (el) => {
	el && document.activeElement.name !== el.name && el.focus();
};

export const setBlur = (el) => {
	el && document.activeElement.name === el.name && el.blur();
};



export const clearStyle = (el) => {
	el && el.setAttribute('style', '');
};

export const fireResize = () => {
	if (!!isMSIE()) {
		let event = document.createEvent('CustomEvent');

		event.initCustomEvent('resize', true, false, undefined);

		window[ 'dispatchEvent' ](event);
	} else {
		window[ 'dispatchEvent' ](new Event('resize', { 'bubbles': true, 'cancelable': false }));
	}
};

export const isCollisionByPoint = (el, x, y) => {
	if (el) {
		let { top, left } = getPosition(el);
		let width = getWidth(el);
		let height = getHeight(el);

		return (x >= left && x <= left + width) && (y >= top && y <= top + height);
	} else {
		return false;
	}
};

export const getTransformStyle = (selectorName, rotateX, rotateY, rotateZ, translateX = 0, translateY = 0, scale = 1, animationTime = 1) => {
	let style = `${selectorName} {
                -webkit-transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateX(${translateX}px) translateY(${translateY}px) scale(${scale});
                -moz-transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateX(${translateX}px) translateY(${translateY}px) scale(${scale});
                -ms-transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateX(${translateX}px) translateY(${translateY}px) scale(${scale});
                transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateX(${translateX}px) translateY(${translateY}px) scale(${scale});`;

	style += `}`;
	return style;
};

export const removeCss = (styleSheet, selectorText) => {
	for (let i = 0; i < styleSheet.cssRules.length; i++) {
		let cssRule = styleSheet.cssRules[ i ];

		if (cssRule.selectorText === selectorText) {
			styleSheet.deleteRule(i);
			removeCss(styleSheet, selectorText);
			break;
		}
	}
};

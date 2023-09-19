

import { clearStyle } from './dom';

const getDocumentElement = () => document[ 'scrollingElement' ] || document[ 'documentElement' ] || document[ 'body' ];

export const isBottom = ({ el }) => {
	let { clientHeight, scrollHeight, scrollTop } = el || getDocumentElement();

	return Math.max(0, Math.abs(clientHeight - scrollHeight)) <= Math.round(scrollTop);
};

export const lockScroll = (bool) => {
	let el = getDocumentElement();

	bool ? el.style.overflow = 'hidden' : clearStyle(el);
};

export const topScroll = () => window.scrollTo(0, 0);

export const getScrollTop = (el) => (el || getDocumentElement()).scrollTop;

export const setScrollTop = (el, value) => {(el || getDocumentElement()).scrollTop = value;};
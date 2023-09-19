

export const share = (url, title, hashtag) => {
	let path = `https://twitter.com/intent/tweet?text=${title || ''}\n\n&url=${url}${hashtag ? `&hashtag=${hashtag}` : ''}`;

	let popup = window.open(path, 'share-twitter');
	popup && popup.focus();
};
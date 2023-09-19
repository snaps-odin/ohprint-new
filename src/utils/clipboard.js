

export const clipBoard = (el) => {
	el && new Promise((resolve, reject) => {
		if ((el[ 'tagName' ] || '').match(/textarea/i)) {
			let range = document.createRange();
			let selection = window.getSelection();

			range.selectNodeContents(el);
			selection.removeAllRanges();
			selection.addRange(range);

			el.setSelectionRange(0, 999999);
		} else {
			el.select();
		}

		resolve();
	}).then(() => {
		document.execCommand('copy');
	}).then(() => {
		window.getSelection().removeAllRanges();
	});
};
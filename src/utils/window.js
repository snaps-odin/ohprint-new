

export const openCenter = (url, name, width, height) => {
	let left = (window.screenLeft || window.screenX) + (window.innerWidth / 2) - (width / 2);
	let top = (window.screenTop || window.screenY) + (window.innerHeight / 2) - (height / 2);

	return window.open(url, name, `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=${width},height=${height},top=${top},left=${left}`);
};
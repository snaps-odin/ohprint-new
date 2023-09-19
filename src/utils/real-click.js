

import load from 'load-script';

const asyncScript = (params) => {
	return new Promise((resolve, reject) => {
		load(`https://tk.realclick.co.kr/tk_comm.js?${params}`, { charset: 'utf-8' }, (error, script) => {
			!error ? resolve(script) : reject(error);
		});
	});
};

export const history = () => {
	Promise.all([
		(window[ 'dspu' ] = 'SB9b2hwcmludG1l')
	]).then(() => {
		asyncScript(`dspu=${window[ 'dspu' ]}&dspt=${window[ 'dspt' ] || ''}&dspo=${window[ 'dspo' ] || ''}&dspom=${window[ 'dspom' ] || ''}`);
	});
};
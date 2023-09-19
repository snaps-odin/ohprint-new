import { goError } from 'utils/url';
import {isProduction} from "configs/properties";

export const asyncChunk = (imports, resolve, reject) => {
	return Promise.all(imports).then(modules => {
		resolve(null, modules.length < 2 ? modules[ 0 ] : modules);
	}).catch(error => {
	isProduction
			?
			(
				reject
					? reject()
					: goError(999)
			)
			:
			window.console.error(error);
	});
};
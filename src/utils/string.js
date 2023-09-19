

export const snakeToCamel = (value) => String(value).replace(/(\-\w)/g, (m) => m[ 1 ].toUpperCase());

export const breaklines = (value) => String(value).replace(/(\r\n|\n|\r)/gm, '<br/>');

export const clearStyle = (value) => String(value)
	.replace(/FONT-[a-zA-Z]{1,999}[:]\s\w{1,999}[;]{0,1}\s{0,1}/gi, '')
	.replace(/\"\/Upload/g, '\"http://bo.snaps.co.kr/Upload')
	.replace(/style=\"\"/gi, '');

export const clearIMGTag = (value) => String(value).replace(/<img[^>]+['\"][^>]*>/gi, '');

export const clearBRTag = (value) => String(value).replace(/<\/br\/>/gi, '')
	.replace(/<br\/>/gi, '')
	.replace(/<br>/gi, '');

export const clearSpace = (value) => String(value).replace(/\s/g, '');

export const clearSpecialCharacter = (value) => String(value).replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, '');


export const clearFontFamily = (value) => String(value)
  .replace(/font-family:.*?;/gi, 'font-family: YoonGothicPro740;line-height: 1.83;')
  .replace(/face=\".*?\"|face=\'.*?\'/gi, '')
  .replace(/font-size:.*?;/gi, '');
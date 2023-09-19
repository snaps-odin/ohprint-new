export const getSnsName = (snsType) => {
  switch(snsType.toUpperCase()){
    case 'NAVER':
      return '네이버';
    case 'FACEBOOK':
      return '페이스북';
    case 'APPLE':
      return '애플';
    default:
      return '일반';
  }
}

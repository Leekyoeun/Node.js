const crypto=require('crypto');

console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64')); //createHash(알고리즘) :  사용할 해시 알고리즘을 넣습니다.
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex')); //update(문자열) : 변환할 문자열을 넣습니다.
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64')); //digest(인코딩) : 인코딩할 알고리즘을 넣습니다.

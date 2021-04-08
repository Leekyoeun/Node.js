const url=require('url');

const {URL}=url;
const myURL=new URL('https://www.gilbut.co.kr/book/bookList.aspx?sercatel=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('---------------------------------');
const parsedUrl=url.parse('http://www.gilbut.co.kr/book/bookLis.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));

//코드설명
//WHATWG 방식은 search부분을 searchParams라는 특수한 객체로 반환하므로 유용합니다.
//searh 부분은 보통 주소를 통해 데이터를 전달할 때 사용됩니다.
//search 부분은 ?로 시작하고, 그 뒤에 키=값 형식으로 데이터를 전달합니다.
//여러 키가 있을 경우에는 &로 구분합니다.

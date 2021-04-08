const {URL}=require('url');

const myURL=new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams', myURL.searchParams);
console.log('searchParams.getAll():',myURL.searchParams.get('limit')); //get(): 키에 해당하는 첫번째 값만 가져옵니다.
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():', myURL.searchParams.has('page')); //has(): 해당 키가 있는지 없는지를 검사합니다.

console.log('searchParams.keys():', myURL.searchParams.keys()); //searchParams의 모든 키를 반복기(ES2015) 객체로 가져옵니다.
console.log('searchParams.values():', myURL.searchParams.values());//values(): searchParams의 모든 값을 반복기 객체로 가져옵니다.

myURL.searchParams.append('filter', 'es3'); //append(): 해당 키를 추가합니다. 같은 키의 값이 있다면 유지하고 하나 더 추가합니다.
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter')); //getAll(): 키에 해당하는 모든 값들을 가져옵니다. category 키에는 nodejs와 javascript라는 두 가지 값이 들어있습니다.

myURL.searchParams.set('filter', 'es6'); //set(): append와 비슷하지만, 같은 키의 값들을 모두 지우고 새로 추가합니다.
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter'); //delete(): 해당 키를 제거합니다.
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString()); //toString(): 조작한 searchParams 객체를 다시 문자열로 만듭니다. 
//이 문자열을 search에 대입하면 주소 객체에 반영됩니다.
myURL.search=myURL.searchParams.toString();
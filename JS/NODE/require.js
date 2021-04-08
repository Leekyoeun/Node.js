console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports='저를 찾아보세요';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache); //파일 이름이 속성명으로 들어있는 것을 볼 수 있다. 속성값으로는 각 파일의 모듈 객체가 저장되어 있음
console.log('require.main입니다.');
console.log(require.main===module); //require.main은 노드 실행 시 첫 모듈을 가리킨다. 첫 모듈인지 알아보는 문장임
console.log(require.main.filename); //첫 모듈의 파일 이름을 알아보는 문장임

//코드설명
//반드시 require가 파일 최상단에 위치할 필요가 없고, module.exports도 최하단에 위치할 필요가 없다


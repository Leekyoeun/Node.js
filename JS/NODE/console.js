const string='abc';
const number=1;
const boolean=true;
const obj={
    outside:{
        inside:{
            key:'value',
        },
    },
};
console.log('전체 시간'); //평범한 로그를 콘솔에 표시합니다. console.log(내용, 내용,...)처럼 여러 내용을 동시에 표시할 수도 있습니다.
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.log(string, number, boolean);
console.error('에러 메세지는 console.error에 담아주세요.'); //에러를 콘솔에 표시합니다.

console.table([{name:'제로', birth:1994},{name:'hero',birth:1988}]); //배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현됩니다.

console.dir(obj, {colors:false, depth:2}); //객체를 콘솔에 표시할 때 사용합니다. 
//첫 번째 인수로 표시할 객체를 넣고, 두 번째 인수로 옵션을 넣습니다. 옵션의 colors를 true로 하면 콘솔에 색이 추가되어 보기가 한결 편해집니다.
//dapth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정합니다. 기본값은 2입니다.
console.dir(obj, {colors:true, depth:1});

console.time('시간 측정'); //console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 tiimeEnd 사이의 시간을 측정합니다.
for(let i=0; i<100000; i++){}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적'); //에러가 어디서 발생했는지 추적할 수 있게 합니다. 
    //일반적으로 에허 발생 시 에러 위치를 알려주므로 자주 사용하지는 않지만, 위치가 나오지 않는다면 사용할 만합니다.

}
function a(){
    b();
}
a();

console.timeEnd('전체 시간');
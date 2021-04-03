const {odd, even}=require('./var');
const checkNumber=require('./func');

function checkStringOddOrEven(str){
    if(str.length %2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

//코드설명
//여러 파일에 걸쳐 재사용되는 함수나 변수를 모듈로 만들어두면 편리함
//모듈이 많아지고 모듈 간의 관계가 얽히게 되면 구조를 파악하기 어렵다는 단점도 있음

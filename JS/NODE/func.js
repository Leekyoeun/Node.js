const {odd, even}=require('./var');

function checkOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

module.exports=checkOddOrEven;

//코드설명
//require 함수 안에 불러올 모듈의 경로를 적는다. 
//var.js에서 변수를 불러온 뒤, 숫자의 홀짝을 판별하는 함수를 선언했다. 
//그리고 다시 module.exports에 함수를 대입했다. 이렇게 다른 모듈을 사용하는 파일을 다시 모듈로 만들 수 있다.
//또한, module.exports에는 객체만 대입해야 하는 것이 아니라 함수나 변수를 대입해도 된다.
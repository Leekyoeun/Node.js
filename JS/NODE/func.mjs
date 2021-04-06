import checkOddOrEven from './func';
import { odd, even } from './var';

function checkOddorEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

export default checkOddOrEven;

//코드설명
//require 함수나 module 객체는 노드의 내장 객체이므로 따로 선언하지 않아도 사용할 수 있음

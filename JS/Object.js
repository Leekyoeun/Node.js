var sayNode=function(){
    console.log('Node');
};
var es='ES';
var oldObject={
    sayJS:function(){
        console.log('JS');
    },
    sayNode: sayNode,//속성명과 변수명이 동일한 경우 한번만 써도 되게 변경됨 => 코드의 중복 최소화
};
oldObject[es+6]='Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

const newObject={
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6]: 'Fasntastic', //ES2015 문법에서는 객체 리터럴 안에 동적 속성을 선언가능
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
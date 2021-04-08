const dep1=require('./dep1');
const dep2=require('./dep2');
dep1();
dep2();

//코드설명
//순환참조 발생됨

if(true){
    var x=3;
}
console.log(x);

if(true){
    const y=3;
}
console.log(y); //Uncaught ReferenceError : Y is not defined


//코드설명
//var은 함수 스코프를 가지므로 블록과 관계없이 접근가능
//const,let은 블록 스코프를 가지므로 블록 밖에서는 접근 불가능
//블록 스코프를 사용하면 호이스팅(함수 안에 선언되어 있는 모든 것들을 최상단에 선언하는 것) 같은 문제도 해결되고 코드 관리도 수월해짐
//const는 한 번 값을 할당하면 다른 값을 할당하는 것이 불가능, 초기화할 때 값을 할당하지 않으면 에러 발생 => const로 선언한 변수를  '상수'라고 부름

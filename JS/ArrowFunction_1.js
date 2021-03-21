function add(x,y){
    return x+y;
}

const add2=(x,y)=>{
    return x+y;
}

const add3=(x,y)=>x+y;

const add4=(x,y)=>(x+y); //Arrow Function에서 return문 밖에 없는 경우에는 return문 줄이기 가능

function not1(x){
    return !x;
}

const not2=x=>x; //매개변수가 한 개이면 소괄호로 묶지 않아도 무방

//코드설명
//화살표 함수에서는 function 선언 대신 =>  기호로 함수를 선언함. 또한, 변수에 대입하면 나중에 재사용할 수 있음
//화살표 함수에서 내부에 return문 밖에 없는 경우에는 return문을 줄일 수 있음. 또한 매개변수가 한 개면 매개변수를 소괄호로 묶지 않아도 됌
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
var candyMachine={
    status:{
        name:'node',
        count:5,
    },
    getCandy: function(){
        this.status.count--;
        return this.status.count;
    },
};
var getCandy=candyMachine.getCandy;
var count=candyMachine.status.count;


const candyMachine={
    status:{
        name:'node',
        count:5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    },
};
const {getCandy, status:{count}}=candyMachine;


//코드설명
//구조분해 할당을 사용하면 함수의 this가 달라질 수 있음
//달라진 this를 원래대로 바꿔주려면 bind 함수를 따로 사용해야함
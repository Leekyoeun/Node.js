class Human{
    constructor(type='human'){
        this.type=type;
    }
    static isHuman(human){
        return human instanceof Human;
    }
    breathe(){
        alert('h-a-a-a-m');
    }
}
class Zero extends Human{
    constructor(type, firstName, lastName){
        super(type);
        this.firstName=firstName;
        this.lastName=lastName;
    }
    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero=new Zero('human','Zero','Cho');
Human.isHuman(newZero); //true

//코드설명
//전반적으로 class안으로 그룹화 됌
//생성자 함수는 constructor 안으로 들어갔고, Human, isHuman 같은 클래스 함수는 static 키워드로 전환되었음
//프로토타입 함수들도 모두 class 블록 안에 포함되어 어떤 함수가 어떤 클래스 소속인지 보기 쉬움
//상속도 간단해져서 extends 키워드로 쉽게 상속 가능
//다만, 이렇게 클래스 문법으로 바뀌었더라도 자바스크립트는 프로토타입 기반으로 동작한다는 것을 명심해야함
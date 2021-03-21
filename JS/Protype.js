var Human=function(type){
    this.type=type || 'human';
};

Human.isHuman=function(human){
    return human instanceof Human;
}

Human.prototype.breathe=function(){
    alert('h-a-a-a-m');
};

var Zero=function(type, firstName, lastName){
    Human.apply(this, arguments);
    this.firstNamefirstName;
    this.lastName=lastName;
};
Zero.prototype=Object.create(Human.prototype);
Zero.prototype.constructor=Zero; //상속하는 부분
Zero.prototype.sayName=function(){
    alert(this.firstName+' '+this.lastName);
};
var oldZero=new Zero('human','Zero','Cho');
Human.isHuman(oldZero); //true

//코드설명
//Human 생성자 함수가 있고, 그 함수를 Zero 생성자 함수가 상속함
//Zero 생성자 함수를 보면 상속받기 위한 코드가 상당히 난해하다는 것을 알 수 있음
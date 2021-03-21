var relationship1={
    name:'zero',
    friends: ['nero','hero','xero'],
    logFriends:function(){
        var that=this.friends; //realatioship1을 가리키는 this를 that에 저장
        this.friends.forEach(function (friends){ //에러 출력됌 
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

const relationship2={
    name:'zero',
    friends:['nero','hero','xero'],
    logFriends(){
        this.friends.forEach(friend=>{
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();

//코드설명
//relationship1.logFriends() 안의 forEach문에서는 function 선언문을 사용함
//각자 다른 함수 스코프의 this를 가지므로 that이란ㄴ 변수를 사용해서 relationship1에 간접적으로 접근하고 있음

//relationship2.logFriends() 안의 forEach문에서는 화살표 함수를 사용함
//띠라서 바깥 스코프인 logFrieds()의 this를 그대로 사용가능. 상위 스코프의 this를 그대로 물려받는 것

//즉, 기본적으로 화살표 함수를 쓰되, this를 사용해야 하는 경우에는 화살표 함수와 함수 선언문 (function) 중에서 하나 고르면 됌
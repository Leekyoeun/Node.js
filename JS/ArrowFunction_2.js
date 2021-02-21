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
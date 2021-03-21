const codition=true;
const promise= new Promise((resolve, reject)=>{
    if(codition){
        resolve("성공");
    }else{
        reject("실패");
    }
});
promise
    .then((message)=>{
        return new Promise((resolve, reject)=>{
            resolve(message);
        });
    })
    .then((message2)=>{
        console.log(message2);
        return new Promise((resolve, reject)=>{
            resolve(message2);
        });
    })
    .then((message3)=>{
        console.log(message3);
    })
    .catch((error)=>{
        console.log(error);
    });

    //코드설명
    //then이나 catch에서 다시 다른 then이나 catch를 붙일 수 있다. 이전 then의 return 값을 다음 then의 매개변수로 넘긴다.
    //프로미스를 return한 경우에는 프로미스가 수행된 후 다음 then이나 catch가 호출된다.
    //처음 then에서 messasge를 resolve하면 다음 then에서 message2로 받을 수 있다. 
    //여기서 다시 message2를 resolve한 것을 다음 then에서 message3으로 받았다.
    //단, then에서 new Promise를 return해야 다음 then에서 받을 수 있다는 것을 기억하자
    

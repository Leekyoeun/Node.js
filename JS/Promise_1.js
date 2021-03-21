const condition=true; //true면 resolve, false면 reject
const promise=new Promise((resolve, reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});
//다른 코드가 들어갈 수 있음
promise
    .then((message)=>{
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error)=>{
        console.error(error); //실패(reject)한 경우 실행
    })
    .finally(()=>{ //끝나고 무조건 실행
        console.log('무조건');
    });


//코드설명
//new Promise로 프로미스를 생성할 수 있으며, 그 내부에 resolve와 reject를 매개변수로 갖는 콜백함수를 삽입함
//promise 변수에 then과 catch 메소드를 붙일 수 있으며, 성공하면 then이 실행되고 실패하면 catch로 실행됨
//프로미스:시행은 바로 하되 결과값은 나중에 받는 객체

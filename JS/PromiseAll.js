const promise1=Promise.resolve('성공1');
const promise2=Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.error(error);
    });

//코드설명
//프로미스 여러 개를 한 번에 실행할 수 있는 방법이 있음 => Promise.all을 활용하면 됌
//Promise.resolve는 즉시 resolve하는 프로미스를 만드는 방법임
//프로미스가 여러 개 있을 때 Promise.all에 넣으면 모두 resolve될 때까지 기다렸다가 then으로 넘어감

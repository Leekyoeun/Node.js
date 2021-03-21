const promise1=Promise.resolve('성공');
const promise2=Promise.resolve('실패');
(async()=>{
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})();

//코드설명
//for문과 async/await를 같이 써서 프로미스를 순차적으로 실행할 수 있음
//노드 10버전부터 지원하는 ES2018 문법임

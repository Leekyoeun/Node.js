async function findAndSaveUser(Users){

}
findAndSaveUser().then(()=>{});
async function other(){
    const result=await findAndSaveUser();
}

//코드설명
//for await of문을 사용해서 프로미스 배열을 순회하는 모습
//async 함수의 반환값은 항상 Promise로 감싸짐
//따라서 실행 후 then을 붙이거나 또 다른 async 함수 안에서 await을 붙여서 처리할 수 있음
//앞으로 중첩되는 콜백 함수가 있다면 프로미스를 거쳐 awnc/await 문법으로 바꾸면 코드가 훨씬 간결해질 것

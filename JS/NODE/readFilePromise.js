const fs=require('fs').promises;

fs.readFile('./readme.txt')
    .then((data)=>{
        console.log(data);
        console.log(data.toString());
    })
    .catch((err)=>{
        console.error(Err);
    });

//코드설명
//fs 모듈에서 promise 속성을 불러오면 프로미스 기반의 fs 모듈을 사용할 수 있게 됩니다.
//앞으로는 프로미스 기반의 fs 모듈을 사용하겠습니다.

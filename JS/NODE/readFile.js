const fs=require('fs');

fs.readFile('./readme.txt', (err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

//코드설명
//fs 모듈을 불러온 뒤 읽을 파일의 경로를 지정합니다. 
//여기서는 파일의 경로가 현재 파일 기준이 아니라 node 명령어를 실행하는 콘솔 기준이라는 점에 유의해야 합니다.
//파일을 읽은 후에 실행될 콜백 함수도 readFile 메소드의 인수로 같이 넣습니다.
//이 콜백 함수의 매개변수로 에러 또는 데이터를 받습니다. 
//파일을 읽다가 무슨 문제가 생겨싸면 에러가 발생할 것이고, 정상적으로 읽었다면 다음과 같이 콘솔에 결과가 나올 것입니다.


const fs=require('fs').promises;

fs.writeFile('./writeme.txt','글이 입력됩니다')
    .then(()=>{
        return fs.readFile('./writeme.txt');
    })
    .then((data)=>{
        console.log(data.toString());
    })
    .catch((err)=>{
        console.error(err);
    });

//코드설명
//writeFile 메소드에 생성될 파일의 경로와 내용을 입력합니다.
//도중에 에러가 발생하지 않았다면 같은 폴더 내에 writeme.txt가 생성되었을 것입니다. 
//직접 열어봐도 되지만, 파일 시스템을 공부하는 중이므로 readFile 메소드로 파일을 읽어봅니다.
//파일이 잘 만들어졌고, 그 후 파일 읽기도 성공했습니다.
//이제 자바스크립트로도 파일 시스템에 간단히 접근할 수 있게 되었습니다. 
//fs 모듈의 다른 메소드들을 배우기 전에 몇 가지 개념을 미리 살펴보겠습니다.

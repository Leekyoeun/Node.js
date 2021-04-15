const spawn=require('child_process').spawn;

var process=spawn('python', ['test.py']);

process.stdout.on('data',function(data){
    console.log(data.toString());
}); //실행 결과

process.stderr.on('data', function(data){
    console.error(data.toString());
}); //실행 에러

//코드설명
//exec와 spaws의 차이
//exec는 shell을 실행해서 명령어를 수행하고, spaws은 새로운 프로세스를 띄우면서 명령어를 실행합니다.
//spqaw에서도 세 번쨰 인수로 { shell : true}를 제공하면 exec처럼 shell을 실행해서 명령어를 수행합니다.
//shell을 실행하는지 마는지에 따라 수행할 수 있는 명령어에 차이가 있습니다.

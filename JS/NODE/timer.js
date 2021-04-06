const timeout=setTimeout(()=>{
    console.log('1.5초 후 실행');
},1500);

const interval=setInterval(()=>{
    console.log('1초마다 실행');
},1000);

const timeout2=setTimeout(()=>{
    console.log('실행되지 않습니다');
},3000);

setTimeout(()=>{
    clearTimeout(timeout2);
    clearInterval(interval);
},2500);

const immediate=setImmediate(()=>{
    console.log('즉시 실행');
});

const immediate2=setImmediate(()=>{
    console.group('실행되지 않습니다');
});

clearImmediate(immediate2);

//setImmediate(콜백)과 setTimeout(콜백,0)
//setImmediate(콜백)과 setTimeout(콜백,0)에 담긴 콜백 함수는 이벤트 루프를 거친 뒤 즉시 실행됩니다.
//둘의 차이점은, setImmediate는 특수한 경우에 setTimeout(콜백,0)보다 먼저 실행됩니다.
//파일 시스템 접근, 네트워킹 같은 I/O 작업의 콜백 함수 안에서 타이머를 호출하는 경우입니다.
//하지만 setImmediate가 항상 setTimeout(콜백,0)보다 먼저 호출되지 않는다는 사실만 알아두세요.
//헷갈리지 않도록 setTimeout(콜백,0)은 사용하지 않는 것을 권장합니다.
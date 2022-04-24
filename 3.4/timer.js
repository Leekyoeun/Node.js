const timeout = setTimeout(() => {
    // 주어진 밀리초 이후에 콜백 함수를 시행합니다.
    console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
    // 주어진 밀리초마다 콜백 함수를 반복 실행합니다.
    console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
    console.log("실행되지 않습니다");
}, 3000);

setTimeout(() => {
    //setTimeout을 취소합니다.
    clearTimeout(timeout2);
    //setInterval을 취소합니다.
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    // 콜백 함수를 즉시 실행합니다.
    console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
    console.log("실행되지 않습니다");
});

clearImmediate(immediate2);
//setImmediate를 취소합니다.
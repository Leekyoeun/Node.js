const fs=require('fs');

console.log('시작');
let data=fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data=fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data=fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');


//코드설명
//readFileSync 메소드를 사용하면 요청이 수백 개 이상 들어올 때 성능에 문제가 생깁니다.
//Sync 메소드를 사용할 때는 이전 작업이 완료되어야 다음 작업을 진행할 수 있습니다.
//즉, 백그라운드가 작업하는 동안 메인 스레드는 아무것도 하지 못하고 대기하고 있어야 하는 것입니다.
//메인 스레드가 일을 하지 않고 노는 시간이 생기므로 비효율적입니다.
//백그라운드는 fs 작업을 동시에 처리할 수도 있는데, Sync 메소드를 사용하면 백그라운드조차 동시에 처리할 수 없게 됩니다.
//비동기 fs 메소드를 사용하면 백그라운드가 동시에 작업할 수도 있고, 메인 스레드는 다음 작업을 처리할 수 있습니다.

//동기 메소드들은 이름 뒤에 Sync가 붙어 있어 구분하기 쉽습니다. writeFileSync도 있습니다.
//하지만 동기 메소드를 사용해야 하는 경우는 극히 드뭅니다. 프로그램을 처음 실행할 때 초기화 용도로만 사용하는 것을 권장합니다.
//대부분의 경우에는 비동기 메소드가 훨씬 더 효율적입니다.

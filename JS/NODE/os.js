const os=require('os');

console.log('운영체제 정보------------------------------');
console.log('or.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('경로-------------------------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보----------------------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);
console.log('메모리 정보--------------------------------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());

//NOTE 코어 개수 확인하기
//os.cpus().length를 하면 코어의 개수가 숫자로 나옵니다.
//하지만 노드에서 싱글 스레드 프로ㅡ래밍을 하면 코어가 몇 개이든 상과없이 대부분의 경우 코어를 하나밖에 사용하지 않습니다.
//하지만 4.5절에 나오는 cluster 모듈을 사용하는 경우에는 코어 개수에 맞춰서 프로세스를 늘릴 수 있습니다. 이때 cpus() 메소드를 사용할 것입니다.


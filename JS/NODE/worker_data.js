const{
    Worker, isMainThread,parentPort, workerData,
}=require('worker_threads');

if(isMainThread){ //부모일때
    const threads=new Set();
    threads.add(new Worker(__filename,{
        workerData:{start:1},
    }));
    threads.add(new Worker(__filename,{
        workerData:{start:2},
    }));
    for(let worker of threads){
        worker.on('message', message=>console.log('rom worker', message));
        worker.on('exit',()=>{
            threads.delete(worker);
            if(threads.size===0){
                console.log('job done');
            }
        });
    }
} else {
    const data=workerData;
    parentPort.postMessage(data.start+100);
}

//코드설명
//new Worker를 호출할 떄 두 번째 인수의 workderData 속성으로 원하는 데이터를 보낼 수 있습니다.
//워커에서는 workerData로 부모로부터 데이터를 받습니다. 현재 두 개의 워커가 돌아가고 있으며, 각각 부모로부터 숫자를 받아서 100을 더해줍니다.
//돌려주는 순간 워커가 종료되어 worker.on('exit')가 실행됩니다. 워커 두 개가 모두 종료되면 job done이 로깅됩니다.

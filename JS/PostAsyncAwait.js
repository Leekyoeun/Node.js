(async()=>{
    try{
        const result=await axios.get('https://www.zerocho.com/api/get');
        console.log(result);
        conxole.log(result.data);
    }catch(error){
        console.error(error);
    }
})();

//코드설명
//프로미스이므로 async/await 방식으로 변경할 수 있음
//익명함수라서 즉시 실행을 위해 코드를 소괄호로 감싸서 호출


(async()=>{
    try{
        const result=await axios.post('https://www.zerocho.com/api/post/json',{
            name:'zerocho',
            birth:1994
        });
        console.log(result);
        console.log(result.data);
    }catch(error){
        console.error(error);
    }
})();

//코드설명
//전체적인 구조는 비슷한데 두 번째 인수로 데이터를 넣어 보내는 것이 다름
//get 요청이면 axios.get을, post 요청이면 axios.post를 사용함


async function findAndSaveUser(Users){
    try{
        let user=await Users.findOne({});
        user.name='zero';
        user=await user.save();
        user=await Users.findOne({gender:'m'});
    }catch(error){
        console.error(error);
    }
}

//코드설명
//try/catch문으로 로직을 감쌌음
//프로미스의 catch 메소드처럼 try/catch문의 catch가 에러를 처리


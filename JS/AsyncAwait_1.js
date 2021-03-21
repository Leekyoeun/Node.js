async function findAndSaveUser(Users){
    let user=await Users.findOne({});
    user.name='zero';
    user=await user.save();
    user=await Users.findOne({gender:'m'});
}

//코드설명
//함수 선언부를 일반 함수 대신 async function으로 교체한 후, 프로미스 앞에 await를 붙임
//해당 프로미스가 resolv될 때까지 기다린 뒤 다음 로직으로 넘어감

const findAndSaveUser=async(Users)=>{
    try{
        let user=await Users.findOne({});
        user.name='zero';
        user=await user.save();
        user=await Users.findOne({gender:'m'});
    }catch(error){
        console.error(error);
    }
};
//코드설명
//화살표 함수도 async와 같이 사용할 수 있다.
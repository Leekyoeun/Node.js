function findAndSaveUser(Users){
    Users.findOne({},(err,user)=>{
        if(err){
            return console.error(err);
        }
        user.name='zero';
        user.save((err)=>{
            if(err){
                return console.error(err);
            }
            user.findOne({gender:'m'},(err,user)=>{

            });
        });
    });
}

//코드설명
//콜백 함수가 세 번 중첩되어 있어서, 콜백 함수가 나올 때마다 코드의 깊이가 깊어짐
//각 콜백함수마다 에러도 따로 처리해줘야 한다. 
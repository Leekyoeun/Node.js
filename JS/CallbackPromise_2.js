function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name='zero';
        return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender:'m'});
    })
    .then((user)=>{

    })
    .catch((err)=>{
        console.error(err);
    });
}
//코드설명
//코드의 깊이가 세 단계 이상 깊어지지 않고, then 메소드들은 순차적으로 실행됨
//에러도 마지막 catch에서 한 번에 처리할 수 있음
//하지만, 모든 콜백 함수를 위와 같이 바꿀 수 있는 것은 아님 => 메소드가 프로미스 방식을 지원해야함
//예제는  findOne, save 메소드가 내부적으로 프로미스 객체를 가지고 있다고 가정했기에 가능함

const formData=new FormData();
formData.append('name','zerocho');
formData.append('item','orange');
formData.append('item','melon');
formData.has('item');
formData.has('money');
formData.get('item');
formData.getAll('item');
formData.append('text',['hi','zero']);
formData.get('test');
formData.delete('test');
formData.get('test');
formData.set('item','apple');
formData.getAll('item');

(async()=>{
    try{
        const formData=new FormData();
        formData.append('name','zerocho');
        formData.append('birth',1994);
        const result=await axios.post('https://www.zerocho.com/api/post/formdata',formData);
        console.log(result);
        console.log(result.data);
    }catch(error){
        console.errror(error);
    }
})();

//코드설명
//두 번째 인수에 데이터를 넣어 보낸다. 현재 설정된 주소는 실제로 동작하는 주소라서 결괏값을 받을 수 있음

//코드설명
//has 메소드는 주어진 키에 해당하는 값이 있는지 여부를 알림
//get 메소드는 주어진 키에 해당하는 값을 하나 가져오고, getAll 메소드는 해당하는 모든 값을 가져옴
//delete 메소드는 현재 키를 제거하는 메소드고, set은 현재 키를 수정하는 메소드이다.

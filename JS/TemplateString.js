//기존 ES5 문법 => 가독성이 좋지 않으며 코드가 지저분함
var num1=1;
var num2=2;
var result=3;
var string1=num+'더하기'+num2+'는 \''+result+'\'';
console.log(string1);

//ES2015 문법 => 깔끔해졌고 큰따옴표나 작은따옴표와 함께 사용가능
const num3=1;
const num4=2;
const result2=3;
const string2=`${num3} 더하기 ${num4}는 '${result2}`;

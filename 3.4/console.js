const string = "abc";
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: "value",
        },
    },
};
console.time("전체 시간"); // console.tmieEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정합니다.
console.log("평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다."); //평범한 로그를 콘솔에 표시한다.
console.log(string, number, boolean);
console.error("에러 메세지는 console.error에 담아주세요"); //에러를 콘솔에 표시한다.
console.table([
    //베열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현된다.
    { name: "제로", birth: 1994 },
    { name: "hero", birth: 1988 },
]);
console.dir(obj, { colors: false, depth: 2 }); //객체를 콘솔에 표시할 때 사용한다.
console.dir(obj, { colors: true, depth: 1 });
console.time("시간 측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
    console.trace("에러 위치 추적"); //에러가 어디서 발생했는지 추적할 수 있게 한다.
}

function a() {
    b();
}
a();

console.timeEnd("전체 시간");
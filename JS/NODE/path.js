const path=require('path');

const string=__filename;

console.log('path.sep:', path.sep); // 경로의 구분자입니다. 윈도는 \, POSIZ는 /입니다.
console.log('path.delimiter:', path.delimiter); //환경 변수의 구분자입니다. process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있습니다. 
//윈도는 세미콜론이고, POSIX는 콜론입니다.
console.log('----------------------------------');
console.log('path.dirname():', path.dirname(string)); //파일이 위치한 폴도 경로를 보여줍니다.
console.log('path.extname():', path.extname(string)); //파일의 확장자를 보여줍니다.
console.log('path.basename():', path.basename(string)); //파일으 이름(확장자 포함)을 표시합니다. 
//파일의 이름만 표시하고 싶다면 basename의 두 번째 인수로 파일의 확장자를 넣으면 됩니다.
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('-----------------------------------');
console.log('path.parse()', path.parse(string)); //파일 경로를 root, dir, base, ext, name으로 분리합니다.
console.log('path.format():', path.format({ //path.parse()한 객체를 파일 경로로 합칩니다.
    dir:'C:\Users\e2255',
    name:'path',
    ext:'.js',
}));
console.log('path.normalize():', path.normalize('D:\\Project\\Web\\Node.js\\JS\\NODE\\path.js')); // \나 /를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환합니다.
console.log('------------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\')); //파일의 경로가 절대경로인지 상대경로인지를 true나 false로 알립니다.
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('-------------------------------------');
console.log('path.relative():', path.relative('D:\\Project\\Web\\Node.js\\JS\\NODE\\path.js','D:\\')); //경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알립니다.
console.log('path.join():', path.join(__dirname,'..','..','/users','.','/e2255')); //여러 인수를 넣으면 하나의 경로로 합칩니다. 상대경로인..과 .도 알아서 처리합니다.
console.log('path.resolve():', path.resolve(__dirname,'..','users','.','/e2255')); //path.join()과 비슷하지만 차이가 있다.

// NOTE join과 resolve 차이
//path.join과 path.resolve 메소드는 비슷해 보이지만 동작 방식이 다릅니다. 
// /를 만나면 path.resolve는 절대경로로 인식해서 앞의 경로를 무시하고
//path.join은 상대경로로 처리합니다.

//NOTE 어떤 때 \\를 사용하고 어떤 때 \를 사용하나요?
//콘솔 결과를 보면 어떤 때는 \\를 사용하고, 어떤 때는 그냥 \를 사용하여 윈도 경로를 표시했습니다.
//기본적으로 경로는 \ 하나를 사용해서 표시합니다.
//하지만 자바스큷트 문자열에서는 \가 특수 문자이므로 \를 두 개 붙여 경로를 표시해야 합니다.
//path 모듈은 위와 같은 경우에 발생하는 문제를 알아서 처리합니다.
//이는 윈도에서 path 모듈이 꼭 필요한 이유이기도 합니다.

//NOTE 상대경로와 절대경로
//절대경로는 루트 폴더나 노드 프로세스가 실행되는 위치가 기준이 됩니다.
//상대경로는 현재 파일이 기준이 됩니다. 현재 파일과 같은 경로면 점 하나를, 현재 파일보다 한 단계 상위 경로면 점 두개를 사용해 표현합니다.


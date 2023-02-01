"use strict";
var _String;
(function (_String) {
    // 백틱(`) 기호를 사용하여 여러 줄 문자열 저장하기
    var multilines = `
    안녕하세요.
    반갑습니다.
`;
    console.log(multilines);
    console.log("줄\n바꿈");
    console.log("탭\t입니다.");
    console.log("또 만나요\r");
    console.log("'낼' \'만나요\' ");
    console.log(" \"어디\"에서요?");
    console.log("\\: 백슬래시 표현");
    console.log("C:\\Home\\BreadOne\\index.html");
    console.log(`

    안녕하세요.
    반갑습니다.

`);
    //String Interpolation
    var message = 'hello';
    console.log(`${message}`);
})(_String || (_String = {}));
//# sourceMappingURL=string.js.map
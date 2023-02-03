"use strict";
var _Var;
(function (_Var) {
    let num = 1234;
    let decimal = 12.34;
    let c = 'A';
    let s = "Hello";
    let b = true;
    //숫자구분자
    let numericSeparator = 1000000;
    //진수
    let binary = 0b1111;
    let hex = 0xFF;
    let octal = 0o77;
    console.log("0b1111 => " + binary);
    console.log("0xFF => " + hex);
    console.log("0o77 => " + octal);
    //형식변환
    let what;
    what = '문자열';
    let len1 = what.length;
    let len2 = what.length;
    //숫자 데이터 형식: number (정수/실수)
    let NumberNote;
    (function (NumberNote) {
        let age = 21;
        const PI = 3.141592;
        console.log("나이: " + age);
        console.log("PI: " + PI);
    })(NumberNote || (NumberNote = {}));
    let StringKeyword;
    (function (StringKeyword) {
        const name = "정영일";
        let age = 21;
        console.log("안녕하세요. " + name + "(" + age + ") 입니다.");
    })(StringKeyword || (StringKeyword = {}));
    //상수
    const name = "BreadOne";
    //변수
    let age = 21;
    console.log(`Name: ${name}, Age: ${age}`);
})(_Var || (_Var = {}));
//# sourceMappingURL=var.js.map
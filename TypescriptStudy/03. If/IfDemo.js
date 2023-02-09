"use strict";
var IfDemo;
(function (IfDemo) {
    let a = 20;
    console.log(`a는 ${a}입니다.`);
    if (a === 20) {
        console.log(`a는 20입니다.`);
    }
    if (a !== 20) {
        console.log(`a는 20이 아닙니다.`);
    }
    let s1 = '문자열입니다.';
    let s2 = '문자열입니다.';
    console.log(s1 === s2);
})(IfDemo || (IfDemo = {}));
var SwitchDemo;
(function (SwitchDemo) {
    var result = "";
    let str = "ABC";
    switch (str) {
        case "ABC":
            result = "'ABC'를 선택하셨네요!";
            break;
        case "DEF":
            result = "'DEF'를 선택하셨네요!";
            break;
    }
    console.log(result);
})(SwitchDemo || (SwitchDemo = {}));
var ForDemo;
(function (ForDemo) {
    var result = "";
    for (let i = 0; i < 3; i++) {
        result += "Hello " + i + "\n";
    }
    console.log(result);
})(ForDemo || (ForDemo = {}));
//# sourceMappingURL=IfDemo.js.map
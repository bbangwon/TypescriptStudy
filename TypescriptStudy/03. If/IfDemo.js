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
    var colors = ["red", "green", "blue"];
    for (var index in colors) {
        console.log(colors[index]);
    }
    for (var color of colors) {
        console.log(color);
    }
})(ForDemo || (ForDemo = {}));
var ArrDemo;
(function (ArrDemo) {
    var arr = [1, 2, 3];
    var [a, b, c] = arr;
    var [d, e, f] = ["string", 1234, true];
    console.log(arr);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
})(ArrDemo || (ArrDemo = {}));
//# sourceMappingURL=IfDemo.js.map
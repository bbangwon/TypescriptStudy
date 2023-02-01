"use strict";
console.log("Hello World!!!!");
var str = 'hello';
function foo(name) {
    return 'hello ' + name;
}
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "안녕, " + this.greeting;
    }
}
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var list3 = [1, 2, 3];
console.log("*\n**\n***");
console.log("\"안녕하세요\"");
console.log('\'안녕하세요\'');
console.log('"안녕하세요"');
//주석!
/*
 * 주석!!
 * */
// 타입
var State;
(function (State) {
    State[State["Onsight"] = 0] = "Onsight";
    State[State["Online"] = 1] = "Online";
    State[State["NotEnrolled"] = 2] = "NotEnrolled";
})(State || (State = {}));
var currentName;
var hasPassed;
var averageMark;
var currentCourses; //Array<string>
var additionalInfo;
var currentState = State.Onsight;
function setStudent(name, passed, mark, courses, info, state) {
}
//# sourceMappingURL=hello.js.map
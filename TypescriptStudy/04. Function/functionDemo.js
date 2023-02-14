"use strict";
var FunctionDemo_1;
(function (FunctionDemo_1) {
    function hi() {
        console.log("안녕!");
    }
    hi();
    var myFunction = function (a) {
        return a * a;
    };
    var myArrowFunction = (a) => a * a;
    function calculateSum(x, y, z, ...restNumbers) {
        var sum = x + y + (z !== null && z !== void 0 ? z : 0);
        for (var i = 0; i < restNumbers.length; i++) {
            sum += restNumbers[i];
        }
        return sum;
    }
    var calc = calculateSum;
    console.log(calc(1, 2));
    console.log(calculateSum(1, 2, 3, 4, 5));
})(FunctionDemo_1 || (FunctionDemo_1 = {}));
//# sourceMappingURL=functionDemo.js.map
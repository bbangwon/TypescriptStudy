"use strict";
var TypeConversion;
(function (TypeConversion) {
    let s = "12.34";
    let n1 = parseInt(s);
    console.log(`n1 => ${n1}: ${typeof n1}`);
    let n2 = +s;
    console.log(`n2 => ${n2}: ${typeof n2}`);
})(TypeConversion || (TypeConversion = {}));
//# sourceMappingURL=typeconversion.js.map
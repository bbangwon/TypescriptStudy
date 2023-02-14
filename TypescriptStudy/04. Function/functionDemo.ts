namespace FunctionDemo_1 {
    function hi() {
        console.log("안녕!");
    }

    hi();


    var myFunction = function (a: number) {
        return a * a;
    }

    var myArrowFunction = (a: number) => a * a;

    function calculateSum(x: number, y: number, z?: number, ...restNumbers: number[]): number {
        var sum = x + y + (z ?? 0);

        
        for (var i = 0; i < restNumbers.length; i++) {
            sum += restNumbers[i];
        }
        return sum;
    }

    var calc: (x: number, y: number) => number = calculateSum;
        
    console.log(calc(1, 2));
    console.log(calculateSum(1, 2, 3, 4, 5));
}
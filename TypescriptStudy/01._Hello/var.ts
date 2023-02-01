namespace _Var {
    let num = 1234;
    let decimal = 12.34;

    let c = 'A';
    let s = "Hello";
    let b = true;

    //숫자구분자
    let numericSeparator = 1_000_000;

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

    let len1 = (<string>what).length;
    let len2 = (what as string).length;

    //숫자 데이터 형식: number (정수/실수)
    namespace NumberNote {
        let age: number = 21;
        const PI: number = 3.141592

        console.log("나이: " + age);
        console.log("PI: " + PI);
    }

    namespace StringKeyword {
        const name: string = "정영일";
        let age: number = 21;

        console.log("안녕하세요. " + name + "(" + age + ") 입니다.");
    }




}

namespace IfDemo {
    let a = 20;    

    console.log(`a는 ${a}입니다.`)

    if (a === 20) {
        console.log(`a는 20입니다.`);
    }

    if (a !== 20) {
        console.log(`a는 20이 아닙니다.`);
    }


    let s1: string = '문자열입니다.';
    let s2: string = '문자열입니다.';

    console.log(s1 === s2);
}

namespace SwitchDemo {
    var result = "";

    let str: string = "ABC";

    switch (str)
    {
        case "ABC":
            result = "'ABC'를 선택하셨네요!";
            break;

        case "DEF":
            result = "'DEF'를 선택하셨네요!";
            break;
    }

    console.log(result);
}

namespace ForDemo {
    var result = "";

    for (let i = 0; i < 3; i++) {
        result += "Hello " + i + "\n";
    }
    console.log(result);
}


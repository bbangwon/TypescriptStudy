namespace _Hello {
    console.log("Hello World!!!!");

    var str: string = 'hello';

    function foo(name: string): string {
        return 'hello ' + name;
    }

    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "안녕, " + this.greeting;
        }
    }

    var list: number[] = [1, 2, 3];
    var list2: Array<number> = [1, 2, 3];

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
    enum State { Onsight, Online, NotEnrolled }

    var currentName: string;
    var hasPassed: boolean;
    var averageMark: number;
    var currentCourses: string[]; //Array<string>
    var additionalInfo: any;
    var currentState: State = State.Onsight;

    function setStudent(
        name: string, passed: boolean,
        mark: number, courses: string[], info: any,
        state: State): void {

    }

}


namespace TypeConversion {
    let s: string = "12.34";

    let n1: number = parseInt(s);  
    console.log(`n1 => ${n1}: ${typeof n1}`);

    let n2: number = +s;    //+��ȣ�� �տ� ���� number�������� ����ȴ�.
    console.log(`n2 => ${n2}: ${typeof n2}`);
}
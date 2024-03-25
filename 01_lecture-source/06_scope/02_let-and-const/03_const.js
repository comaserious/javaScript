/*const
    const 키워드는 상수(constant)를 선언하기 위해 사용한다
    let 키워드와 마찬가지로 블록레벨 스코프를 가진다
 */

    //const  키워드는 반드시 선언과 동시에 초기화를 해야한다
    // const x; Syntax Error 발생

const x = 10;
    // const 키워드로 선언한 변수는 재할당이 금지된다
    // x = 2;

/* 상수
    재할당이 금지된 변수
    const 키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다
    일반적으로 상수의 이름은 대문자로 선언하여 상수임을 명확히 나타내며
    여러 단어로 이루어진 경우 언더스코어(_) 로 구분하여 스네이크 케이스로 표현하는 것이 일반적이다
 */

//할인율은 변경할 수 없는 상수로 사용
const DISCOUNT_RATE =0.15;

// 정가 
const PRICE = 15000;

//할인가
let discountPrice = PRICE*(1-DISCOUNT_RATE);
console.log(discountPrice);

const STUDENT = {
    name : 'leehojun',
    age : 30

};

//const 키워드로 선언된 변수에 객체를 할당한 경우 값(프로퍼티 value)은 변경할수 있다
STUDENT.name = '홍길동';
console.log(STUDENT);

//객체 STUDENT의 주솟값은 변경할수 없지만 프로퍼티들의 값은 변경할수있다
//객체의 속성들은 바꿀수 있지만 객체 자체를 바꿀수는 없다
STUDENT = {};
console.log(STUDENT);

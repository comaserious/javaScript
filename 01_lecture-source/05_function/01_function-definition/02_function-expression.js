/*함수 표현식 */
/*
    자바스크립트의 함수는 객체 타입의 값으로 값의 성질을 갖는 객체
    일급 객체라고 한다
    함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 
    변수에 할당할 수있다 */


/*함수 표현식에서는 함수명을 생략할 수 있다 */

var hello = function(name){
    return `${name} hi`;
};

// 그러면 어떻게 호출하는가
// 변수명이 식별자가 된다

console.log(hello('leeeee'));

// 함수표현시에서 함수명을 생략하지 않아도 된다

var calc = function add(a,b){
    return a + b;
}

//단, 함수 호출은 식별자로 한다 이 경우에는 calc 가 식별자에 해당한다

// console.log(add(12,2));   // add is not defined 에러가 발생
console.log(calc(10,2));

console.log(calc('아아','바바')); // 문자열 합치기 






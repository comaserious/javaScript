/*함수 호이스팅 */

//함수 참조
console.log(hello);
console.log(hi);   // undefined 존재하지 않다고 출려된다

//함수호출
console.log(hello('leeeee'));
// console.log(hi('leehoju')); 

//함수선언문

function hello(name){
    return `${name} hi`;
}

//함수 표현식
var hi = function(name){
    return `${name}님 hi`;
}


/*
    함수 선언문은 런타임(즉, 동작시) 이전 자바스크립트 엔진에 의해 먼저 실행된다
    따라서 함수 선언문 이전에 함수를 참조할 수 있으며, 호출을 할 수도 있다
    =>마치 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는
    자바 스크립트 고유의 특징을 함수 호이스팅이라고 한다
    
    변수 할당문의 값은 할당이 실행되는 시점, 즉 런타임에 평가되기 때문에
    함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 된다
    => 따라서 함수 표현식으로 정의한 함수는 반드시 함수표현식 이후에 참조 or 호출해야 한다(hoisting 불가)*/




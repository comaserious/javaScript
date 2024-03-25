/*콜백함수 <=중요도가 있음*/
/*
    함수의 매개변수를 통해서 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 한다
    매개변수를 통해 함수의 외부에서 콜백함수를 전달 받은 함수는 고차함수라고 한다
    콜백함수는 고차함수에 전달되어 헬퍼 함수의 역할을 한다
    즉, 고차함수는 콜백함수를 자신의 일부분으로 합성한다
 */

// 전달받은 값을 증가시켜주는 함수

function increase(value){
    return ++value;
}

// 전달받은 값을 감소시켜주는 함수
function decrease(value){
    return --value;
}

//전달받은 함수에 전달받은 값을 적용시켜주는 고차함수
function apply(func , value){
    // 고차함수는 매개변수를 통해 전달 받을 콜백함수의 호출시점을 결정하여 호출한다
    // 콜백함수는 고차함수에 의해 호출(헬퍼)되며, 이 때 고차함수는 
    // 필요에 따라 콜백 함수에 인수를 전달할 수 있다
    return func(value);
}



// apply 고차함수로 콜백함수를 전달하며 호출
console.log(apply(increase,10));

console.log(apply(decrease,10));

// 콜백함수를 익명함수 리터럴로 정의하면 곧바로 고차함수에 전달 할 수있다
console.log(apply(function(value){return value**2;},5));   // ** 제곱이다
/*함수의 변하지 않는 공통 로직은 미리 정의해두고 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 내부로 전달하는 방식
비동기 처리(event, timer, ajax) 에 자주 사용되는 패턴이다 */

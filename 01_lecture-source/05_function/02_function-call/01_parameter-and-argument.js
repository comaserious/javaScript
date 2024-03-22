/*매개변수와 전달인자(인수) */

// 함수 선언문
function hello(name){
    
    // 매개변수는 함수 몸체 내부에서만 참조 가능
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관이 된다.
    console.log(arguments);

    return `${name} hi`;
}

// 매개변수는 함수 몸체 내부에서만 참고 가능
// console.log(name);

hello('leeeeeeee');

var result = hello('leeeeeeeeeeeeee');
console.log(result);

// 함수는 매개변수의 갯수와 인수의 갯수가 일치하는지 체크하지 않는다
// 인수(전달인자) 가 부족해서 할당되지 않은 매개변수의 값은 undefined 이다
result = hello();
console.log(result);

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시가 된다
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다(초과된 인수 또한 저장된것을 확인할수 있다)
result = hello('leee1' , 'leee2' , 'leee3' , 'leee3')
console.log(result);

// 기본값을 설정하는 것이다 아무것도 넘겨주지 않았을때 아무개를 사용하는것이다
function hi(name='아무개'){

    // 인수를 전달 하지 않았을 경우, undefined를 전달했을 경우 ES6 에서 도입된
    // 매개변수 기본값을 사용할 수 있다

    // 적절한 인수가 전달되었는지 확인하는 방법
    if(arguments.length!==1 || typeof name !== string || name.length === 0){
    throw new TypeError('인수는 1개 여야하고, 문자열 값이며, 빈문자는 허용되지 않습니다');
    }


    return `${name} 안녕~~~`;
}


result = hi();
console.log(result);

result = hi('leehoju');
console.log(result);

// result=hi('홍길동','유관순');
// result = hi(1);
result = hi('');
console.log(result);
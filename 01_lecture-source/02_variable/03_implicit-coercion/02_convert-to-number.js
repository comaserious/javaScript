console.log('====================숫자타입으로 변환=========================')

// 산술 연산자의 피연산자는 모두 숫자 타입이여야 하므로
//숫자가 아닌 값들은 암묵적으로 타입을 변환한다

console.log(10-'5');
console.log(10%'javaScript'); // 피연산자가 숫자로 변환이 불가능하다. NaN(숫자가 아님).

console.log(10 > '6');

// + 단항 연산자 : 피연산자가 숫자타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');
console.log(+'javaScript');
console.log(+true);
// console.log(+Symbol());    // 원시타입으로 바꿀수가 없는 무언가이다 따라서 에러가 발생
console.log(+{});
console.log(+[]);
console.log(+function(){});

// 빈문자열, 빈배열, null, false 는 0 으로 반환,true 는 1로 반환
//객체와 undefined 는 반환이 되지 않는다 NaN 반환
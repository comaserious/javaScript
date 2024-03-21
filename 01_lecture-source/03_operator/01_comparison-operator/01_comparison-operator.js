/* 기본적인 연산자는 java 와 다르지 않다
     */

/*동등/일치 비교 연산자 
    동등비교(==,!=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨후 같은 값인지 비교를 한다.
    일치비교(===,!==) 연산자는 타입과 값이 모두 일치하는지 비교를 한다*/

//숫자 1, 문자 1, true 를 비교

console.log(`1=='1' : ${1=='1'}`);
console.log(`1==='1' : ${1==='1'}`);
console.log(`1==true : ${1==true}`);
console.log(`1===true : ${1===true}`);

// null,undefined 비교
console.log(`undefined == null : ${undefined==null}`); // 둘다 falsy 임으로 boolean 값이 같아 true가 반환된다
console.log(`undefined === null : ${undefined===null}`);  // 둘다 서로다른 원시타입으로 타입이 같지 않기 때문에 false를 반환

//NaN 자신과 일치하지 않는 유일한 값
console.log(`NaN == NaN : ${NaN==NaN}`);     // 예외적인 상황임을 인지하자(유일하게 false가 나오게 된다)
console.log(`NaN===NaN : ${NaN===NaN}`);

//빌트인 함수 Number.isNaN() 을 통해 확인해야한다(잘쓰지 않는다)
console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`);

console.log(`'hello' === 'hello' : ${'hello'==='hello'}`);
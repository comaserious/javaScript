console.log("=============================숫자타입으로 변환 ==============================")
//1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number('10'));    //10
console.log(Number(true));    //1

//2. parseInt, parseFloat 함수이용(문자열 -> 숫자만 가능하다)
console.log(parseInt("10"));
console.log(parseInt('2.4'));     // 소숫점이 없어지는 걸 확인 할수 있다 ( parseInt 는 이런 용도로 사용하는 듯)

//3. + 단한산술
console.log(+'');

//4. * 산술연산자 이용
console.log('10'*1);



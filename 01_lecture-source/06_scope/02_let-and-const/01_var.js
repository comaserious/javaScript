/*var 
    ES5 까지는 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었다
    하지만 var 키워드는 몇가지 문제를 야기한다
*/

//1. 변수의 중복 선언
var msg = '안녕하세요';
console.log(msg);
//var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다
// 초기화 문이 있는 변수 선언문은 자바스크립트 엔진에서 의해 var 키워드가 없는 것처럼 동작
var msg = '안녕히 가세요';
console.log(msg);

// 초기화문이 없는 변수선언문은?
var msg;
//무시된다
console.log(msg);

//2. 함수레벨스코프
//함수 외부에서 var 키워드로 선언한 변수는 코드 블록내에서 선언해도 모두 전역변수가 된다
var i = 0;
for(var i = 0 ; i < 10; i++){}
console.log(i);

//3. 변수 호이스팅
console.log(test);
test = '반갑습니다';
console.log(test);
var test;


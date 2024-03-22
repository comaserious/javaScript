/*단축 평가 
    표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것
*/

// OR, AND 연산자 표현식의 결과는 때로는 Boolean 값이 아닐 수 있다.

// OR 의 경우 'apple' 이 이미 Truethy 이기 때문에 true 로 평가되고
// 논리 연산의 결과를 결정하는 첫번째 피연산자 즉, apple 을 그대로 반환한다
console.log('apple' || 'banana');
console.log(false||'banana');

// AND 좌항과 우항을 모두 확인해야한다
//논리 연산의 결과를 결정하는 값을 확인해야 한다
// 마지막까지 확인하기 때문에 마지막 값인 (결과를 결정하는) banana를 반환하는 것이다
console.log('apple' && 'banana');

//false가 값을 결정했기 때문에 false 값을 반환하는 것이다
console.log(false && 'banana');
console.log('banana' && false);

// 논리 연산자는 결과값을 결정하는 값을 반환한다고 생각하면 된다

// 단축 평가를 사용하면 if 문을 대체할 수 있다
var num =1 ;

if(num%2==0) console.log("짝수입니다");
else console.log("홀수입니다");

console.log("========================================================")
num % 2==0 && console.log('짝수입니다');
num % 2==0 || console.log('홀수 입니다');



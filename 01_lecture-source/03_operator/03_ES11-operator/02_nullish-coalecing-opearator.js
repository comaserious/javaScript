/*null 병합 연산자 */

/*좌항의 피연산자가 null or undefined인경우
    우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다 */

// ??

var test = null ?? '기본값';
console.log(test);

var test1 = '기본값' ?? null;
console.log(test1);

var value = '' ?? '기본값';
console.log('');
// 좌항이 null or undefined 가 아니기 때문에 ''를 그대로 출력해준다 .

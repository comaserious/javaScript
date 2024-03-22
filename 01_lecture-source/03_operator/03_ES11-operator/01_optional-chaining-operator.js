/*옵셔널 체이닝 연산자 */
/*ES11(2020)에서 도입된 연산자로 좌항의 피연산자가  null or undefined 인경우
    undefined 를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다 */
console.log('=================================================================');
var obj = null;
// .value 는 객체의 속성을 참조하는 것이다

var val = obj?.value;
console.log(typeof val);

//옵셔널 체이닝 연산자 이전에 논리 연산자를 &&를 이용하여 단축평가로 확인함
// ?.

var val = '';
var len = val?.length;
console.log(len);

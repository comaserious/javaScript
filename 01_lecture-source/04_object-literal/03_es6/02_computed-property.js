/*계산된 프로퍼티 이름*/

var prefix = 'key';
var index = 0;

var obj = {};

// ES5 에서 계산된 프로퍼티 이름으로  프로퍼티 키를 동적으로 생성하려면
// 객체 리터럴 외부에서 대괄호 표기법으로 사용해야한다.

obj[`${prefix}-${index++}`]= index;
obj[`${prefix}-${index++}`]= index;
obj[`${prefix}-${index++}`]= index;
obj[`${prefix}-${index++}`]= index;

// 증감연산자도 동일하게 적용이 된다 뒤에 붙었기때문에 나중에 더해지는것또한 동일 따라서 키의 인덱스 번호가 0번부터 시작하게 된것이다
console.log(obj)

// ES6 에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 
// 프로퍼티 키를 동적으로 생성할 수 있다

console.log('=============================================')
var obj2 ={
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
};

console.log(obj2);
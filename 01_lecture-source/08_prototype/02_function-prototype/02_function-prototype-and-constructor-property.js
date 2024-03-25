/*
    함수의(디폴트 프로퍼티) 프로토타입과 constructor 프로퍼티
    개발자가 특별히 할당하지 않더라도 모든 함수는 기본적으로 prototype이라는 프로퍼티를 가진다
    디폴트 프로퍼티 'prototype' 은 constructor 프로퍼티 하나만 있는 객체를 가리키는데,
    여기서 constructor 프로퍼티는 함수 자신을 가리킨다
*/

function Student(){}

// 함수를 만들기만 해도 디폴트(기본값) 프로퍼티인 prototype 이 설정된다
//Student.proptotype = {constructor : Student}

console.log(Student.prototype.constructor == Student);
console.log(Student.prototype.constructor === Student);

let student = new Student();

console.log(student.constructor==Student);
// in 연산자
// 프로퍼티에 존재여부확인

var student = {
    name : '이호준',
    age : 30,
    test : undefined
};

console.log(student.name === undefined);   // 존재하기 때문에 false
console.log(student.height=== undefined);   // 존재하지 않기 때문에 true

console.log(student.test === undefined);
//프로퍼티 값이 undefined 이기 때문에 프로퍼티는 존재하지만 , true - 존재하지 않음으로 판별되는 문제

// in 
console.log('=================================================================================')
// name 이라고 하는 프로퍼티가 student 객체에 존재하기 때문에 true를 반환한다
console.log('name' in student);
// height 는 존재 하지 않기 때문에 false를 반환한다
console.log('height' in student);

console.log('test' in student);




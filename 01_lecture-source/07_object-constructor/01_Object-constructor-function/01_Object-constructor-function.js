/*Object 생성자 함수 
    new 연산자와 함께 Object 생성자 함수를 호출하면 빈객체를 생성하여
    반환한다
    빈 객체 생성 이후 프로퍼티 혹은 메소드를 추가하여 객체를 완성할 수있다
*/

/*
    1. 객체 리터럴 {};
    2. Object 생성자 함수
    3. 생성자 함수
    4. Object.create 메소드
    5. Class(ES6 추가)
*/

// 빈객체 생성
const student = new Object();
console.log(student);

student.name='홍길동';
student.age = 30;

console.log(student);
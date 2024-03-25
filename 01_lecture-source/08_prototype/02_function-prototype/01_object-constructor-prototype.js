/*
    생성자 함수 프로토타입
    new 연산자를 사용해 만든 객체는
    생성자 함수의 프로토타입 정보를 사용해 [[Prototype]]을 설정한다
*/

const user ={
    activate : true,
    login : function(){
        console.log('로그인 되었습니다')
    }
};

function Student(name){
    this.name = name;
}

//.prototype => 생성자 함수와 같이 쓰이는 속성

Student.prototype=user;

//생성자함수.prototype 은 new 생성자함수 를 호출할때만 사용한다
// new 생성자함수를 호출할때 만들어지는 새로운 객체의 [[prototype]]을 할당한다

const student = new Student('홍길동');

console.log(student.activate);


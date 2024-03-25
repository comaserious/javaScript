/*일반 함수와의 차이점 */

function Student(name, age){

    console.log(this);

    this.name =name;
    this.age = age;
    this.getInfo=function(){
        return `${this.name}은 ${this.age}입니다;`
    };

}

/*
    일반 함수와 생성자 함수의 특별한 형식적인 차이는 없다
    -첫 문자를 대문자로 기술하여 구별하는 관례가 있다
    new 연산자와 함께 호출하게 되면 생성자함수로 동작
    그렇지 않다면 일반함수로 동작을 하게 된다
*/
const student = Student('홍길동',20);
// 일반함수로 된 Stundent 는 반환문이 없으므로 undefined를 반환한다
// 생각해보니 함수는 return 값이 있어야 하는데 생성자 함수는 return이 존재하지 않는다
console.log(student);

// 전역객체를 보여준다
// 확인해보면 age 와 name 이 전역객체로 되어 있음을 확인할 수 있다
// console.log(globalThis);
// 일반함수로 호출된 Student내의 this는 전역객체를 가리킨다
console.log(age);

const student2 = new Student('회원2', 30);
console.log(student2);

/*자바를 배우지 않은 이들을 위해 ES6에서는 new.target 이라는 것을 지원한다
new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다
new 연산자 없이 일반함수로 호출된 함수 내부의 new.target은 undefined이다 */

function Dog(name,age){
    
    // 이 함수가 new 연산자와 함께 호출되지 않으면 new.target 은 undefined
    if(!new.target){
        // new 연산자와 함께 생상자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다
        return new Dog(name,age);
    }
    this.name = name;
    this.age = age;
    this.getInfo= function(){
        return `${this.name}은 ${this.age}세 입니다`
    }

}

const dog = Dog('뽀삐',3);
console.log(dog);

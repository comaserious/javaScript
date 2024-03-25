/*프로퍼티 접근하기 */

var dog = {
    name : 'choco',
    eat : function(food){
        console.log(`${this.name} 은 ${food}를 맛있게 먹어요`)
    },
    1 : '1',
    '@ S P A C E @' : '@SPACE@'
};

// 마침표 표기법
console.log(dog.name);
dog.eat('고구마');

//대괄호 표기법 - 프로퍼티 키는 반드시 따옴표로 감싼 문자열을 사용한다
console.log(dog['name']);
console.log(dog[1]);     // 숫자는 키값을 숫자로 저장하기 때문에 그냥 숫자를 쓰면 된다
dog['eat']('고구마');

//프로퍼티의 키가 식별자 네이밍 규칙을 준사지 않는 이름일 경우 반드시 !!! 대괄호 표기법을 사용한다
 // 숫자는 마침표 표기법이 불가능하다
// console.log(dog.1);     
//특수문자 띄어쓰기가 있는 문자열 또한 마침표 표기법이 불가능하다
// console.log(dog.@ S P A C E @);

console.log(dog['1']);    // 프로퍼티 키가 숫자로 이루어진 문자열인 경우 따옴표 생략가능
console.log(dog['@ S P A C E @']);
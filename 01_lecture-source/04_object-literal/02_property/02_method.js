/*자바 스크립트에서 함수는 객체이다
    함수는 값으로 취급할 수 있고, 프로퍼티 값(value)으로 쓰일수 있다 */

var dog = {
    name : '뽀삐',
    eat : function(food){
        console.log(`${this.name}은 ${food}를 맛있게 먹습니다`);
    }


};

dog.eat('고구마');


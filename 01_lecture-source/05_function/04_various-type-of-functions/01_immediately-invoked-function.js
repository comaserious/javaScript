/*즉시 실행 함수 */

/*
    함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 호출되며
    다시 호출할 수 없다
    즉시 실행함수는 반드시 () - 그룹연산자로 감싸야한다

 */

// 함수 이름이 없는 익명함수를 사용한는 것이 일반적이다
(function(){
    console.log('익명 즉시 실행함수, 함수 정의와 동시에 호출!!!!!!!')
})( /*일반적인 함수 처럼 뒤에 ()그룹이 필요하다 */);

(function hello(name){
    console.log('기명 즉시 실행 함수, 함수 정의와 동시에 호출됨!!!!')
    console.log(`${name} 님 안녕하세요`)
})('김김김김');

// console.log(hello('fhfhfhfhfhfh')); 함수가 정의가 된적이 없다는 에러가 발생한다 한번만 사용하고 다시는 사용할수 없기 때문이다


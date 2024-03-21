/*
개발자의 의도에 따라 값의 타입을 변환하는 것이다
자바 스크립트에서
    1.기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean )을
        new 연산자 없이 호출하는 방법
    2.빌트인 메소드를 사용한 방법
    3.암묵적 타입 변환을 이용하는 방법이 있다.
 */

    console.log('=====================문자열 타입으로 변환=======================')
    //1. String 생성자 함수를 new 연산자 없이 호출
    console.log(String(10));    //"10"
    console.log(String(NaN));   //"NaN"
    console.log(String(true))   //"true"

    //2.toString 메소드 사용(Object.prototype.toString)
    console.log((10).toString());
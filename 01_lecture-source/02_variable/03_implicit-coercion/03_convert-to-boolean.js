/*자바스크립트 엔진은 boolean 타입이 아닌 값을 Truthy 값(참으로 평가되는 값)
    또는 Falsy 값(거짓으로 평가되는 값)으로 구분을 한다 */

//Truthy ->true,  Falsy -> false 로 암묵적 타입변환이 된다

// Falsy 값 : false, undefined, null, 0 , NaN , ''(빈 문자열)
// Truthy 값 : Falsy 값 제외 모든 값

console.log("=========================boolean 타입 변환=========================")

if(true) console.log("if(true)");
if(false) console.log("if(false)");

if(undefined) console.log("undefined");
if(null) console.log("null");
if(0) console.log("0")
if('') console.log('\'\'');
if('java') console.log("if(java)");
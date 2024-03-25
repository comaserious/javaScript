/*중첩함수 */

/*
    함수 내부에 정의된 함수를 중첩함수 또는 내부함수라고 한다
    중첩함수 를 포함하는 함수는 외부 함수라고 한다 
    일반적으로 중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼함수의 역할을 한다
*/

function outer(){
    var outerValue = '외부함수변수';

    function inner(){
        var innerValue = '내부함수 변수';
        console.log(outerValue, innerValue);
    }
    // console.log(inner);

    inner();  // 이작업이 없으면 function을선언만 했을뿐 실행한적이 없기 때문이다 따라서 outer 함수 에서 한번 호출을 해야 그제서야 작동을한다
}

outer();
// inner();  스코프 외부에 존재하기 때문에 존재하지 않는 함수가 된다



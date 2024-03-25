/*재귀함수 */

/*
    함수가 자기 자신을 호출하는 것을 재귀함수라고 한다
    재귀 호출을 수행하는 함수인 재귀 함수는 반복되는 처리를 위해 사용한다
*/

// 팩토리얼
function factorial(n){
    // n 이 1 이하일때 멈춰야 한다
    if(n<=1) return 1;

    return n*factorial(n-1);
}

console.log(factorial(2));
console.log(factorial(4));

/*
    재귀함수는 반복되는 처리를 반복문 없이 구현할 수 있다는 장점이 있지만,
    무한루프(무한 반복)에 빠질 위험이 있고, 이로인해 stack overflow 에러를 발생시킬수 있으므로 
    주의해야한다
    반복문보다 , 재귀 함수 사용이 직관적으로 이해하기 쉬울때만 한정적으로 사용하는것이 바람직하다
*/
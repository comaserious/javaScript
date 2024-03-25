/*
    array
    여러개의 값을 순차적으로 나열한 값이다

*/

// 1. 배열 리터럴 []을 통해 배열 생성
//배열이 가지고 있는 값을 요소라고 부르며, 자바스크립트의 모든값은 배열의 요소가 될수 있다

const arr = ['바나나' ,'복숭아','키위'];

console.log(arr);

//2. 배열생성자 함수
const arr2 = new Array();
console.log(arr2);

//전달된 인수가 1개이고 숫자인경우 length 프로퍼티 값이 인수인 배열을 생성
//10칸짜리 배열을 생성한것이다
const arr3 = new Array(10);
console.log(arr3);

// 전달된 인수가 2개 이상이거나, 숫자가 아닌경우 => 인수를 요소로 갖는 배열 생성
const arr4 = new Array(1,2,3,'안녕');
console.log(arr4);

//3. Array.of 메소드
//전달 된 인수를 요소로 갖는 배열을 생성
console.log(Array.of(10));
console.log(Array.of(10,11,12));
console.log(Array.of('분자열','문자열'));

//배열의 요소는 자신의 위치를 나타낼 인데스 체계로 접근할 수있다
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//length 프로퍼티를 가지고 있다 즉, 배열의 길이(요소의 갯수)
console.log(arr.length);

for(let i = 0 ; i<arr.length;i++){
    console.log(arr[i]);
}

console.log(typeof arr);

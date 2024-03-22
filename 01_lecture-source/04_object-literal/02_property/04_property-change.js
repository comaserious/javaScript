/*프로퍼티 값 변경, 추가 , 삭제 */

var dog ={
    name : '뽀삐' ,

};

dog.name
dog['name']

// 이미 존재하는 키값에 값을 초기화하면 값이 덮어 씌어진다(변경)
dog.name = '두부';

// 존재하지 않는 프로퍼티에 값을 추가하면
// 프로퍼티 동적 추가 => 존재하지 않는 프로퍼티에 값을 할당하면
//                     프로퍼티가 동적으로 생성되어 추가되고 값이 할당된다
dog.age = 3;

// 프로퍼티 삭제
// delete 연산자는 객체의 프로퍼티를 삭제한다
delete dog.age;

// 존재하지 않은 프로퍼티를 삭제한다면
delete dog.get;



console.table(dog);    

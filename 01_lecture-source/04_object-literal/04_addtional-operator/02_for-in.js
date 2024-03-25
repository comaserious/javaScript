// for in 반복문
// 객체의 모든 키를 순회한다

var student = {
    name:'이호준',
    age : 30,
    getInfo(){
        return `${this.name}은 ${this.age}세 입니다`
    }
};

for(var key in student){
    console.log(`key : ${key}`);        //프로퍼티 키
    console.log(`student[key] : ${student[key]}`);  // 키에 해당하는 value
}


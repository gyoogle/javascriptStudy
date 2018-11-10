const sym = Symbol();
console.log(sym);

const sym2 = Symbol("심볼값");
console.log(sym2);

console.log( Symbol("hi") == Symbol("hi")); //false

// 기본 자료형이라 New로 생성자를 사용하지 않는다.
// 실행 중에 변하지 않는 유일한 식별값
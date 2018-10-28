//구조화 할당

/*
const someArray = [1, 2, 3];
let one = someArray[0];
let two = someArray[1];
let three = someArray[2];

console.log(one, two, three);
*/


//비구조화 할당
const someArray = [1, 2, 3, 4, 5, 6];
let [one, two, three] = someArray;
console.log(one, two, three);

//전개 연산자 활용
let [o, t, ...numbers] = someArray;
console.log(o, t, numbers.length);
console.log(numbers[0], numbers[1]);

//기본값 지정 가능
let [a, b, c=10] = [1,2];
console.log(a, b, c);

//매칭 건너뛰기
let [x, , , y] = [1, 2, 3, 4];
console.log(x, y);
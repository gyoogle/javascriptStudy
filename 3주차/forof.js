//for of 사용

const arr = ["a", "b", "c"];
const obj = { a:1, b:2, c:3 };

for (const item of arr) {
	console.log(item);
}


// 오브젝트에 활용하면 에러가 나옴
for (const item of obj) {
	console.log(item);
}
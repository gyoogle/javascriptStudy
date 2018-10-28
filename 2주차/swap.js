// temp를 선언하지 않아도 된다!

let first = 1;
let second = 2;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);
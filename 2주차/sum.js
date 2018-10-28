const sum = ( a, b, c=10, d=20) => a+b+c+d;

console.log( sum(1) );
console.log( sum(1, 2) );
console.log( sum(1, 2, 3) );
console.log( sum(1, 2, 3, 4) );
console.log( sum(1, 2, 3, 4, 5) );

// js 함수 오버로딩 지원 X
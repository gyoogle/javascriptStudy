/*

var buffAr = [
    'I am ',
    '',
    '. I live in ',
    '',
    '. I\'am ',
    '',
    ' years old.',
];

function getCompletedStr(name, city, age){
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
}

var str = getCompletedStr('kim', 'incheon', 26);
console.log(str);

*/


// 즉시 실행 함수를 통한 클로저 구현
var getCompletedStr = (function(){
    var buffAr = [
        'I am ',
        '',
        '. I live in ',
        '',
        '. I\'am ',
        '',
        ' years old.',
    ];

    return (function(name, city, age){
        buffAr[1] = name;
        buffAr[3] = city;
        buffAr[5] = age;

        return buffAr.join('');
    });
})();

var str = getCompletedStr('kim', 'incheon', 26);
console.log(str);
function outerFunc(argNum) {
    var num = argNum;
    return function(x){
        num += x;
        console.log('num : ' + num );
    }
}

var exam = outerFunc(40);
exam(5); // 45
exam(-10); // 35

// exam을 호출할 때마다 자유변수 num 값은 계속해서 변화함
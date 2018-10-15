function func(){
    var x = 1;
    return {
        func1 : function() { console.log(++x); },
        func2 : function() { console.log(-x); }
    };
};

var exam = func();
exam.func1();
exam.func2();

// 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우 같은 자유 변수 x를 참조
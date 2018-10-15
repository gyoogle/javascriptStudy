function outerFunc(){
    var x = 1; // 자유 변수

    // 클로저
    return function(){
        console.log(x);
    }
}

var new_func = outerFunc();

// outerFunc 실행 컨택스트 종료

new_func();


// 클로저 : 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수
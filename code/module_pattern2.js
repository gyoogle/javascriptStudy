// 얕은 복사 문제로 변경 가능성 배제하는 법 - 클로저 이용

var Person = function(arg) {
    var name = arg ? arg : "zzoon";

    var Func = function() {}
    Func.prototype = {
        getName : function() {
            return name;
        },
        setName : function (arg) {
            name = arg;
        }
    };

    return Func;
}

var me = Person();
console.log(me.getName());
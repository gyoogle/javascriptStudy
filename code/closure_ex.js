function HelloFunc(func) {
    this.greeting = "hello";
}

HelloFunc.prototype.call = function(func) {
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting) {
    console.log(greeting);
}

function saySomething(obj, methodName, name) {
    
    // 클로저
    return (function(greeting){
        return obj[methodName](greeting, name); // obj, methodName, name 참조
    });
}

function newObj(obj, name) {
    obj.func = saySomething(this, "who", name);
    return obj;
}

var objHello = new HelloFunc();
objHello.func = userFunc;

objHello.call();

newObj.prototype.who = function(greeting, name){
    console.log(greeting + " " + (name || "everyone"));
}

var obj1 = new newObj(objHello, "");
obj1.call();
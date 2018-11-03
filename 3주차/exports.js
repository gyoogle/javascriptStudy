const moduleVar1 = "hungry";
const moduleVar2 = "tired";

const moduleFunc1 = () => "save";
const moduleFunc2 = () => "me!";

module.exports.moVar1 = moduleVar1;
module.exports.moFunc1 = moduleFunc1;
exports.moVar2 = moduleVar2;
exports.moFunc2 = moduleFunc2;

console.log (module.exports === exports);
//true

//객체 리터럴로 선언
module.exports = {
	moVar1: moduleVar1,
	moVar2: moduleVar2,
	moFunc1: moduleFunc1,
	moFunc2: moduleFunc2
};
exports = { moVar3: "hot", moVar4: "happy" };

console.log( module.exports === exports );
//false


exports = module.exports;
exports.moVar3 = "cold";


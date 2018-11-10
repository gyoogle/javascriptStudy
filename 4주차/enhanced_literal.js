const number = 34;
let obj = {
	number,
	// number: number,
	say(...param) {
		console.log(param.length);
		console.log(param);
		console.log(param[1]);
	},
	// say: function(param) {
	//  consle.log(param);   
	//}
	[`int${randInt()} value`] : "hello"
};

function randInt(x=100) {
	return Math.round( Math.random()*x + 1);
}

console.log(obj);
console.log(obj.say(1,2,3));
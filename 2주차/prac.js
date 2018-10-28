//변수 호이스팅
console.log(hoist);
const hoist = "hoist";

//함수 호이스팅
hoistFunc();
function hoistFunc() { 
	console.log("hoist Fuc!");
}
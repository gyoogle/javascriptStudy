const someObject = {
	numberProp: 200,
	booleanProp: true,
	stringProp: "어떤속성"
};

let {numberProp, stringProp} = someObject;
console.log(numberProp, stringProp);

//이름 바꾸려면?
let {stringProp: str, booleanProp: bool} = someObject;
console.log(str, bool);
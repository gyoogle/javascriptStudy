function restParamFunc(arg1, arg2, ...args){
	console.log(arg1);
	console.log(arg2);
	for(let i = 0; i < args.length; i++){
		console.log(args[i]);
	}
}

restParamFunc(1,2,3,4,5,6,"칠","팔");

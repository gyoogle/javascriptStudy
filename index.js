let person = {
	name : "kim",
	gender : 1,
	age : function(){
		let years = (new Date()).getFullYear();
		return years-1985+1;
	}
};

function someFunc() { 
	let to1 = setTimeout( 
		() => { console.log(this.to1);}
		, 1000);
	let to2 = setTimeout(function () { 
		console.log(this.to2);
	}, 1000);
}

someFunc();
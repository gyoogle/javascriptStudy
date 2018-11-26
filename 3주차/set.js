const set = new Set();

set.add(1); set.add(2); set.add(3);
set.delete(1);

console.log("--set type--");
for(const item of set){
	console.log(typeof(item));
}

console.log("--set size--");
console.log( set.size );
console.log("--set value--");
console.log( set.values() );

//console.log( set.has(3) );
//console.log( set.has(1) );
//console.log( set.keys() );
//console.log( set.entries() );
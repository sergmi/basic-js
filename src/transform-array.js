module.exports = function transform(arr) {
    if(Object.prototype.toString.call(arr).slice(8,-1) !== "Array"){throw "Error"; return;}
   	arr.forEach(function(y,j,m){
		switch(y) {
			case "--discard-next": m.splice(j,2);
			case "--discard-prev": m.splice(j-1,2);
			case "--double-next": m.splice(j,1,m[j+1]);
			case "--double-prev": m.splice(j,1,m[j-1]);
		}
	});
	return arr;
};
module.exports = function createDreamTeam(members) {
	if(Object.prototype.toString.call(members).slice(8,-1) !== "Array"){return false;}
	let res = [];
	let pattern = /^[A-Za-z]/;
	members.forEach(function(y,j,m){
		if(Object.prototype.toString.call(y).slice(8,-1) === "String"){
			if(pattern.test(y.trim()) === true){res.push(y.trim().charAt(0).toUpperCase());}
		}
	});
	return res.sort().join("");
};
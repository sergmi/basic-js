module.exports = function countCats(matrix) {
	let res = 0;
	matrix.forEach(function(x,i,c){
		x.forEach(function(y,j,m){
			if(y === "^^"){res++;}		
		});				
	});
	return res;
};

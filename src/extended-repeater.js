module.exports = function repeater(str,options) {
    let res = "";

	if(!options.repeatTimes){
		options.repeatTimes = 1;
	}
	
	if(!options.separator){
		options.separator = "+";
	}
	
	if(!options.addition){
		options.addition = "";
		options.additionRepeatTimes = 0;
		options.additionSeparator = "";
	}	
	else{
		if(!options.separator){
			options.separator = "+";
		}
		if(!options.additionSeparator||options.additionRepeatTimes === 1){
			options.additionSeparator = "";
		}
		if(!options.additionRepeatTimes){
			options.additionRepeatTimes = 1;
			options.additionSeparator = "";
		}
	}

	let temp_addition;
	if(options.addition){temp_addition = options.addition; options.addition = "";}

	while(options.additionRepeatTimes){
		options.additionRepeatTimes--;
		options.addition += temp_addition;
		if(options.additionRepeatTimes > 0){options.addition += options.additionSeparator;}
	}
	
	while(options.repeatTimes){
		options.repeatTimes--;
		if(!options.repeatTimes){options.separator = "";}
		res += str + options.addition + options.separator;
	}

	return res;
};
module.exports = {
	addZero(time){
		if(parseInt(time, 10) < 10){
			return "0"+time;
		}
		return time;
	}
};
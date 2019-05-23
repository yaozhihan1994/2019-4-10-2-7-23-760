module.exports = function main(inputs) {
    // write your code here...
	var d = inputs.distance; 
	var p = inputs.parkTime;
	var m = 0;
	if(d <= 2) m = 6 + p*0.25;
	else if(d > 2 && d <= 8) m = 6 + p*0.25 + (d-2)*0.8;
	else if(d > 8) m = 10.8 + p*0.25 + (d-8)*1.2;
    return Math.round(m);
};

'use strict';
var fs = require('fs'),
    filePath = process.argv[2], // absolute path of the file given
    cnt = fs.readFileSync(filePath,'utf-8').split('\n').filter(String);//.slice(1);
function reteven (number1) {
var start1=number1.toString().split('');
for (var i = 0; i < start1.length; i++) {
	if(parseInt(start1[i])%2==1)
		return false;
}
return true;

}
function numberdiscover (num1) {
	var left=num1,right=num1;
	for (var i = 0; i < 10;) {
		if(reteven(left))
			return [num1,num1-left,left]
		else if(reteven(right))
			return [num1,right-num1,right]
		else
			{left--;(right-1+1)}
	}
	// body... 
}

for (var i = 1; i < parseInt(cnt[0])+1; i++) {

	console.log(`Case #${i}: ${numberdiscover(11)}`); 
}

'use strict';
var fs = require('fs'),
    filePath = process.argv[2], // absolute path of the file given
    cnt = fs.readFileSync(filePath, 'utf-8').split('\n').filter(String); //.slice(1);
var bignum = require('bignum');
function starter(num1) {
	var non=false,data=[false,false,true,false]
	if(Math.pow(2, Math.floor(Math.log2(num1))+1)==2*num1)
		return (0)
	
	for (;num1>4;) {
		num1 = Math.pow(2, Math.floor(Math.log2(num1))+1)-num1;
		non=!non;
			if(Math.pow(2, Math.floor(Math.log2(num1))+1)==2*num1)
		break;
		}
		return ((non?!data[num1-1]:data[num1-1])?1:0)
      

}
function starter2(num1) {
	var non=false,data=[false,false,true,false]
	if(bignum.pow(2, Math.floor(Math.log2(num1))+1).eq(bignum(num1).mul(2)))
		return (0)
	
	for (;num1>4;) {
		num1 = bignum.pow(2, Math.floor(Math.log2(num1))+1).sub(num1);
		non=!non;
			if(bignum.pow(2, Math.floor(Math.log2(num1))+1).eq(bignum(num1).mul(2)))
		break;
		}
		return ((non?!data[num1-1]:data[num1-1])?1:0)
      

}
for (var i = 1; i <= parseInt(cnt[0]); i++) {
 console.log(`Case #${i}: ${starter(parseInt(cnt[i]))}`);  
// console.log(`Case #${i}: ${new Number(cnt[i]).toFixed()}`);  
}

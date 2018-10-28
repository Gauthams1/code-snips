'use strict';
var fs = require('fs'),
    filePath = process.argv[2], // absolute path of the file given
    cnt = fs.readFileSync(filePath,'utf-8').split('\n').filter(String);//.slice(1);
function check_bus(arr1,chk,case1=0) {
	var out=0,outstring="" ;
	for (var i = 0; i < chk.length; i++) {
		for (var j = 0; j < arr1.length; j+=2) {
			out+=(chk[i]<=arr1[j+1]&&chk[i]>=arr1[j])?1:0;
		}
		outstring +=" "+out;
		out=0;
	}
	console.log(`Case #${case1}: ${outstring}`);
}
for (var i = 0, j=3; i < parseInt(cnt[0]); i++,j+=parseInt(cnt[j])+3) {
	var out=cnt[j-1].split(" ").map(Number),param2=[];
	for (var k = 0; k < parseInt(cnt[j]); k++) {
		param2.push(parseInt(cnt[j+k+1]))
	}
	// console.log(out)
	check_bus(out,param2,i+1)
}

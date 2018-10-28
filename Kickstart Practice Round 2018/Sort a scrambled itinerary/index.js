'use strict';
var fs = require('fs'),
    filePath = process.argv[2], // absolute path of the file given
    cnt = fs.readFileSync(filePath,'utf-8').split('\n').filter(String);//.slice(1);
// var new1={},newr={};
// for (var i = 0; i < cnt.length; i+=2) {
// 	new1[cnt[i]]=cnt[i+1]
// 	newr[cnt[i+1]]=cnt[i]
// }
function check_last(arr1,start1) {
	var last=""
for (var i = start1; arr1[i]!=undefined; ) {
	last=i=arr1[i];
}
return (last)
}
function iter(arr1,param1) {
	var last=""
for (var i = param1; arr1[i]!=undefined; ) {
	last=(` ${arr1[i]}-${i}`)+last;
		i=arr1[i];

}
return (last)
}

 // console.log(iter(check_last(new1,cnt[0])))
for (var i = 0, j=1; i < parseInt(cnt[0]);i++,j+=2*parseInt(cnt[j])+1) {
		var new1={},newr={},startp=cnt[j+1];
for (var k = 1; k <= 2*parseInt(cnt[j]); k+=2) {
	 new1[cnt[j+k]]=cnt[j+k+1]
	newr[cnt[j+k+1]]=cnt[j+k]
}
console.log(`Case #${i+1}: ${iter(newr,check_last(new1,startp))}`)

}

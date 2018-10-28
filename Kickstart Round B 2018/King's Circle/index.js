'use strict';
var fs = require('fs'),
    filePath = process.argv[2], // absolute path of the file given
    cnt = fs.readFileSync(filePath,'utf-8').split('\n').filter(String);//.slice(1);

for (var i = 0; i < parseInt(cnt[0]); i++) {
	var param_1=cnt[i+1].split(" ")
	points(param_1[0],param_1[1],param_1[2],param_1[3],param_1[4],param_1[5],param_1[6],param_1[7],param_1[8],param_1[9])
	// console.log(param_1);
}

function points (N, V1, H1, A, B, C, D, E, F, M) {
	var V=[parseInt(V1)],H=[parseInt(H1)],Cord=[[parseInt(V1),parseInt(H1)]],Corx={},Cory={};
	Corx[V[0]]=[H[0]]
	Cory[H[0]]=[V[0]]
	A=parseInt(A)
	B=parseInt(B)
	C=parseInt(C)
	D=parseInt(D)
	E=parseInt(E)
	F=parseInt(F)
	M=parseInt(M)
	N=parseInt(N)

	for (var i = 1; i < N+1; i++) {
		V[i]=(A*V[i-1]+B*H[i-1]+C)%M
		H[i]=(D*V[i-1]+E*H[i-1]+F)%M
		Cord[i]=[V[i],H[i]]
		Corx[V[i]]?Corx[V[i]].push(H[i]):(Corx[V[i]]=[H[i]])
		Cory[H[i]]?Cory[H[i]].push(V[i]):(Cory[H[i]]=[V[i]])
	}
	// console.log(Corx);
	// console.log(Cord);
}
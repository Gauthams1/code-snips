iterate=input()

def points (N, V1, H1, A, B, C, D, E, F, M):
	V=[int(V1)]
	H=[int(H1)]
	Cord=[[int(V1),int(H1)]]
	Corx={}
	Cory={}
	Corx[V[0]]=[H[0]]
	Cory[H[0]]=[V[0]]
	A=int(A)
	B=int(B)
	C=int(C)
	D=int(D)
	E=int(E)
	F=int(F)
	M=int(M)
	N=int(N)
	for i in range(1,N):
		print(i)
		V.append((A*V[i-1]+B*H[i-1]+C)%M)
		H.append((D*V[i-1]+E*H[i-1]+F)%M)
		Cord.append([V[i],H[i]])
		if V[i] in Corx:
			Corx[V[i]].append(H[i])
		else:
			Corx[V[i]]=[H[i]]

		if H[i] in Cory:
			Cory[H[i]].append(V[i])
		else:
			Cory[H[i]]=[V[i]]
		# Cory[H[i]].append(V[i]) if Cory[H[i]] else (Cory[H[i]]=[V[i]])
	# print(Cord);

for i in range(0,int(iterate)):
	param_1=input().split(" ")
	points(param_1[0],param_1[1],param_1[2],param_1[3],param_1[4],param_1[5],param_1[6],param_1[7],param_1[8],param_1[9])
	# print(param_1);


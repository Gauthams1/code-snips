import sys
input_file = open(sys.argv[1],'r')	
b=(input_file.read().split("\n"))
def check_no(num1):
	a=str(num1)
	min="0"
	max="0"
	flag=False
	for i in range(0,len(a)):
		if int(a[i])%2==1 and flag==False:
			flag=True
			min+=str(int(a[i])-1)
			max+= "20" if int(a[i])+1 ==10 else str(int(a[i])+1)
		elif flag:
			min+="8"
			max+="0"	
		else:
			max+=a[i]
			min+=a[i]
	max=int(max)
	min=int(min)
	# print(max)
	# print(min)
	if not flag:
		return 0
	else:
		return num1-min if max-num1>num1-min else max-num1
	
	
for x in range(1,int(b[0])+1):
	print("Case #"+str(x)+":"+str(check_no(int(b[x]))))
# print(check_no(42))
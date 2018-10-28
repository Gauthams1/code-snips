import math

def no_nine(start):
	first=str(start)
	num1 = 0  # (8 if first[0]=='9' else int(first[0]))
	flag=False
	for i in range(0,len(first)-1):
		num1+=math.pow(9,len(first)-1-i)*int(first[i])
		if(first[i]=='9'):
			flag=True
			break;
	# return int(num1+(0 if flag else start%10))
	return int((num1)/9 -1 )
def nines(start,end):
	count=0
	count2=0
	for i in range(start,end):
		if str(i).find('9') < 0:
			count+=1
			if i%9 == 0:
				count2+=1
	return (str(count+1)+"  count2  "+str(count2))

# l=int(input())
for i in range(0,100000,9):
		print(str(i)+"   "+str(int(i/9))+"   "+" R  "+(nines(1,i))+" cal  "+str(no_nine(i)))
# print(no_nine(l))  
print(nines(26,26))  
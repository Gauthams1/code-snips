# Sherlock and strings 
def string_add(len1,params):
    string_1=[0] * len1
    for i in range(0,len(params)):
        for j in range(params[i][0]-1,params[i][1]):
            string_1[j]+=1
    print("".join(str(x) for x in string_1))

a=input();
b=1
for i in range(0,int(a)):
    param_1=input()
    param_1=param_1.split(" ")
    param_2=[]
    for j in range(b+1,b+int(param_1[1])+1):
        d=input()
        param_2.append([int(d.split(" ")[0]),int(d.split(" ")[1])])
    b+=b+int(param_1[1])+3
    string_add(int(param_1[0]),param_2)

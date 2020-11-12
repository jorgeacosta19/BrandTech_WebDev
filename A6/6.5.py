#5- Modify the previous program such that only multiples of three or five are considered 
# in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

n=int(input("Please input a number:"))
i=0
acum=0
while i < n:
  i+=1
  if i % 3==0 or i % 5==0:
    acum=i+acum
print(("The sum of the multiples of three or five is: {}").format(acum))

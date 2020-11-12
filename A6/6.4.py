#4- Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
n=int(input("Please input a number:"))
i=0
acum=0
while i < n:
  i+=1
  acum=i+acum
print(("The sum of the numbers from 1 to n is: {}").format(acum))  

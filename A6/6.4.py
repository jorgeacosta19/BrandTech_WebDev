#4- Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
print("Please input a number:")
n=int(input())
i=0
acum=0
while i < n:
  i+=1
  acum=i+acum
print(acum)
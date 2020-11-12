# 6- Write a program that asks the user for a number n and gives them the possibility 
# to choose between computing the sum and computing the product of 1,…,n.

number=int(input("Please input a number:"))
operation=input("Please type s for sum or p for product: ")
i=1
acum=1
if operation=="s":
    while i < number:
        i+=1
        acum=i+acum
    print(("The sum of the numbers from 1 to {} is:").format(number))
    print(acum)
elif operation=="p":
    while i < number:
        i+=14
        acum=i*acum
    print(("The product (factorial) of the numbers from 1 to {} is:").format(number))
    print(acum)
else:
    print("Please choose either s for the sum or p for the product")

#9 - Write a program that prints the next 20 leap years.



import datetime
x = datetime.datetime.now().year

year=int(input("Please insert the current year: "))
if(year==x):
    for x in range(2024,2024+80,4):
        print("the next 20 leap years are: ",x)
    


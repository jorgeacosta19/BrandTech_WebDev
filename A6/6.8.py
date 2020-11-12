#8- Write a guessing game where the user has to guess a secret number. 
# After every guess, the program tells the user whether their number was too 
# large or too small. At the end, the number of tries needed should be printed. 
# It counts only as one try if they input the same number multiple times consecutively.
secretNumber=13
number=0

def game(number):
    acum=0
    while(number !=secretNumber):
        number=int(input("Please guess the number: "))
        acum+=1
        if number>secretNumber:
            print("Try with a smaller number")
            continue
        else:
            print("Try with a bigger number")
            continue      
    print(("Great you found the number in {} attempts ").format(acum))
game(number)

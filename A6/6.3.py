#3- Modify the previous program such that only the users Alice and Bob are greeted with their names.

username = input("Please input your username:").capitalize()
if username=="Alice":
    print("Hello " + username + " welcome to our website.")
elif username=="Bob":
    print("Hello " + username + " welcome to our website.")
else:
    print("Hello Sir/Madam welcome to our website.")


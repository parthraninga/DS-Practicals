def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


num1= input("Enter the first number: ")
num2= input("Enter the second number: ") 

print("The two numbers are:", num1, "and", num2)
print("The GCD is:", gcd(int(num1), int(num2)))
# gcd is useful in euclidean al
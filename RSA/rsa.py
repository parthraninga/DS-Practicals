# implement rsa algorithm
import random
from math import gcd   

def generate_keys():
    p = 61
    q = 53
    n = p * q
    phi = (p - 1) * (q - 1)
    
    e = random.randint(1, phi)
    while gcd(e, phi) != 1:
        e = random.randint(1, phi)
    
    d = pow(e, -1, phi)
    
    return (e, n), (d, n)

def encrypt(plaintext, public_key):
    e, n = public_key
    ciphertext = pow(plaintext, e, n)
    return ciphertext

def decrypt(ciphertext, private_key):
    d, n = private_key
    plaintext = pow(ciphertext, d, n)
    return plaintext   

# Example usage 

public_key, private_key = generate_keys()
print("Public Key:", public_key)
print("Private Key:", private_key)

message = 123
print("Original Message:", message)
ciphertext = encrypt(message, public_key)
print("Encrypted Message:", ciphertext)
decrypted_message = decrypt(ciphertext, private_key)
print("Decrypted Message:", decrypted_message)


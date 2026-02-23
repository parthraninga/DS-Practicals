import string
import random

class MonoAlphabeticCypher:
    def __init__(self, key=None):
        self.alphabet = string.ascii_uppercase
        if key:
            self.key = key.upper()
        else:
            self.key = self.generate_random_key()

    def generate_random_key(self):
        key_list = list(self.alphabet)
        random.shuffle(key_list)
        return ''.join(key_list)

    def encrypt(self, plaintext):
        plaintext = plaintext.upper()
        ciphertext = ''
        for char in plaintext:
            if char in self.alphabet:
                index = self.alphabet.index(char)
                ciphertext += self.key[index]
            else:
                ciphertext += char
        return ciphertext

    def decrypt(self, ciphertext):
        ciphertext = ciphertext.upper()
        plaintext = ''
        for char in ciphertext:
            if char in self.key:
                index = self.key.index(char)
                plaintext += self.alphabet[index]
            else:
                plaintext += char
        return plaintext

# ============================================
# DEBUGGING PRACTICE SECTION
# ============================================
if __name__ == "__main__":

    # Create a cipher instance
    cipher = MonoAlphabeticCypher()
    

    
    # Test message
    test_message = input("Please enter a test message: ")

    # Store the key for inspection
   # generated_key = cipher.key
   # print(f"Generated Key: {generated_key}")

    # Encrypt - SET BREAKPOINT HERE (Line ~120)
    encrypted = cipher.encrypt(test_message)
    print(f"Encrypted: {encrypted}")
    
    # Decrypt - SET BREAKPOINT HERE (Line ~124)
    decrypted = cipher.decrypt(encrypted)
    print(f"Decrypted: {decrypted}")
    
    # Verify
    if decrypted == test_message.upper():
        print("\n✅ Encryption/Decryption successful!")
    else:
        print("\n❌ Something went wrong!")
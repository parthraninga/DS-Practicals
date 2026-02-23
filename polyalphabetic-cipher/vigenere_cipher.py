"""
Polyalphabetic Cipher - Vigenère Cipher Implementation
=======================================================
A polyalphabetic cipher uses MULTIPLE substitution alphabets.
The Vigenère cipher uses a keyword to determine which alphabet to use.

Key Difference from Monoalphabetic:
- Monoalphabetic: A always encrypts to X (same every time)
- Polyalphabetic: A encrypts to different letters each time (based on key position)
"""

import string

class VigenereCipher:
    """
    Vigenère Cipher - A polyalphabetic substitution cipher
    Uses a keyword to shift each letter by different amounts
    """
    
    def __init__(self, key):
        """
        Initialize the cipher with a keyword.
        
        Args:
            key (str): The keyword used for encryption/decryption
        """
        if not key or not key.isalpha():
            raise ValueError("Key must contain only letters!")
        
        self.key = key.upper()
        self.alphabet = string.ascii_uppercase
    
    def extend_key(self, text_length):
        """
        Repeat the key to match the length of the text.
        Example: key="KEY", text="HELLOWORLD" → "KEYKEYKEYKE"
        """
        extended_key = ""
        key_index = 0
        
        for i in range(text_length):
            extended_key += self.key[key_index % len(self.key)]
            key_index += 1
        
        return extended_key
    
    def encrypt(self, plaintext):
        """
        Encrypt plaintext using Vigenère cipher.
        
        How it works:
        1. Each letter in the key determines the shift amount
        2. 'A' = shift 0, 'B' = shift 1, 'C' = shift 2, etc.
        3. Apply different shifts to different positions
        
        Args:
            plaintext (str): Text to encrypt
            
        Returns:
            str: Encrypted text
        """
        plaintext = plaintext.upper()
        ciphertext = []
        key_index = 0
        
        for char in plaintext:
            if char in self.alphabet:
                # Find position of character in alphabet
                char_position = self.alphabet.index(char)
                
                # Find shift amount from key
                key_char = self.key[key_index % len(self.key)]
                shift = self.alphabet.index(key_char)
                
                # Apply shift (Caesar shift)
                encrypted_position = (char_position + shift) % 26
                encrypted_char = self.alphabet[encrypted_position]
                
                ciphertext.append(encrypted_char)
                key_index += 1
            else:
                # Keep non-alphabetic characters unchanged
                ciphertext.append(char)
        
        return ''.join(ciphertext)
    
    def decrypt(self, ciphertext):
        """
        Decrypt ciphertext using Vigenère cipher.
        
        Args:
            ciphertext (str): Text to decrypt
            
        Returns:
            str: Decrypted text
        """
        ciphertext = ciphertext.upper()
        plaintext = []
        key_index = 0
        
        for char in ciphertext:
            if char in self.alphabet:
                # Find position of encrypted character
                char_position = self.alphabet.index(char)
                
                # Find shift amount from key
                key_char = self.key[key_index % len(self.key)]
                shift = self.alphabet.index(key_char)
                
                # Reverse the shift
                decrypted_position = (char_position - shift) % 26
                decrypted_char = self.alphabet[decrypted_position]
                
                plaintext.append(decrypted_char)
                key_index += 1
            else:
                # Keep non-alphabetic characters unchanged
                plaintext.append(char)
        
        return ''.join(plaintext)
    
    def show_encryption_table(self, plaintext):
        """
        Educational function to show how each letter is encrypted.
        """
        plaintext = plaintext.upper()
        print("\n" + "="*70)
        print("ENCRYPTION PROCESS TABLE")
        print("="*70)
        print(f"{'Position':<10} {'Plain':<10} {'Key':<10} {'Shift':<10} {'Cipher':<10}")
        print("-"*70)
        
        key_index = 0
        for i, char in enumerate(plaintext):
            if char in self.alphabet:
                key_char = self.key[key_index % len(self.key)]
                shift = self.alphabet.index(key_char)
                char_pos = self.alphabet.index(char)
                encrypted_pos = (char_pos + shift) % 26
                encrypted_char = self.alphabet[encrypted_pos]
                
                print(f"{i:<10} {char:<10} {key_char:<10} {shift:<10} {encrypted_char:<10}")
                key_index += 1
        print("="*70)


# ============================================
# DEMONSTRATION
# ============================================
def demonstrate_vigenere():
    """Demonstrate how Vigenère cipher works"""
    print("="*70)
    print("POLYALPHABETIC CIPHER - VIGENÈRE CIPHER DEMONSTRATION")
    print("="*70)
    
    # Example 1
    print("\n📚 Example 1: Basic Encryption")
    print("-"*70)
    
    key = "KEY"
    cipher = VigenereCipher(key)
    
    message = "HELLO WORLD"
    encrypted = cipher.encrypt(message)
    decrypted = cipher.decrypt(encrypted)
    
    print(f"Key:       {key}")
    print(f"Message:   {message}")
    print(f"Encrypted: {encrypted}")
    print(f"Decrypted: {decrypted}")
    
    # Show the process
    cipher.show_encryption_table(message)
    
    # Example 2
    print("\n\n📚 Example 2: Why it's 'Polyalphabetic'")
    print("-"*70)
    print("Notice: Same letter encrypts to DIFFERENT letters!\n")
    
    message2 = "AAA"
    encrypted2 = cipher.encrypt(message2)
    
    print(f"Message:   {message2}")
    print(f"Key:       {key}")
    print(f"Encrypted: {encrypted2}")
    print("\n👉 'A' encrypts to 'K', 'E', 'Y' (different each time!)")
    print("   This is because each position uses a different shift.\n")


# ============================================
# NAIVE/BEGINNER IMPLEMENTATION
# ============================================
def naive_vigenere():
    """Simple implementation for beginners"""
    print("\n\n" + "="*70)
    print("NAIVE/BEGINNER IMPLEMENTATION")
    print("="*70)
    
    # Get inputs
    message = input("\nEnter message to encrypt: ").upper()
    key = input("Enter key word: ").upper()
    
    # Remove spaces and non-letters from message
    clean_message = ""
    for char in message:
        if char.isalpha():
            clean_message += char
    
    # Encrypt
    encrypted = ""
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for i in range(len(clean_message)):
        # Get current letter
        letter = clean_message[i]
        
        # Get corresponding key letter (repeat key if needed)
        key_letter = key[i % len(key)]
        
        # Find positions
        letter_position = 0
        key_position = 0
        
        for j in range(26):
            if alphabet[j] == letter:
                letter_position = j
            if alphabet[j] == key_letter:
                key_position = j
        
        # Add positions and wrap around
        new_position = (letter_position + key_position) % 26
        encrypted_letter = alphabet[new_position]
        
        encrypted += encrypted_letter
    
    print(f"\nOriginal:  {clean_message}")
    print(f"Key:       {key}")
    print(f"Encrypted: {encrypted}")
    
    # Decrypt
    decrypted = ""
    for i in range(len(encrypted)):
        letter = encrypted[i]
        key_letter = key[i % len(key)]
        
        letter_position = 0
        key_position = 0
        
        for j in range(26):
            if alphabet[j] == letter:
                letter_position = j
            if alphabet[j] == key_letter:
                key_position = j
        
        # Subtract positions and wrap around
        new_position = (letter_position - key_position) % 26
        decrypted_letter = alphabet[new_position]
        
        decrypted += decrypted_letter
    
    print(f"Decrypted: {decrypted}")
    print("\n✅ Encryption/Decryption complete!")


# ============================================
# INTERACTIVE MODE
# ============================================
def interactive_mode():
    """Interactive mode for users"""
    print("\n" + "="*70)
    print("INTERACTIVE VIGENÈRE CIPHER")
    print("="*70)
    
    key = input("\nEnter your keyword (letters only): ").strip()
    
    try:
        cipher = VigenereCipher(key)
        print(f"✓ Cipher initialized with key: {cipher.key}")
        
        while True:
            print("\n" + "-"*70)
            print("Options:")
            print("1. Encrypt a message")
            print("2. Decrypt a message")
            print("3. Show encryption table")
            print("4. Exit")
            
            choice = input("\nChoose option (1-4): ").strip()
            
            if choice == '1':
                message = input("Enter message to encrypt: ")
                encrypted = cipher.encrypt(message)
                print(f"\n🔒 Encrypted: {encrypted}")
            
            elif choice == '2':
                message = input("Enter message to decrypt: ")
                decrypted = cipher.decrypt(message)
                print(f"\n🔓 Decrypted: {decrypted}")
            
            elif choice == '3':
                message = input("Enter message to show encryption process: ")
                cipher.show_encryption_table(message)
            
            elif choice == '4':
                print("\nGoodbye! 👋")
                break
            
            else:
                print("❌ Invalid option. Please try again.")
    
    except ValueError as e:
        print(f"Error: {e}")


# ============================================
# MAIN EXECUTION
# ============================================
if __name__ == "__main__":
    # Run demonstration
    demonstrate_vigenere()
    
    # Ask user what to do next
    print("\n" + "="*70)
    choice = input("\nWhat would you like to try?\n1. Naive implementation\n2. Interactive mode\n3. Exit\n\nChoice: ").strip()
    
    if choice == '1':
        naive_vigenere()
    elif choice == '2':
        interactive_mode()
    else:
        print("\nThank you for learning about Vigenère cipher! 🎓")

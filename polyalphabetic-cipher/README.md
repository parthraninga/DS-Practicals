# Polyalphabetic Cipher - Vigenère Cipher

## What is a Polyalphabetic Cipher?

A **polyalphabetic cipher** uses **multiple substitution alphabets** to encrypt a message. Unlike monoalphabetic ciphers where 'A' always encrypts to the same letter, in polyalphabetic ciphers, 'A' can encrypt to different letters depending on its position.

## Vigenère Cipher

The **Vigenère cipher** is the most famous polyalphabetic cipher, invented by Blaise de Vigenère in the 16th century.

### How It Works

1. **Choose a keyword**: e.g., "KEY"
2. **Repeat the keyword** to match the message length
3. **Apply Caesar shift** for each letter based on the keyword position

### Example

```
Message:  H E L L O W O R L D
Key:      K E Y K E Y K E Y K
Shift:    10 4 24 10 4 24 10 4 24 10
Encrypted: R I J V S Q Y V J N
```

- H + shift 10 (K) = R
- E + shift 4 (E) = I
- L + shift 24 (Y) = J
- And so on...

## Why is it Stronger than Monoalphabetic?

- **Breaks frequency analysis**: Same letter encrypts differently
- **Multiple substitution alphabets**: Uses 26 different Caesar ciphers
- **Harder to crack**: Requires knowing the key length first

## Files

- `vigenere_cipher.py` - Complete implementation with demonstrations

## Usage

```bash
cd "/Users/admin/Data Security/polyalphabetic-cipher"
python3 vigenere_cipher.py
```

## Features

✅ Class-based implementation  
✅ Encryption and decryption  
✅ Educational encryption table  
✅ Interactive mode  
✅ Naive/beginner implementation  
✅ Detailed demonstrations

## Security Note

While stronger than monoalphabetic ciphers, Vigenère cipher can still be broken using:
- Kasiski examination (finding key length)
- Frequency analysis on each alphabet
- Index of coincidence

**Not suitable for modern security!** Use for educational purposes only.

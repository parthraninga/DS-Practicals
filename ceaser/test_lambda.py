"""
Test script for Caesar Cipher Lambda function
"""
import json
from index import lambda_handler, caesar_cipher


def test_caesar_cipher():
    """Test the Caesar cipher function directly"""
    print("Testing caesar_cipher function...")
    
    # Test 1: Basic encryption
    result = caesar_cipher("HELLO", 3)
    assert result == "KHOOR", f"Expected 'KHOOR', got '{result}'"
    print("✓ Test 1 passed: Basic encryption")
    
    # Test 2: Lowercase
    result = caesar_cipher("hello", 3)
    assert result == "khoor", f"Expected 'khoor', got '{result}'"
    print("✓ Test 2 passed: Lowercase encryption")
    
    # Test 3: Mixed case with special characters
    result = caesar_cipher("Hello, World!", 13)
    assert result == "Uryyb, Jbeyq!", f"Expected 'Uryyb, Jbeyq!', got '{result}'"
    print("✓ Test 3 passed: Mixed case with special characters")
    
    # Test 4: Key wrapping
    result = caesar_cipher("XYZ", 5)
    assert result == "CDE", f"Expected 'CDE', got '{result}'"
    print("✓ Test 4 passed: Key wrapping")
    
    # Test 5: Large key
    result = caesar_cipher("ABC", 29)  # 29 % 26 = 3
    assert result == "DEF", f"Expected 'DEF', got '{result}'"
    print("✓ Test 5 passed: Large key normalization")
    
    print("\nAll cipher tests passed! ✓\n")


def test_lambda_handler():
    """Test the Lambda handler function"""
    print("Testing lambda_handler function...")
    
    # Test 1: Valid input
    event = {
        "text": "Hello World",
        "key": 3
    }
    response = lambda_handler(event, None)
    assert response['statusCode'] == 200
    body = json.loads(response['body'])
    assert body['encrypted_text'] == "Khoor Zruog"
    print("✓ Test 1 passed: Valid input")
    
    # Test 2: Missing text
    event = {
        "key": 3
    }
    response = lambda_handler(event, None)
    assert response['statusCode'] == 400
    body = json.loads(response['body'])
    assert 'error' in body
    print("✓ Test 2 passed: Missing text error handling")
    
    # Test 3: API Gateway format
    event = {
        "body": json.dumps({
            "text": "TEST",
            "key": 1
        })
    }
    response = lambda_handler(event, None)
    assert response['statusCode'] == 200
    body = json.loads(response['body'])
    assert body['encrypted_text'] == "UFTU"
    print("✓ Test 3 passed: API Gateway format")
    
    # Test 4: Zero key
    event = {
        "text": "Hello",
        "key": 0
    }
    response = lambda_handler(event, None)
    assert response['statusCode'] == 200
    body = json.loads(response['body'])
    assert body['encrypted_text'] == "Hello"
    print("✓ Test 4 passed: Zero key (no change)")
    
    # Test 5: Negative key
    event = {
        "text": "DEF",
        "key": -3
    }
    response = lambda_handler(event, None)
    assert response['statusCode'] == 200
    body = json.loads(response['body'])
    assert body['encrypted_text'] == "ABC"
    print("✓ Test 5 passed: Negative key (decryption)")
    
    print("\nAll handler tests passed! ✓\n")


if __name__ == "__main__":
    print("=" * 50)
    print("Caesar Cipher Lambda Function Tests")
    print("=" * 50 + "\n")
    
    test_caesar_cipher()
    test_lambda_handler()
    
    print("=" * 50)
    print("All tests completed successfully! 🎉")
    print("=" * 50)

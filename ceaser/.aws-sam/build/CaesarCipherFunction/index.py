import json

def lambda_handler(event, context):
    """
    Lambda function to perform Caesar cipher encryption.
    
    Parameters:
    - text: The plaintext to be encrypted
    - key: The shift value for the Caesar cipher (integer)
    
    Returns:
    - Encrypted text using Caesar cipher
    """
    try:
        # Parse input from event
        if isinstance(event.get('body'), str):
            body = json.loads(event['body'])
        else:
            body = event
        
        text = body.get('text', '')
        key = int(body.get('key', 0))
        
        if not text:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS'
                },
                'body': json.dumps({
                    'error': 'Text is required'
                })
            }
        
        # Perform Caesar cipher encryption
        encrypted_text = caesar_cipher(text, key)
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps({
                'original_text': text,
                'key': key,
                'encrypted_text': encrypted_text
            })
        }
    
    except ValueError as e:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps({
                'error': f'Invalid key value: {str(e)}'
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps({
                'error': f'Internal error: {str(e)}'
            })
        }


def caesar_cipher(text, key):
    """
    Encrypt text using Caesar cipher algorithm.
    
    Args:
        text (str): The plaintext to encrypt
        key (int): The shift value
    
    Returns:
        str: The encrypted text
    """
    result = []
    
    # Normalize key to be within 0-25 range
    key = key % 26
    
    for char in text:
        if char.isalpha():
            # Determine if uppercase or lowercase
            ascii_offset = ord('A') if char.isupper() else ord('a')
            
            # Shift the character
            shifted = (ord(char) - ascii_offset + key) % 26
            encrypted_char = chr(shifted + ascii_offset)
            result.append(encrypted_char)
        else:
            # Keep non-alphabetic characters unchanged
            result.append(char)
    
    return ''.join(result)

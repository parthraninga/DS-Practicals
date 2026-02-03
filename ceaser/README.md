# Caesar Cipher Lambda Function

This AWS Lambda function implements a Caesar cipher encryption algorithm using Python 3.11.

## Overview

The Caesar cipher is a substitution cipher that shifts each letter in the plaintext by a fixed number of positions in the alphabet.

## Function Details

- **Runtime**: Python 3.11
- **Handler**: `lambda_function.lambda_handler`
- **Memory**: 128 MB
- **Timeout**: 10 seconds

## Input Format

The function accepts the following input:

```json
{
  "text": "Hello World",
  "key": 3
}
```

- `text`: The plaintext to be encrypted (required)
- `key`: The shift value for the Caesar cipher (required, integer)

## Output Format

Success response:

```json
{
  "statusCode": 200,
  "body": "{\"original_text\": \"Hello World\", \"key\": 3, \"encrypted_text\": \"Khoor Zruog\"}"
}
```

Error response:

```json
{
  "statusCode": 400,
  "body": "{\"error\": \"Text is required\"}"
}
```

## Deployment Instructions

### Prerequisites

- AWS CLI configured with appropriate credentials
- AWS SAM CLI installed
- Python 3.11 installed locally (for testing)

### Deploy with SAM

1. Navigate to the function directory:
   ```bash
   cd /Users/admin/Data\ Security/ceaser
   ```

2. Build the SAM application:
   ```bash
   sam build
   ```

3. Deploy the stack:
   ```bash
   sam deploy --guided
   ```

### Deploy with CloudFormation

1. Package the CloudFormation template:
   ```bash
   aws cloudformation package \
     --template-file template.yaml \
     --s3-bucket YOUR_DEPLOYMENT_BUCKET \
     --output-template-file packaged-template.yaml
   ```

2. Deploy the stack:
   ```bash
   aws cloudformation deploy \
     --template-file packaged-template.yaml \
     --stack-name caesar-cipher-stack \
     --capabilities CAPABILITY_NAMED_IAM
   ```

## Testing Locally

Test the function locally using Python:

```python
from lambda_function import lambda_handler

event = {
    "text": "Hello World",
    "key": 3
}

result = lambda_handler(event, None)
print(result)
```

## Testing in AWS

Invoke the function using AWS CLI:

```bash
aws lambda invoke \
  --function-name CaesarCipherFunction \
  --payload '{"text": "Hello World", "key": 3}' \
  response.json

cat response.json
```

## Examples

### Example 1: Basic encryption
Input:
```json
{
  "text": "HELLO",
  "key": 3
}
```

Output:
```json
{
  "original_text": "HELLO",
  "key": 3,
  "encrypted_text": "KHOOR"
}
```

### Example 2: Mixed case with spaces
Input:
```json
{
  "text": "Hello World!",
  "key": 13
}
```

Output:
```json
{
  "original_text": "Hello World!",
  "key": 13,
  "encrypted_text": "Uryyb Jbeyq!"
}
```

### Example 3: Large key value
Input:
```json
{
  "text": "ABC",
  "key": 29
}
```

Output (key normalized to 29 % 26 = 3):
```json
{
  "original_text": "ABC",
  "key": 29,
  "encrypted_text": "DEF"
}
```

## Notes

- Non-alphabetic characters (numbers, punctuation, spaces) remain unchanged
- The function handles both uppercase and lowercase letters
- Key values larger than 26 are automatically normalized using modulo 26
- The function preserves the case of the original text

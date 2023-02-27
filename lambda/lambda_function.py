import json


def lambda_handler(event, context):

    isPasswordCorrect = False
    if event["password"] == "open sesame":
        isPasswordCorrect = True
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!'),
        'correct': isPasswordCorrect
    }

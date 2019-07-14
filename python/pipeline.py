import pandas as pd
from boto3.dynamodb.types import TypeSerializer
import json


def replaceObjectName(data):
    data = data.replace('"M"', '"m"')
    data = data.replace('"L"', '"l"')
    data = data.replace('"S"', '"s"')
    data = data.replace('"N"', '"n"')
    return data


def converterToDynamodbFormat(data):
    typer = TypeSerializer()
    dynamodbJsonData = json.dumps(typer.serialize(data)['M'])
    return replaceObjectName(dynamodbJsonData)


df = pd.read_csv('../data/data.csv')
user_number, columns_number = df.shape
print(columns_number)


users = []
for user_index in range(user_number):
    user = {}
    for columns_index in range(columns_number):
        column_name = df.columns[columns_index]
        user[column_name] = df[column_name][user_index]
    users.append(user)


with open("../data-pipeline/datacsv.txt", 'w+') as f:
    for user in users:
        f.write(converterToDynamodbFormat(user))
        f.write('\n')

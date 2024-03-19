import dynamoose from 'dynamoose';

const ddb = new dynamoose.aws.ddb.DynamoDB({
  region: process.env.REGION
});

process.env.IS_OFFLINE === 'true'
  ? dynamoose.aws.ddb.local('http://localhost:8005')
  : dynamoose.aws.ddb.set(ddb);


export const dynamo = dynamoose;

import AWS from 'aws-sdk';

export async function invokeLambda(functionName, payload) {
    let lambda = new AWS.Lambda();

    let payloadStr = JSON.stringify(payload);
    let params = {
        FunctionName: functionName,
        InvocationType: 'RequestResponse',
        LogType: 'None',
        Payload: payloadStr,
    };
    try {
        const lambdaResult = await lambda.invoke(params).promise();
        return JSON.parse(lambdaResult.Payload);
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
module.exports = async (AWS, tableName = '', key) => {
    const dynamodb = new AWS.DynamoDB();

    try {
        const params = {
            Key: key,
            TableName: tableName
        };
        const result = await dynamodb.getItem(params).promise()
        console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
    }
}

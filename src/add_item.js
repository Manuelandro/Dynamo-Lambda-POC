module.exports = async (AWS, tableName = '', item = {}) => {
    var documentClient = new AWS.DynamoDB.DocumentClient();

    try {
        const params = {
            TableName: tableName,
            Item: item
        }
        const result = await documentClient.put(params).promise()
        return result
    } catch (err) {
        console.log(err)
    }
}

module.exports = async (AWS, tableName = '') => {
    var documentClient = new AWS.DynamoDB.DocumentClient();

    try {
        const params = {
            TableName: tableName
        }

        const all = await documentClient.scan(params).promise();
        return all
    } catch (err) {
        console.log(err)
    }
}

let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    let op = event['op'];

    if (op === 'add') {
        ddb.put({
            TableName: '462DDB',
            Item: { 'name': 'mike' }
        }).promise()
            .then((data) => {
                console.log("Successfully added user");
                callback(null, "Successfully added user");
            })
            .catch((err) => {
                console.log("Failed to add user");
                callback(err);
            });
    } else if (op === 'delete') {
        ddb.delete({
            TableName: '462DDB',
            Key: { 'name': 'mike' }
        }).promise()
            .then((data) => {
                console.log("Successfully deleted user");
                callback(null, "Successfully deleted user");
            })
            .catch((err) => {
                console.log("Failed to delete user");
                callback(err);
            });
    } else {
        callback("Invalid operation");
    }
}
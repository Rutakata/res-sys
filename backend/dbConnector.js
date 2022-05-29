const mongodb = require('mongodb');
const {ObjectID} = require("mongodb");


async function main(callback, props) {
    const client = new mongodb.MongoClient("mongodb://localhost:27017/restaurant")
    let result

    try {
        await client.connect()
        result = await callback(client, props)
    }catch (e) {
        console.log(e)
    }finally {
        await client.close()
    }

    return result
}

async function getData(client, {collectionName}) {
    let result = []

    const data = await client.db().collection(collectionName).find()
    await data.forEach(item => result.push(item))

    return result
}

async function postData(client, {collectionName, data}) {
    await client.db().collection(collectionName).insertOne(data)

    return {statusCode: 200, message: "Data was inserted"}
}

async function deleteData(client, {collectionName, id}) {
    let result = await client.db().collection(collectionName).deleteOne({"_id": new ObjectID(id)})

    if (result.deletedCount) {
        return {statusCode: 200, message: "Document was deleted"}
    }
    return {statusCode: 404, message: "Document was not found"}
}

async function setReady(client, {collectionName, id}) {
    const result = await client.db().collection(collectionName).updateOne(
        {"_id": new mongodb.ObjectID(id)}, {"$set": {"isOrderReady": true}}
    )

    if (result.matchedCount) {
        return {statusCode: 200, message: "Document was updated"}
    }
    return {statusCode: 404, message: "Document was not found"}
}

async function logIn(client, {collectionName, username, password}) {
    const userObject = await client.db().collection(collectionName).findOne({"username":username, "password": password})

    if (!userObject) {
        return {statusCode: 404, message: "User is not found"}
    }
    return {statusCode: 200, userObject}
}

module.exports = {
    main: main,
    getData: getData,
    postData: postData,
    deleteData: deleteData,
    setReady: setReady,
    logIn: logIn
}

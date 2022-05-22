const mongodb = require('mongodb');
const {ObjectID} = require("mongodb");


const client = new mongodb.MongoClient("mongodb://localhost:27017/restaurant")

export const getData = async (collectionName) => {
    let response = []

    let getData = (item) => { response.push(item) }

    try {
        await client.connect()
        const data = client.db().collection(collectionName).find()
        await data.forEach(item => getData(item))
    }catch (e) {
        console.log(e)
    }finally {
        await client.close()
    }

    return response
}

export const postData = async (collectionName,data) => {
    try {
        await client.connect()
        await client.db().collection(collectionName).insertOne(data)
    }catch (e) {
        console.log(e)
    }finally {
        await client.close()
    }

    return "Data was inserted"
}

export const setReady = async(collectionName, id) => {
    let objectId = new ObjectID(id)

    try {
        await client.connect()
        await client.db().collection(collectionName).updateOne( {"_id": objectId}, {"$set": {"isOrderReady": true}})
    }catch(e) {
        console.log(e)
    }finally {
        await client.close()
    }

    return "Dish is set ready"
}

export const logIn = async(collectionName, username, password) => {
    try {
        await client.connect()
        let userObject = await client.db().collection(collectionName).findOne({"username":username, "password": password})

        if (!userObject) {
            return "Error. User is not found"
        }
        return userObject
    }catch (e) {
        console.log(e)
    }
}

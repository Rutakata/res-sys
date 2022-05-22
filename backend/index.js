const express = require('express');
const mongodb = require('mongodb');
const cors = require("cors")
const {ObjectID} = require("mongodb");
const bcrypt = require("bcryptjs")
const {response} = require("express");


const app = express()
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const client = new mongodb.MongoClient("mongodb://localhost:27017/restaurant")
const PORT = 5000

const getData = async (collectionName) => {
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

const postData = async (collectionName,data) => {
    try {
        await client.connect()
        await client.db().collection(collectionName).insertOne(data)
    }catch (e) {
        console.log(e)
    }finally {
        await client.close()
    }

    return { statusCode: 200, message: "Data was posted" }
}

const setReady = async(collectionName, id) => {
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

const logIn = async(collectionName, username, password) => {
    try {
        await client.connect()
        let userObject = await client.db().collection(collectionName).findOne({"username":username, "password": password})

        if (!userObject) {
            return {statusCode: 400, message: "Error. User or password is not found"}
        }

        if (password !== userObject.password) {
            return {statusCode: 403, message: "Error.The password is not correct"}
        }
        return {statusCode: 200, userObject}
    }catch (e) {
        console.log(e)
    }finally {
        await client.close()
    }
}

const deleteData = async ( collectionName, id) => {
    let objectId = new ObjectID(id)

    try {
        console.log(objectId)
        await client.connect()
        await client.db().collection(collectionName).deleteOne({"_id": objectId})
    }catch (e) {
        console.log(e)
    }finally {
        await client.close()
    }

    return { statusCode: 200, message: "Document was deleted" }
}

app.get('/', (req, res) => {
    res.send("Endpoint is /")
})
app.get('/soupDishes', (req, res) =>  {
    getData("soupDishes").then(response => res.send(response))
})
app.get('/drinkDishes', (req, res) => {
    getData("drinkDishes").then(response => res.send(response))
})
app.get('/orders', (req, res) => {
    getData("orders").then(response => res.send(response))
})
app.post('/orders', (req, res) => {
    let data = req.body
    console.log(data)
    postData("orders", data).then(response => res.send(response))
})
app.put('/orders/:id', (req, res) => {
    let {id} = req.params
    console.log("Id:", id)
    setReady( "orders",id).then(response => res.send(response))
})
app.post('/login', (req, res) => {
    let {username, password} = req.body
    logIn("userRoles", username, password).then(response => res.send(response))
})
app.post('/payment', (req, res) => {
    let data = req.body
    console.log(data)
    data = {
        orderContent: [...data.orderContent],
        orderDate: data.orderDate,
        isOrderReady: data.isOrderReady,
        currentOrderPrice: data.currentOrderPrice
    }
    postData("payment", data).then(response => res.send(response))
})
app.delete("/orders/:id", (req, res) => {
    let {id} = req.params
    console.log(id)
    deleteData("orders", id).then(response => res.send(response))
})
// app.post("/menu", (req, res) => {
//     let data = req.body
//     postData(data.dishCategory, {"dishName":data.dishName, "dishPrice": Number(data.dishPrice)}).then(response => res.send(response))
// })


app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`)
})
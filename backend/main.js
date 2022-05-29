const express = require("express");
const cors = require("cors")
const {main, getData, postData, setReady, logIn, deleteData} = require("./dbConnector")


const app = express()
const port = 5000
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/soupDishes', (req, res) =>  {
    main(getData, {collectionName: "soupDishes"}).then(result => res.send(result))
})
app.get('/drinkDishes', (req, res) => {
    main(getData, {collectionName: "drinkDishes"}).then(result => res.send(result))
})
app.get('/orders', (req, res) => {
    main(getData, {collectionName: "orders"}).then(result => res.send(result))
})
app.post('/orders', (req, res) => {
    let data = req.body
    main(postData, {collectionName: "orders", data}).then(result => res.send(result))
})
app.post('/payment', (req, res) => {
    let data = req.body
    data = { orderContent: [...data.orderContent], orderDate: data.orderDate, orderPrice: data.currentOrderPrice }
    main(postData, {collectionName: "payment", data}).then(result => res.send(result))
})
app.post('/login', (req, res) => {
    let {username, password} = req.body
    console.log(username, "-", password)
    main(logIn, {collectionName: "userRoles", username, password}).then(result => res.send(result))
})
app.put('/orders/:id', (req, res) => {
    let {id} = req.params
    main(setReady, {collectionName: "orders", id}).then(result => res.send(result))
})
app.delete("/orders/:id", (req, res) => {
    let {id} = req.params
    main(deleteData, {collectionName: "orders", id}).then(result => res.send(result))
    //deleteData("orders", id).then(response => res.send(response))
})

// app.post("/menu", (req, res) => {
//     let data = req.body
//     postData(data.dishCategory, {"dishName":data.dishName, "dishPrice": Number(data.dishPrice)}).then(response => res.send(response))
// })


app.listen(port, () => {
    console.log(`Server is working on port ${port}`)
})

import * as axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
})

export const MenuApi = {
    getSoupDishes() {
        return instance.get(`/soupDishes`)
    },
    getDrinksDishes() {
        return instance.get(`/drinkDishes`)
    },
    sendOrder(newOrder) {
        return instance.post(`/orders`, newOrder)
    },
    sendNewDish(newDish) {
        return instance.post(`/menu`, newDish)
    }

}

export const OrdersApi = {
    getOrders() {
        return instance.get(`/orders`)
    },
    setOrderReady(id) {
        return instance.put(`/orders/${id}`)
    },
    setOrderDelivered(order) {
        return instance.post(`/payment`, order)
    },
    deleteDeliveredOrder(id) {
        return instance.delete(`/orders/${id}`)
    }
}

export const AuthApi = {
    logIn(username, password) {
        console.log(username, password)
        return instance.post('/login', {"username": username, "password": password})
    }
}
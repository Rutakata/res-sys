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
    }
}

export const OrdersApi = {
    getOrders() {
        return instance.get(`/orders`)
    },
    setOrderReady(id) {
        return instance.put(`/orders`, id)
    }
}

export const AuthApi = {
    logIn(username, password) {
        return instance.post('/login', {"username": username, "password": password})
    }
}
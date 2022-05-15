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
    sendOrder() {
        return instance.post(`/orders`)
    }
}

export const OrdersApi = {
    getOrders() {
        return instance.get(`/orders`)
    }
}
import * as axios from "axios";


const instance = axios.create({
    baseURL: "https://6246cd38739ac8459192cae8.mockapi.io/api/v1/"
})

export const MenuApi = {
    getSoupDishes() {
        return instance.get(`soupDishes`)
    },
    getDrinksDishes() {
        return instance.get(`drinkDishes`)
    },
    sendOrder(order) {
        return instance.post(`orders/`)
    }
}

export const OrdersApi = {
    getOrders() {
        return instance.get(`orders`)
    },
    setOrderReady(id) {
        return instance.put(`orders/${id}?isOrderReady=false`)
    }
}
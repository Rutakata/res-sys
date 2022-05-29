import {OrdersApi} from "../API/api";


const GET_ORDERS = "GET_ORDERS"

let initialState = {
    inProgress: [],
    ready: []
}

let ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {...state, inProgress: action.inProgress, ready: action.ready}
        default:
            return state
    }
}

const setOrders = (ordersList) => {
    let ready = []
    let inProgress = []

    ordersList.map(order => {
        if (order.isOrderReady === true) {
            ready.push(order)
        }else {
            inProgress.push(order)
        }
    })
    return {
        type: GET_ORDERS,
        ready,
        inProgress
    }
}
export const getOrdersList = () => async (dispatch) => {
    let response = await OrdersApi.getOrders()
    dispatch(setOrders(response.data))
    console.log(response)
}
export const setOrderReady = (id) => async (dispatch) => {
    await OrdersApi.setOrderReady(id)
    let response = await OrdersApi.getOrders()
    dispatch(setOrders(response.data))
}
export const sendOrderToPayment = (order, id) => async (dispatch) => {
    let response = await OrdersApi.setOrderDelivered(order)
    console.log(response)
    console.log(id)
    response = await OrdersApi.deleteDeliveredOrder(id)
    console.log(response)
    response = await OrdersApi.getOrders()
    dispatch(setOrders(response.data))
}


export default ordersReducer
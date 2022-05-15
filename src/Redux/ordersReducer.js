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
export const changeOrderState = (id) => async (dispatch) => {
    let response = await OrdersApi.setOrderReady(id)
    console.log(response)
    // let response2 = await OrdersApi.getOrders()
    // dispatch(setOrders(response2.data))
}


export default ordersReducer
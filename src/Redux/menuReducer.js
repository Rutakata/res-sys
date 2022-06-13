import {MenuApi} from "../API/api";

const GET_SOUP_DISHES = "GET_SOUP_DISHES"
const GET_DRINKS = "GET_DRINKS"
const ADD_DISH_TO_ORDER = "ADD_DISH_TO_ORDER"
const SEND_ORDER = "SEND_ORDER"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const CLEAR_ORDER = "CLEAR_ORDER"
const SET_DISH_NUMBER = "SET_DISH_NUMBER"
const DELETE_ORDER_ITEM = "DELETE_ORDER_ITEM"
const SET_SEARCHED_DISHES = "SET_SEARCHED_DISHES"

let initialState = {
    soups: [],
    drinks: [],
    searchedDishes: [],
    currentOrder: [],
    currentOrderPrice: 0,
    dishToDelete: null,
    isFetching: false
}

let menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SOUP_DISHES:
            return {...state, soups: action.soupDishes}
        case GET_DRINKS:
            return {...state, drinks: action.drinks}
        case ADD_DISH_TO_ORDER:
            let isPresent = state.currentOrder.some((order) => order.dishName === action.dish.dishName)
            return isPresent === false ?  {...state, currentOrder: [...state.currentOrder, {...action.dish, number: 1}],
                                            currentOrderPrice: state.currentOrderPrice + action.dish.dishPrice}: state
        case SEND_ORDER:
            return {...state, currentOrder: [], currentOrderPrice: 0}
        case CLEAR_ORDER:
            return {...state, currentOrder: [], currentOrderPrice: 0}
        case SET_DISH_NUMBER:
            let newPrice = state.currentOrderPrice
            let newCurrentOrder = state.currentOrder.map((item) => {
                if (item._id === action.id) {
                    newPrice = (newPrice - (item.number*item.dishPrice) + (action.number*item.dishPrice))
                    return {...item, number: action.number}
                }else {
                    return item
                }
            })
            return {...state, currentOrder: [...newCurrentOrder], currentOrderPrice: newPrice}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case DELETE_ORDER_ITEM:
            let updatedOrder = state.currentOrder.filter(item => item._id !== action.id)
            let price = 0
            updatedOrder.forEach(item => price += (item.dishPrice * item.number))
            return {...state, currentOrder: [...updatedOrder], currentOrderPrice: price}
        case SET_SEARCHED_DISHES:
            let currentSearchedDishes = []
            if (action.searchReq === "") {
                return {...state, searchedDishes: []}
            }
            state.soups.forEach(dish => {
                if (dish.dishName.toLowerCase().includes(action.searchReq)) {
                    currentSearchedDishes.push(dish)
                }
            })
            state.drinks.forEach(dish => {
                if (dish.dishName.toLowerCase().includes(action.searchReq)) {
                    currentSearchedDishes.push(dish)
                }
            })

            return {...state, searchedDishes: [...currentSearchedDishes]}
        default:
            return state
    }
}

const setSoupDishes = (soupDishes) => {
    return { type: GET_SOUP_DISHES, soupDishes }
}

const setDrinks = (drinks) => {
    return { type: GET_DRINKS, drinks }
}

export const sendOrderAC = () => {
    return { type: SEND_ORDER }
}

export const addDishToOrder = (dish) => {
    return { type: ADD_DISH_TO_ORDER, dish }
}

export const clearOrder = () => {
    return { type: CLEAR_ORDER }
}

export const setDishNumber = (id, number) => {
    return { type: SET_DISH_NUMBER, id, number}
}

export const toggleFetching = (isFetching) => {
    return { type: TOGGLE_FETCHING, isFetching }
}

export const deleteOrderItem = (id) => {
    return { type: DELETE_ORDER_ITEM, id}
}
// export const getSoupDishes = () => async (dispatch) => {
//     dispatch(toggleFetching(true))
//     let response = await MenuApi.getSoupDishes()
//     dispatch(setSoupDishes(response.data))
//     dispatch(toggleFetching(false))
//     console.log(response)
// }
//
// export const getDrinksDishes = () => async (dispatch) => {
//     dispatch(toggleFetching(true))
//     let response = await MenuApi.getDrinksDishes()
//     dispatch(setDrinks(response.data))
//     dispatch(toggleFetching(false))
//     console.log(response)
// }

export const getAllDishes = () => async (dispatch) => {
    dispatch(toggleFetching(true))
    let response = await MenuApi.getSoupDishes()
    dispatch(setSoupDishes(response.data))
    console.log(response)
    response = await MenuApi.getDrinksDishes()
    dispatch(setDrinks(response.data))
    dispatch(toggleFetching(false))
    console.log(response)
}

export const createOrder = (order) => async (dispatch) => {
    let response = await MenuApi.sendOrder(order)
    dispatch(sendOrderAC())
    console.log(response)
}

export const createNewDish = (newDish) => async () => {
    console.log(newDish)

    if (newDish.dishName.length !== 0) {
        let response = await MenuApi.sendNewDish(newDish)
        console.log(response)
    }
}

export const deleteDish = (id, category) => async() => {
    let response = null

    if (category === "soupDishes") {
        response = await MenuApi.deleteSoupDish(id)
    }else {
        response = await MenuApi.deleteDrinkDish(id)
    }

    console.log(response)
}

export const setSearchedDishes = (searchReq) => {
    console.log("Reducer: ", searchReq)
    return {type: SET_SEARCHED_DISHES, searchReq}
}

export default menuReducer
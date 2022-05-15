import {MenuApi} from "../API/api";

const GET_SOUP_DISHES = "GET_SOUP_DISHES"
const GET_DRINKS = "GET_DRINKS"
const ADD_DISH_TO_ORDER = "ADD_DISH_TO_ORDER"
const SEND_ORDER = "SEND_ORDER"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const CLEAR_ORDER = "CLEAR_ORDER"
const SET_DISH_NUMBER = "SET_DISH_NUMBER"

let initialState = {
    soups: [],
    drinks: [],
    currentOrder: [],
    isFetching: false
}

let menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SOUP_DISHES:
            return {...state, soups: action.soupDishes}
        case GET_DRINKS:
            return {...state, drinks: action.drinks}
        case ADD_DISH_TO_ORDER:
            return {...state, currentOrder: [...state.currentOrder, {...action.dish, number: 1}]}
        case SEND_ORDER:
            return {...state, currentOrder: []}
        case CLEAR_ORDER:
            return {...state, currentOrder: []}
        case SET_DISH_NUMBER:
            let newCurrentOrder = state.currentOrder.map((order) => {
                if (order.id === action.id) {
                    order.number = action.number
                }
            })

            return {...state, currentOrder: [...newCurrentOrder]}
            return {...state, currentOrder: [...newCurrentOrder]}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
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

export const getSoupDishes = () => async (dispatch) => {
    dispatch(toggleFetching(true))
    let response = await MenuApi.getSoupDishes()
    dispatch(setSoupDishes(response.data))
    dispatch(toggleFetching(false))
    console.log(response)
}

export const getDrinksDishes = () => async (dispatch) => {
    dispatch(toggleFetching(true))
    let response = await MenuApi.getDrinksDishes()
    dispatch(setDrinks(response.data))
    dispatch(toggleFetching(false))
    console.log(response)
}

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

export default menuReducer
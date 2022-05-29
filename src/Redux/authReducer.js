import {AuthApi} from "../API/api";

const SET_USERNAME = "SET_USERNAME"
const CLEAR_USERNAME = "CLEAR_USERNAME"
const SET_ERROR = "SET_ERROR"


let initialState = {
    username: null,
    errorMessage: null
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {...state, username: action.username}
        case CLEAR_USERNAME:
            return {...state, username: null}
        case SET_ERROR:
            return {...state, errorMessage: action.errorMessage}
        default:
            return state
    }
}

const setUsername = (username) => {
    return { type: SET_USERNAME, username}
}

export const clearUsername = () => {
    return { type: CLEAR_USERNAME }
}

export const setErrorMessage = (errorMessage) => {
    return { type: SET_ERROR, errorMessage}
}

export const sendLoginData = (username, password) => async (dispatch) => {
    let response = await AuthApi.logIn(username, password)

    console.log(response)

    if (response.data.statusCode === 200) {
        dispatch(setUsername(response.data.userObject.username))
        dispatch(setErrorMessage(null))
        console.log(response)
    }else if (response.data.statusCode !== 200) {
        dispatch(setErrorMessage(response.data.message))
    }
}

export default authReducer
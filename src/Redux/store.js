import {applyMiddleware, combineReducers, createStore} from "redux";
import menuReducer from "./menuReducer";
import ordersReducer from "./ordersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";


let reducers = combineReducers({
    menuPage: menuReducer,
    ordersPage: ordersReducer,
    authPage: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store
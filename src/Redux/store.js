import {applyMiddleware, combineReducers, createStore} from "redux";
import menuReducer from "./menuReducer";
import ordersReducer from "./ordersReducer";
import thunkMiddleWare from "redux-thunk";


let reducers = combineReducers({
    menuPage: menuReducer,
    ordersPage: ordersReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store
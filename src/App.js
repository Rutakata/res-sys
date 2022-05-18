import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/store";
import MenuContainer from "./Components/Menu/MenuContainer";
import OrdersListContainer from "./Components/Orders/OrdersListContainer";
import Login from "./Components/Authorization/Login"


let App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<MenuContainer/>} />
                <Route path="/menu" element={<MenuContainer/>}/>
                <Route path="/ordersList" element={<OrdersListContainer/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

let AppContainer = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default AppContainer;

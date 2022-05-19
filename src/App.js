import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/store";
import MenuContainer from "./Components/Menu/MenuContainer";
import OrdersListContainer from "./Components/Orders/OrdersListContainer";
import LoginContainer from "./Components/Authorization/LoginContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


let App = () => {
    return (
        <div>
            <HeaderContainer />
            <Routes>
                <Route path="/" element={<LoginContainer/>} />
                <Route path="/menu" element={<MenuContainer/>}/>: null
                <Route path="/ordersList" element={<OrdersListContainer/>}/>
                <Route path="/login" element={<LoginContainer/>}/>
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

import './App.css';
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import OrdersList from "./Components/Orders/OrdersList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/store";
import MenuContainer from "./Components/Menu/MenuContainer";
import OrdersListContainer from "./Components/Orders/OrdersListContainer";


let App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<OrdersList/>} />
                <Route path="/menu" element={<MenuContainer/>}/>
                <Route path="/ordersList" element={<OrdersListContainer/>}/>
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

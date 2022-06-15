import React, {useEffect} from "react";
import OrdersList from "./OrdersList";
import {getOrdersInProgress, getReadyOrders} from "../../Redux/ordersSelectors";
import {connect} from "react-redux";
import {getOrdersList, setOrderReady, sendOrderToPayment} from "../../Redux/ordersReducer";
import {getUsername} from "../../Redux/authSelectors";

const OrdersListContainer = (props) => {
    useEffect(() => {
        const requesting = setInterval(() => {props.getOrdersList()}, 1000)
        return () => clearInterval(requesting)
    })
    // useEffect(() => {
    //     props.getOrdersList()
    // }, [JSON.stringify(props.readyOrders), JSON.stringify(props.ordersInProgress)])

    let currentCategory
    props.username === "waiter" ? currentCategory = "readyOrders": currentCategory = "ordersInProgress"

    return <OrdersList readyOrders={props.readyOrders} ordersInProgress={props.ordersInProgress}
                       setOrderReady={props.setOrderReady} username={props.username} currentCategory={currentCategory}
                       sendOrderToPayment={props.sendOrderToPayment} getOrderdReady={props.getOrdersList}/>
}

let mapStateToProps = (state) => ({
    readyOrders: getReadyOrders(state),
    ordersInProgress: getOrdersInProgress(state),
    username: getUsername(state)
})

export default connect(mapStateToProps, {getOrdersList, setOrderReady, sendOrderToPayment})(OrdersListContainer)
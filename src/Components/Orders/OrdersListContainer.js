import React, {useEffect} from "react";
import OrdersList from "./OrdersList";
import {getOrdersInProgress, getReadyOrders} from "../../Redux/ordersSelectors";
import {connect} from "react-redux";
import {getOrdersList, setOrderReady} from "../../Redux/ordersReducer";

const OrdersListContainer = (props) => {
    useEffect(() => {
        const requesting = setInterval(() => {props.getOrdersList()}, 1000)
        return () => clearInterval(requesting)
    })

    return <OrdersList readyOrders={props.readyOrders} ordersInProgress={props.ordersInProgress}
                       setOrderReady={props.setOrderReady}/>
}

let mapStateToProps = (state) => ({
    readyOrders: getReadyOrders(state),
    ordersInProgress: getOrdersInProgress(state)
})

export default connect(mapStateToProps, {getOrdersList, setOrderReady})(OrdersListContainer)
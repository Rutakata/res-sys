import React, {useEffect} from "react";
import OrdersList from "./OrdersList";
import {getOrdersInProgress, getReadyOrders} from "../../Redux/ordersSelectors";
import {connect} from "react-redux";
import {getOrdersList, changeOrderState} from "../../Redux/ordersReducer";

const OrdersListContainer = (props) => {
    useEffect(() => {
        props.getOrdersList()
    },[])

    return <OrdersList readyOrders={props.readyOrders} ordersInProgress={props.ordersInProgress}
                       setOrderReady={props.changeOrderState}/>
}

let mapStateToProps = (state) => ({
    readyOrders: getReadyOrders(state),
    ordersInProgress: getOrdersInProgress(state)
})

export default connect(mapStateToProps, {getOrdersList, changeOrderState})(OrdersListContainer)
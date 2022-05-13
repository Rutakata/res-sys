import React from "react";
import OrderItem from "./OrderItem";


const OrdersReady = (props) => {
    return (
        <div>
            {props.readyOrders.map(order => (<OrderItem order={order}/>))}
        </div>
    )
}

export default OrdersReady
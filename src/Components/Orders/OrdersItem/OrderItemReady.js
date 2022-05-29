import React from "react";
import style from "./OrderItemReady.module.css"


const OrderItemReady = (props) => {
    return <div className={style.order}>
        <div className={style.orderContent}>{props.order.orderContent.map(el => (<div>
            <h3>{el.dishName}</h3>
            <label>{el.number} шт.</label>
        </div>))}
        </div>
        <div className={style.tableNumber}>Стіл №{props.order.orderTable}</div>
        <div className={style.buttonWrapper}>
            <a onClick={() => {
                console.log(props.order._id)
                props.sendOrderToPayment(props.order, props.order._id)}} className={style.setReadyButton}>Видано</a>
        </div>

    </div>
}

export default OrderItemReady
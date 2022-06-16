import React from "react";
import style from "./OrderItem.module.css"


const OrderItemReady = (props) => {
    return <div className={style.order}>
        <div>{props.order.orderContent.map(el => (
            <div className={style.orderContent__item}>
                <h3>{el.dishName}</h3>
                <label>{el.number} шт.</label>
            </div>))}
        </div>
        <div className={style.tableNumber}>Стіл №{props.order.orderTable}</div>
        <div className={style.buttonWrapper}>
            <a onClick={ async() => {
                await props.sendOrderToPayment(props.order, props.order._id)
            }} className={style.setReadyButton}>Видано</a>
        </div>

    </div>
}

export default OrderItemReady
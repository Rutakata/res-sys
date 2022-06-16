import React from "react";
import style from "./OrderItem.module.css"


const OrderItemInProcess = (props) => {
    return <div className={style.order}>
        <div>{props.order.orderContent.map(el => (
            <div className={style.orderContent__item}>
                <h3>{el.dishName}</h3>
                <label>{el.number} шт.</label>
            </div>))}
        </div>
        <div className={style.buttonWrapper}>
            <a onClick={ async()=> {
                await props.setOrderReady(props.order._id)
            }} className={style.setReadyButton}>Готово</a>
        </div>

    </div>
}

export default OrderItemInProcess
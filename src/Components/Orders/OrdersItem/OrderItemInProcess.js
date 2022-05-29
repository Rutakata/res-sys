import React from "react";
import style from "./OrderItemInProgress.module.css"


const OrderItemInProcess = (props) => {
    return <div className={style.order}>
        <div className={style.orderContent}>{props.order.orderContent.map(el => (<div>
            <h3>{el.dishName}</h3>
            <label>{el.number} шт.</label>
        </div>))}
        </div>
        <div className={style.buttonWrapper}>
            <a onClick={()=> {props.setOrderReady(props.order._id)}} className={style.setReadyButton}>Готово</a>
        </div>

    </div>
}

export default OrderItemInProcess
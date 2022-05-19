import React from "react";
import style from "./OrderItem.module.css"


const OrderItemInProcess = (props) => {
    return <div className={style.order}>
        <div className={style.orderContent}>{props.order.orderContent.map(el => (<div>
            <h3>{el.dishName}</h3>
            <label>{el.number} шт.</label>
        </div>))}
        </div>
        {props.order.isOrderReady ? null
            : <div className={style.buttonWrapper}><a onClick={()=> {props.setOrderReady({"id": props.order._id})}} className={style.setReadyButton}>Готово</a></div>}

    </div>
}

export default OrderItemInProcess
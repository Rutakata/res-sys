import React from "react";
import style from "./OrderItem.module.css"


const OrderItem = (props) => {
    return <div className={style.order}>
        <div className={style.orderContent}>{props.order.orderContent.map(el => (<div>
            <h3>{el.dishName}</h3>
            <label>{el.dishPrice} - {el.number}</label>
        </div>))}
        </div>
        <div className={style.orderInfo}>{props.order.id}</div>
        {props.order.isOrderReady ? null
            : <div><a onClick={()=> {props.setOrderReady(props.order.id)}} className={style.setReadyButton}>Готово</a></div>}

    </div>
}

export default OrderItem
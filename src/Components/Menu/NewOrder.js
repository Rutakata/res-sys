import React from "react";
import style from "./NewOrder.module.css"
import trashCan from "../../Assets/Images/trashcan.png"
import NewOrderItem from "./NewOrderItem";

const NewOrder = (props) => {
    return (
        <div className={style.newOrder}>
            <h3>New Order</h3>
            <div>
                {props.currentOrder.map(dish => (<NewOrderItem key={dish.id} dish={dish} currentOrder={props.currentOrder}
                                                                setDishNumber={props.setDishNumber}/>))}
            </div>
            <div className={style.orderActions}>
                <div className={style.sendOrderButton} onClick={() => {props.createOrder({"orderContent": props.currentOrder,
                                                                                            "orderDate": new Date(),
                                                                                            "isOrderReady": false})}}>Надіслати</div>
                <div className={style.clearOrder} onClick={() => {props.clearOrder()}}><img src={trashCan} className={style.trashCan} alt="Очистити"/></div>
            </div>

        </div>
    )
}

export default NewOrder
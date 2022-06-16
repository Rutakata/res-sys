import React, {useState} from "react";
import style from "./NewOrder.module.css"
import trashCan from "../../../Assets/Images/trashcan.png"
import NewOrderItem from "./NewOrderItem/NewOrderItem";


const NewOrder = (props) => {
    let [table, setTable] = useState(1)

    let handleChange = (event) => {
        setTable(event.target.value)
    }

    let orderForm = {
        "orderContent": props.currentOrder,
        "orderDate": new Date(),
        "isOrderReady": false,
        "currentOrderPrice": props.currentOrderPrice,
        "orderTable": table === "" ? 1: table
    }

    return (
        <div className={style.newOrder}>
            <h3 className={style.newOrder__header}>Нове замовлення</h3>
            <div className={style.newOrder__tableNumber}>
                Номер столу: <input type="number" min="1" max="10" value={table} onChange={handleChange}/>
            </div>
            <div className={style.newOrder__content}>
                {props.currentOrder.map(dish => (<NewOrderItem key={dish.id} dish={dish} currentOrder={props.currentOrder}
                                                                setDishNumber={props.setDishNumber} deleteOrderItem={props.deleteOrderItem}/>))}
            </div>
            <div className={style.newOrder__price}>Ціна: {props.currentOrderPrice} грн.</div>
            <div className={style.orderActions}>
                <div className={style.orderActions__sendOrderButton} onClick={() => {
                    setTable(1)
                    props.createOrder(orderForm)
                }}>Надіслати</div>
                <div className={style.orderActions__clearOrder} onClick={() => {
                    setTable(1)
                    props.clearOrder()}}>
                    <img src={trashCan} className={style.trashCan} alt="Очистити"/>
                </div>
            </div>

        </div>
    )
}

export default NewOrder
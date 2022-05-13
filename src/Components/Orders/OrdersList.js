import React, {useState} from "react";
import style from "./OrdersList.module.css"
import OrderItem from "./OrderItem";


const OrdersList = (props) => {
    let [category, setCategory] = useState(props.ordersInProgress)

    return (
        <div className={style.ordersList}>
            <h1>Orders List</h1>
            <ul>
                <li><div onClick={() => {setCategory(props.readyOrders)}} className={style.orderCategory}>Ready</div></li>
                <li><div onClick={() => {setCategory(props.ordersInProgress)}} className={style.orderCategory}>In progress</div></li>
            </ul>
            <div>
                {category.length !== 0 ? category.map(order => (<OrderItem order={order} setOrderReady={props.setOrderReady}/>))
                    : "No item"}
            </div>
        </div>
    )
}

export default OrdersList
import React, {useState} from "react";
import style from "./OrdersList.module.css"
import OrderItemInProcess from "./OrdersItem/OrderItemInProcess";
import OrderItemReady from "./OrdersItem/OrderItemReady";


const OrdersList = (props) => {
    let [category, setCategory] = useState(props.currentCategory)

    return (
        <div className={style.ordersList}>
            <div className={style.ordersNavigation}>
                {props.username === "admin" || props.username === "cook" ?
                    <div onClick={() => {setCategory('ordersInProgress')}} className={style.ordersNavigationItem}>В процесі</div>
                    : null
                }

                {props.username !== "cook" ?
                    <div onClick={() => {setCategory('readyOrders')}} className={style.ordersNavigationItem}>Готові</div>
                    :null
                }
            </div>

            {props.ordersInProgress.length === 0 && props.readyOrders.length === 0 ? <div>Loading...</div>: null}

            <div className={style.orders}>
                {category === "ordersInProgress" ? props.ordersInProgress.map(order => (<OrderItemInProcess order={order} setOrderReady={props.setOrderReady}
                                                                                                            getOrdersList={props.getOrdersList}/>)):
                                                    props.readyOrders.map(order => (<OrderItemReady order={order} sendOrderToPayment={props.sendOrderToPayment}
                                                                                                    getOrdersList={props.getOrdersList}/>))}
            </div>
        </div>
    )
}

export default OrdersList
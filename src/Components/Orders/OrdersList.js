import React, {useState} from "react";
import style from "./OrdersList.module.css"
import OrderItem from "./OrderItem";


const OrdersList = (props) => {
    let [category, setCategory] = useState('ordersInProgress')

    return (
        <div className={style.ordersList}>
            <div className={style.ordersNavigation}>
                <div onClick={() => {setCategory('readyOrders')}} activeClassName={style.activeCategory} className={style.ordersNavigationItem}>Готові</div>
                <div onClick={() => {setCategory('ordersInProgress')}} activeClassName={style.activeCategory} className={style.ordersNavigationItem}>В процесі</div>
            </div>
            {props.ordersInProgress.length === 0 ? <div>Loading...</div>: null}
            <div className={style.orders}>
                {category === "ordersInProgress" ? props.ordersInProgress.map(order => (<OrderItem order={order} setOrderReady={props.setOrderReady}/>)):
                                                    props.readyOrders.map(order => (<OrderItem order={order} setOrderReady={props.setOrderReady}/>))}
                {/*{category.length !== 0 ? category.map(order => (<OrderItem order={order} setOrderReady={props.setOrderReady}/>))*/}
                {/*    : "No item"}*/}
            </div>
        </div>
    )
}

export default OrdersList
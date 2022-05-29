import React from "react";
import style from "./MenuItem.module.css";
import borsch from "../../../Assets/Images/borsch.jpg";


const MenuItem = (props) => {
    return (
        <div className={style.menuItem}>
            <div><img className={style.image} src={borsch} alt={props.dish.dishName}/></div>
            <div className={style.info}>
                <h3>{props.dish.dishName}</h3>
                <span>Price: {props.dish.dishPrice}</span>
                <div className={style.addToOrderButton} onClick={() => {props.addDishToOrder(props.dish)}}>Add to Order</div>
            </div>
        </div>
    )
}

export default MenuItem
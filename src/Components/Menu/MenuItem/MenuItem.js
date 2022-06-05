import React from "react";
import style from "./MenuItem.module.css";
import borsch from "../../../Assets/Images/borsch.jpg";


const MenuItem = (props) => {
    return (
        <div className={style.menuItem}>
            <img className={style.menuItem__image} src={borsch} alt={props.dish.dishName}/>
            <div className={style.menuItem__info}>
                <h3 className={style.menuItem__name}>{props.dish.dishName}</h3>
                <span className={style.menuItem__price}>Price: {props.dish.dishPrice}</span>
                <div className={style.editMenuItem}>
                    <div className={style.menuItem__addToOrder} onClick={() => {props.addDishToOrder(props.dish)}}>Додати</div>
                    {props.editMode ? <div className={style.menuItem__deleteDish} onClick={() => {
                        props.setActive(true)
                        props.setDishId(props.dish._id)
                    }}>-</div>: null}
                </div>
            </div>
        </div>
    )
}

export default MenuItem
import React from "react";
import style from "../Menu.module.css";


const MenuNavigation = (props) => {
    return <div className={style.navigation}>
        <div className={style.navigation__item} onClick={() => {props.setCategory("soupDishes")}}>Супи</div>
        <div className={style.navigation__item} onClick={() => {props.setCategory("drinkDishes")}}>Напої</div>
        {props.username === "admin" ? <div className={style.navigation__popup} onClick={() => props.setActiveAddDish(true)}>Додати</div>
            :null}
        {props.username === "admin" ? <div className={style.navigation__item} onClick={() => props.setEditMode(!props.editMode)}>Видалити</div>
            :null}
    </div>
}

export default MenuNavigation
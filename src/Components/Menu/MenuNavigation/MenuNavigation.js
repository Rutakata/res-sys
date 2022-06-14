import React from "react";
import style from "./MenuNavigation.module.css";


const MenuNavigation = (props) => {
    let handleSearchChange = (event) => {
        props.setSearchRequest(event.target.value)
        props.setSearchedDishes(event.target.value)
        props.setCategory("searchedDishes")
        console.log("Navigation: ", event.target.value)
    }

    return <div className={style.navigation}>
        <div className={style.navigation__item} onClick={() => {props.setCategory("soupDishes")}}>Супи</div>
        <div className={style.navigation__item} onClick={() => {props.setCategory("drinkDishes")}}>Напої</div>
        {props.username === "admin" ? <div className={style.navigation__popup} onClick={() => props.setActiveAddDish(true)}>Додати</div>
            :null}
        {props.username === "admin" ? <div className={style.navigation__item} onClick={() => props.setEditMode(!props.editMode)}>Видалити</div>
            :null}
        <input type="text" value={props.searchRequst} onChange={handleSearchChange}
               className={style.navigation__search} placeholder="Введіть назву..."/>
    </div>
}

export default MenuNavigation
import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={style.header}>
            <NavLink to={"/menu"} className={style.headerLink}>Меню</NavLink>
            <NavLink to={"/ordersList"} className={style.headerLink}>Замовлення</NavLink>
            <NavLink to={"/payment"} className={style.headerLink}>Оплата</NavLink>
            <div className={style.login}>Увійти</div>
        </div>
    )
}

export default Header
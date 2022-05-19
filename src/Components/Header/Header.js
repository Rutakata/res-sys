import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <div className={style.headerWrapper}>
            {props.username === null ? <NavLink to={"/login"} className={style.headerLink}>Увійти</NavLink>: null}
            {props.username === "admin" ? <div className={style.headerMenu}>
                                            <NavLink to={"/menu"} className={style.headerLink}>Меню</NavLink>
                                            <NavLink to={"/ordersList"} className={style.headerLink}>Замовлення</NavLink>
                                            <NavLink to={"/payment"} className={style.headerLink}>Оплата</NavLink>
                                            <NavLink to={"/login"} className={style.headerLink}>{props.username.toUpperCase()}</NavLink>
                                          </div>: null}
            {props.username === "waiter" ? <div className={style.headerMenu}>
                                            <NavLink to={"/menu"} className={style.headerLink}>Меню</NavLink>
                                            <NavLink to={"/ordersList"} className={style.headerLink}>Замовлення</NavLink>
                                            <NavLink to={"/login"} className={style.headerLink}>{props.username.toUpperCase()}</NavLink>
                                        </div>: null}
            {props.username === "cook" ? <div className={style.headerMenu}>
                                            <NavLink to={"/ordersList"} className={style.headerLink}>Замовлення</NavLink>
                                            <NavLink to={"/login"} className={style.headerLink}>{props.username.toUpperCase()}</NavLink>
                                        </div>: null}
        </div>
    )
}

export default Header
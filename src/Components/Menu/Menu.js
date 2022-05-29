import React, {useState} from "react";
import style from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import NewOrder from "./NewOrder/NewOrder";
import AddDishPopup from "./AddDishPopup/AddDishPopup";


const Menu = (props) => {
    let [category, setCategory] = useState("soups")

    return <div className={style.menu}>
        <div className={style.menuNavigation}>
            <div className={style.menuNavigationItem} onClick={() => {setCategory("soups")}}>Супи</div>
            <div className={style.menuNavigationItem} onClick={() => {setCategory("drinks")}}>Напої</div>
            {/*<div className={style.showPopup}>Додати</div>*/}
        </div>

        {props.isFetching ? <div>Loading...</div>: null}
        <div className={style.menuSections}>
            <div className={style.menuList}>
                {category === "soups" ? props.soups.map(dish => (<MenuItem dish={dish} key={dish.id} addDishToOrder={props.addDishToOrder}/>)):
                                        props.drinks.map(dish => (<MenuItem dish={dish} key={dish.id} addDishToOrder={props.addDishToOrder}/>))}
            </div>
            <NewOrder currentOrder={props.currentOrder} createOrder={props.createOrder} clearOrder={props.clearOrder}
                                    setDishNumber={props.setDishNumber} deleteOrderItem={props.deleteOrderItem}
                                    currentOrderPrice={props.currentOrderPrice}/>
        </div>
        <AddDishPopup />

    </div>

}

export default Menu

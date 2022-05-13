import React, {useState} from "react";
import style from "./Menu.module.css";
import MenuItem from "./MenuItem";
import NewOrder from "./NewOrder";


const Menu = (props) => {
    let [category, setCategory] = useState(props.soups)

    return <div className={style.menu}>
        <div className={style.menuNavigation}>
            <div className={style.menuNavigationItem} onClick={() => {setCategory(props.soups)}}>Супи</div>
            <div className={style.menuNavigationItem} onClick={() => {setCategory(props.drinks)}}>Напої</div>
        </div>

        {props.isFetching ? <div>Loading...</div>: null}
        <div className={style.menuSections}>
            <div className={style.menuList}>
                {category.map(dish => (<MenuItem dish={dish} key={dish.id} addDishToOrder={props.addDishToOrder}/>))}
            </div>
            <NewOrder currentOrder={props.currentOrder} createOrder={props.createOrder} clearOrder={props.clearOrder}
                                    setDishNumber={props.setDishNumber}/>
        </div>

    </div>

}

export default Menu

import React, {useState} from "react";
import style from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import NewOrder from "./NewOrder/NewOrder";
import AddDishPopup from "./AddDishPopup/AddDishPopup";
import DeleteDishPopup from "./DeleteDishPopup/DeleteDishPopup";
import MenuNavigation from "./MenuNavigation/MenuNavigation";


const Menu = (props) => {
    let [category, setCategory] = useState("soupDishes")
    let [activeAddDish, setActiveAddDish] = useState(false)
    let [activeDeleteDish, setActiveDeleteDish] = useState(false)
    let [editMode, setEditMode] = useState(false)
    let [dishIdToDelete, setDishIdToDelete] = useState(null)
    let [searchRequest, setSearchRequest] = useState(null)

    return <div className={style.menu}>
        <AddDishPopup active={activeAddDish} setActive={setActiveAddDish} createNewDish={props.createNewDish}/>
        <DeleteDishPopup active={activeDeleteDish} setActive={setActiveDeleteDish} dishIdToDelete={dishIdToDelete}
                         category={category} deleteDish={props.deleteDish}/>

        <MenuNavigation setCategory={setCategory} setActiveAddDish={setActiveAddDish} setEditMode={setEditMode}
                        username={props.username} editMode={editMode} searchRequst={searchRequest}
                        setSearchRequest={setSearchRequest} setSearchedDishes={props.setSearchedDishes}/>

        {props.soups.length === 0 && props.drinks.length === 0 ? <div>Loading...</div> : null}
        <div className={style.menuBody}>
            <div className={style.categoryContent}>
                {category === "soupDishes" ?
                    props.soups.map(dish => (<MenuItem dish={dish} key={dish.id} addDishToOrder={props.addDishToOrder}
                                                       editMode={editMode} setActive={setActiveDeleteDish}
                                                       setDishId={setDishIdToDelete}/>))
                    : category === "drinkDishes" ?
                        props.drinks.map(dish => (
                            <MenuItem dish={dish} key={dish.id} addDishToOrder={props.addDishToOrder}
                                      editMode={editMode} setActive={setActiveDeleteDish}
                                      setDishId={setDishIdToDelete}/>))
                        : props.searchedDishes.length !== 0 ?
                            props.searchedDishes.map(dish => (
                                <MenuItem dish={dish} key={dish.id} addDishToOrder={props.addDishToOrder}
                                          editMode={editMode} setActive={setActiveDeleteDish}
                                          setDishId={setDishIdToDelete}/>))
                            : <div>No item found</div>
                }
            </div>

            <NewOrder currentOrder={props.currentOrder} createOrder={props.createOrder} clearOrder={props.clearOrder}
                      setDishNumber={props.setDishNumber} deleteOrderItem={props.deleteOrderItem}
                      currentOrderPrice={props.currentOrderPrice}/>
        </div>
    </div>

}

export default Menu

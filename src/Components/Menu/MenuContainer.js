import React, {useEffect} from "react";
import Menu from "./Menu";
import {connect} from "react-redux";
import {
    getAllDishes,
    addDishToOrder,
    createOrder,
    clearOrder,
    toggleFetching,
    setDishNumber,
    deleteOrderItem,
    createNewDish,
    deleteDish,
    setSearchedDishes
} from "../../Redux/menuReducer";
import {
    getSoups,
    getDrinks,
    getCurrentOrder,
    getFetchingState,
    getCurrentOrderPrice, getCurrentUser, getSearchedDishes
} from "../../Redux/menuSelectors";


const MenuContainer = (props) => {
    useEffect(() => {
        const requesting = setInterval(() => { props.getAllDishes() }, 1000)
        return () => clearInterval(requesting)
    })

    return <Menu soups={props.soups} drinks={props.drinks} addDishToOrder={props.addDishToOrder}
                 currentOrder={props.currentOrder} createOrder={props.createOrder} isFetching={props.isFetching}
                 clearOrder={props.clearOrder} setDishNumber={props.setDishNumber} deleteOrderItem={props.deleteOrderItem}
                 currentOrderPrice={props.currentOrderPrice} username={props.username} createNewDish={props.createNewDish}
                 deleteDish={props.deleteDish} searchedDishes={props.searchedDishes} setSearchedDishes={props.setSearchedDishes}/>
}

let mapStateToProps = (state) => ({
    soups: getSoups(state),
    drinks: getDrinks(state),
    currentOrder: getCurrentOrder(state),
    currentOrderPrice: getCurrentOrderPrice(state),
    isFetching: getFetchingState(state),
    username: getCurrentUser(state),
    searchedDishes: getSearchedDishes(state)
})

export default connect(mapStateToProps, {
    addDishToOrder,
    createOrder,
    clearOrder,
    toggleFetching,
    setDishNumber,
    getAllDishes,
    deleteOrderItem,
    createNewDish,
    deleteDish,
    setSearchedDishes
})(MenuContainer)


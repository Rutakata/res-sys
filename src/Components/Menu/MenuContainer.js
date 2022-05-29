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
    createNewDish
} from "../../Redux/menuReducer";
import {
    getSoups,
    getDrinks,
    getCurrentOrder,
    getFetchingState,
    getCurrentOrderPrice, getCurrentUser
} from "../../Redux/menuSelectors";


const MenuContainer = (props) => {
    useEffect(() => {
        if (props.soups.length === 0) {
            props.getAllDishes()
        }
    })

    return <Menu soups={props.soups} drinks={props.drinks} addDishToOrder={props.addDishToOrder}
                 currentOrder={props.currentOrder} createOrder={props.createOrder} isFetching={props.isFetching}
                 clearOrder={props.clearOrder} setDishNumber={props.setDishNumber} deleteOrderItem={props.deleteOrderItem}
                 currentOrderPrice={props.currentOrderPrice} username={props.username}/>
}

let mapStateToProps = (state) => ({
    soups: getSoups(state),
    drinks: getDrinks(state),
    currentOrder: getCurrentOrder(state),
    currentOrderPrice: getCurrentOrderPrice(state),
    isFetching: getFetchingState(state),
    username: getCurrentUser(state)
})

export default connect(mapStateToProps, {
    addDishToOrder,
    createOrder,
    clearOrder,
    toggleFetching,
    setDishNumber,
    getAllDishes,
    deleteOrderItem
})(MenuContainer)


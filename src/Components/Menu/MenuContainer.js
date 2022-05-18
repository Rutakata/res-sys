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
    deleteOrderItem
} from "../../Redux/menuReducer";
import {getSoups, getDrinks, getCurrentOrder, getFetchingState} from "../../Redux/menuSelectors";


const MenuContainer = (props) => {
    useEffect(() => {
        if (props.soups.length === 0) {
            props.getAllDishes()
        }
    })

    return <Menu soups={props.soups} drinks={props.drinks} addDishToOrder={props.addDishToOrder}
                 currentOrder={props.currentOrder} createOrder={props.createOrder} isFetching={props.isFetching}
                 clearOrder={props.clearOrder} setDishNumber={props.setDishNumber} deleteOrderItem={props.deleteOrderItem}/>
}

let mapStateToProps = (state) => ({
    soups: getSoups(state),
    drinks: getDrinks(state),
    currentOrder: getCurrentOrder(state),
    isFetching: getFetchingState(state)
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


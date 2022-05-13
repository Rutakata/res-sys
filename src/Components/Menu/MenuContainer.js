import React, {useEffect} from "react";
import Menu from "./Menu";
import {connect} from "react-redux";
import {getSoupDishes, getDrinksDishes, addDishToOrder, createOrder, clearOrder, toggleFetching, setDishNumber} from "../../Redux/menuReducer";
import {getSoups, getDrinks, getCurrentOrder, getFetchingState} from "../../Redux/menuSelectors";


const MenuContainer = (props) => {
    useEffect(() => {
        if (props.soups.length === 0) {
            props.getSoupDishes()
            props.getDrinksDishes()
        }
    })

    return <Menu soups={props.soups} drinks={props.drinks} addDishToOrder={props.addDishToOrder}
                 currentOrder={props.currentOrder} createOrder={props.createOrder} isFetching={props.isFetching}
                 clearOrder={props.clearOrder} setDishNumber={props.setDishNumber}/>
}

let mapStateToProps = (state) => ({
    soups: getSoups(state),
    drinks: getDrinks(state),
    currentOrder: getCurrentOrder(state),
    isFetching: getFetchingState(state)
})

export default connect(mapStateToProps, {getSoupDishes, getDrinksDishes, addDishToOrder, createOrder, clearOrder, toggleFetching, setDishNumber})(MenuContainer)


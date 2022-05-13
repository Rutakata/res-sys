import React, {useState} from "react";
import style from "./NewOrderItem.module.css"
import {setDishNumber} from "../../Redux/menuReducer";

const NewOrderItem = (props) => {
    let [number, setNumber] = useState(props.dish.number)

    let handleChange = (event) => {
        setNumber(event.target.value)
        setDishNumber(props.dish.id, number)
    }

    return (
        <div className={style.orderItemWrapper}>
            <h3 className={style.dishName}>{props.dish.dishName}</h3>
            <input type="number" value={number} onChange={handleChange} className={style.dishNumber}/> шт.
        </div>
    )
}

export default NewOrderItem
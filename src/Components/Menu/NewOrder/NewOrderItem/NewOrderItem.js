import React, {useState} from "react";
import style from "./NewOrderItem.module.css"

const NewOrderItem = (props) => {
    let [number, setNumber] = useState(props.dish.number)

    let handleChange = (event) => {
        setNumber(event.target.value)
        props.setDishNumber(props.dish._id, Number(event.target.value))
        console.log(number)
    }

    return (
        <div className={style.orderItemWrapper}>
            <h3 className={style.dishName}>{props.dish.dishName}</h3>
            <input type="number" value={number} min="1" max="20" onChange={handleChange} className={style.dishNumber}/>
            <button onClick={() => {props.deleteOrderItem(props.dish._id)}} className={style.deleteItemButton}>X</button>
        </div>
    )
}

export default NewOrderItem
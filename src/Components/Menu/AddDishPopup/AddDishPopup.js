import React, {useState} from "react";
import style from "./AddDishPopup.module.css"

const AddDishPopup = ({active, setActive, createNewDish}) => {
    let [dishParameters, setDishParameters] = useState({
        dishName: "",
        dishCategory: "soupDishes",
        dishPrice: 0
    })

    let handleNameChange = (event) => {
        setDishParameters({...dishParameters, dishName: event.target.value})
    }
    let handlePriceChange = (event) => {
        setDishParameters({...dishParameters, dishPrice: Number(event.target.value)})
    }

    return <div className={active ? style.popupWrapper + " " + style.active: style.popupWrapper} onClick={() => setActive(false)}>
        <div className={style.popupBody} onClick={e => e.stopPropagation()}>
            <h2 className={style.popupHeader}>Додати страву</h2>
            <div className={style.dishOptions}>
                <span>Назва</span> <input type="text" value={dishParameters.dishName} onChange={handleNameChange}/><br/>
                <span>Категорія</span> <select>
                    <option>Суп</option>
                    <option>Напій</option>
                </select><br/>
                <span>Ціна</span> <input type="number" min="0" value={dishParameters.dishPrice} onChange={handlePriceChange}/>
            </div>
            <button onClick={() => createNewDish(dishParameters)}>Створити страву</button>
            <button onClick={() => setDishParameters({dishName: "", dishCategory: "soupDishes", dishPrice: 0})}>Видалити</button>
        </div>
    </div>
}

export default AddDishPopup


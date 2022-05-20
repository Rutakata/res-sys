import React, {useState} from "react";
import style from "./AddDishPopup.module.css"

const AddDishPopup = () => {
    let [dishParameters, setDishParameters] = useState({
        dishName: "",
        dishCategory: "",
        dishPrice: 0
    })

    let handleNameChange = (event) => {
        setDishParameters({...dishParameters, dishName: event.target.value})
        console.log(event.target.value)
    }

    return <div className={style.popupWrapper}>
        <div className={style.popupBody}>
            <h2 className={style.popupHeader}>Додати страву</h2>
            <div className={style.dishOptions}>
                <span>Назва</span> <input type="text" value={dishParameters.dishName} onChange={handleNameChange}/><br/>
                <span>Категорія</span> <select>
                    <option>Суп</option>
                    <option>Напій</option>
                </select><br/>
                <span>Ціна</span> <input type="number" min="1"/>
            </div>
            <div>Створити страву</div>
            <div>Видалити</div>
        </div>
    </div>
}

export default AddDishPopup
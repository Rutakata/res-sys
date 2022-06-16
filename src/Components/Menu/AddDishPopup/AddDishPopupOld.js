import React, {useState} from "react";
import style from "./AddDishPopup.module.css"

const AddDishPopupOld = ({active, setActive, createNewDish, getAllDishes}) => {
    let [dishParameters, setDishParameters] = useState({
        dishName: "",
        dishCategory: "soupDishes",
        dishPrice: 1
    })

    let [error, setError] = useState("")

    let handleNameChange = (event) => {
        if (event.target.value.length === 0) {
            setError("Назва страви не може бути пустою")
            setDishParameters({...dishParameters, dishName: event.target.value})
        }else {
            setError(null)
            setDishParameters({...dishParameters, dishName: event.target.value})
        }

    }
    let handlePriceChange = (event) => {
        setDishParameters({...dishParameters, dishPrice: Number(event.target.value)})
    }
    let handleCategoryChange = (event) => {
        setDishParameters({...dishParameters, dishCategory: event.target.value})
    }
    let sendForm = async (dishParameters) => {
        if (dishParameters.dishName.length === 0) {
            setError("Назва страви не може бути пустою")
        }else {
            setError(null)
            await createNewDish(dishParameters)
            getAllDishes()
            setActive(false)
            clearForm()
        }
    }
    let clearForm = () => {
        setError(null)
        setDishParameters({dishName: "", dishCategory: "soupDishes", dishPrice: 1})
    }

    return <div className={active ? style.popupWrapper + " " + style.active: style.popupWrapper} onClick={() => setActive(false)}>
        <div className={style.popupBody} onClick={e => e.stopPropagation()}>
            <h2 className={style.popupBody__header}>Додати страву</h2>
            <div className={style.dishOptions}>
                <span className={style.dishOptions__fieldName}>Назва</span>
                <input type="text" value={dishParameters.dishName} onChange={handleNameChange} className={style.dishOptions__input}/>

                <span className={style.dishOptions__fieldName}>Категорія</span>
                <select defaultValue={dishParameters.dishCategory} onChange={handleCategoryChange} className={style.dishOptions__select}>
                    <option value="soupDishes">Суп</option>
                    <option value="drinkDishes"> Напій</option>
                </select>

                <span className={style.dishOptions__fieldName}>Ціна</span>
                <input type="number" min="1" max="1000" value={dishParameters.dishPrice} onChange={handlePriceChange} className={style.dishOptions__input}/>
            </div>

            <div className={style.popupBody__error}>{error}</div>

            <div className={style.buttonsWrapper}>
                <button onClick={() => sendForm(dishParameters)} className={style.buttonsWrapper__createButton}>Створити страву</button>
                <button onClick={() => clearForm()} className={style.buttonsWrapper__clearButton}>Очистити</button>
            </div>

        </div>
    </div>
}

export default AddDishPopupOld


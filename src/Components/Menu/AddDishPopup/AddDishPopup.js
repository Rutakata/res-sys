import React from "react";
import {useForm} from "react-hook-form";
import style from "./AddDishPopup.module.css";


const AddDishPopup = ({active, setActive, createNewDish, getAllDishes}) => {
    let {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" })

    let onSubmit = async (formData) => {
        await createNewDish(formData)
        getAllDishes()
        setActive(false)
        reset()
    }

    return <div className={active ? style.popupWrapper + " " + style.active: style.popupWrapper} onClick={() => setActive(false)}>
        <div className={style.popupBody} onClick={e => e.stopPropagation()}>
            <h2 className={style.popupBody__header}>Додати страву</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.dishOptions}>
                    <label className={style.dishOptions__field}>
                        Назва
                        <input {...register("dishName", {
                            required: "Назва страви обов'язкова",
                            minLength: {
                                value: 4,
                                message: "Назва страви має бути більше 3 символів"
                            },
                            maxLength: {
                                value: 20,
                                message: "Назва страви має бути менше 21 символа"
                            }
                        })} className={style.dishOptions__input}/>

                        <div className={style.popupBody__error}>{errors?.dishName && errors?.dishName?.message}</div>
                    </label>

                    <label className={style.dishOptions__field}>
                        Категорія
                        <select {...register("dishCategory")} className={style.dishOptions__select}>
                            <option value="soupDishes">Суп</option>
                            <option value="drinkDishes"> Напій</option>
                        </select>
                    </label>

                    <label className={style.dishOptions__field}>
                        Ціна
                        <input type="number" {...register("dishPrice", {
                            required: "Ціна страви обов'язкова",
                            min: {
                                value: 10,
                                message: "Ціна страви мінімум 10 гривень"
                            },
                            max: {
                                value: 1000,
                                message: "Ціна страви максимум 1000 гривень"
                            }
                        })} className={style.dishOptions__input}/>

                        <div className={style.popupBody__error}>{errors?.dishPrice && errors?.dishPrice?.message}</div>
                    </label>
                </div>

                <div className={style.buttonsWrapper}>
                    <button type="submit" disabled={!isValid} className={style.buttonsWrapper__createButton}>Створити страву</button>
                    <button onClick={() => {
                        reset({},{
                            keepErrors: false
                        })
                    }} className={style.buttonsWrapper__clearButton}>Очистити</button>
                </div>
            </form>
        </div>
    </div>
}

export default AddDishPopup
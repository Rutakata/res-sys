import React from "react";
import style from "./DeleteDishPopup.module.css"


const DeleteDishPopup = (props) => {
    return <div className={props.active ? style.popupWrapper + " " + style.active: style.popupWrapper} onClick={() => props.setActive(false)}>
        <div className={style.popupBody} onClick={e => e.stopPropagation()}>
            <h3 className={style.popupBody__header}>Точно видалити страву?</h3>
            <div className={style.choice}>
                <div className={style.choice__delete} onClick={() => {
                    props.deleteDish(props.dishIdToDelete, props.category)
                    props.setActive(false)
                }}>Так</div>
                <div className={style.choice__leave} onClick={() => props.setActive(false)}>Ні</div>
            </div>
        </div>
    </div>
}

export default DeleteDishPopup
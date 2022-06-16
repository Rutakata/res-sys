import React from "react";
import style from "./Login.module.css"
import {useForm} from "react-hook-form";


const Login = (props) => {
    let {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" })

    let onSubmit = ({username, password}) => {
        props.sendLoginData(username, password)
        reset()
    }

    return <div className={style.loginWrapper}>
        {props.username !== null ? <h2 className={style.loginWrapper__header}>Ви знаходитесь в профілі: {props.username}</h2> : null}
        {props.username !== null ? <button onClick={() => {props.clearUsername()}} className={style.loginWrapper__logoutButton}>Вийти</button> : null}
        {props.username === null ?
            <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <span className={style.loginForm__fieldName}>Ім'я користувача</span>
                <input {...register("username", {
                    required: "Це поле обов'язкове",
                    minLength: {
                        value: 4,
                        message: "Мінімальна довжина імені користувача 4 символи"
                    },
                    maxLength: {
                        value: 21,
                        message: "Максимальна довжина імені користувача 20 символ"
                    }
                })} className={style.loginForm__field}/>
                <div className={style.loginForm__error}>{errors?.username && errors?.username?.message}</div>
                <span className={style.loginForm__fieldName}>Пароль</span>
                <input type="password" {...register("password", {
                    required: "Це поле обов'язкове",
                    minLength: {
                        value: 4,
                        message: "Мінімальна довжина паролю 4 символи"
                    },
                    maxLength: {
                        value: 21,
                        message: "Максимальна довжина паролю 20 символ"
                    }
                })} className={style.loginForm__field}/>
                <div className={style.loginForm__error}>{errors?.password && errors?.password?.message}</div>
                <span className={style.loginForm__error}>{props.errorMessage}</span>
                <button type="submit" className={style.loginForm__submitButton}>Увійти</button>
            </form>: null
        }
    </div>
}

export default Login
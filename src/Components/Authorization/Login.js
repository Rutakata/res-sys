import React, {useState} from "react";
import style from "./Login.module.css"
import bcrypt from "bcryptjs"


const Login = (props) => {
    let [user, setUser] = useState({"username": "", "password": ""})

    let handleUsername = (event) => {
        setUser({...user, "username": event.target.value})
        console.log(event.target.value)
    }

    let handlePassword = (event) => {
        setUser({...user, "password": event.target.value})
        console.log(event.target.value)
    }

    return <div className={style.loginWrapper}>
        <h2>Ви знаходитесь в профілі: {props.username}</h2>
        {props.username !== null ? <button onClick={() => { props.clearUsername() }} className={style.logout}>Вийти</button> :
            <div className={style.loginForm}>
                <span>Ім'я користувача</span><input type="text" value={user.username} onChange={handleUsername} className={style.loginField}/>
                <span>Пароль</span><input type="password" value={user.password} onChange={handlePassword} className={style.loginField}/>
                <span className={style.errorField}>{props.errorMessage}</span>
                <button onClick={() => {props.sendLoginData(user.username, user.password)}} className={style.submitButton}>Увійти</button>
            </div>
        }
    </div>
}

export default Login
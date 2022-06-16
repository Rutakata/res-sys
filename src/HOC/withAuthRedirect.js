import React from "react";
import {Navigate} from "react-router";
import {getIsAuth} from "../Redux/authSelectors";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

const withAuthRedirect = (Component) => {
    const RedirectContainer = (props) => {
        if (!props.isAuth) return <Navigate to="/login" replace={true} />
        return <Component {...props}/>
    }

    return connect(mapStateToProps)(RedirectContainer)
}

export default withAuthRedirect
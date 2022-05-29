import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {sendLoginData, clearUsername} from "../../Redux/authReducer";
import {getErrorMessage, getUsername} from "../../Redux/authSelectors";


const LoginContainer = (props) => {
    return <Login sendLoginData={props.sendLoginData} username={props.username} clearUsername={props.clearUsername}
                  errorMessage={props.errorMessage}/>
}

let mapStateToProps = (state) =>({
    username: getUsername(state),
    errorMessage: getErrorMessage(state)
})

export default connect(mapStateToProps, { sendLoginData, clearUsername })(LoginContainer)
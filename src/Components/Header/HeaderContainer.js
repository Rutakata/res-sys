import React from "react";
import Header from "./Header";
import {getUsername} from "../../Redux/authSelectors";
import {connect} from "react-redux";


const HeaderContainer = (props) => {
    return <Header username={props.username}/>
}

let mapStateToProps = (state) => ({
    username: getUsername(state)
})

export default connect(mapStateToProps, {})(HeaderContainer)
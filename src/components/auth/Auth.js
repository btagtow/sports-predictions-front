
import React, { useState } from 'react';
import {connect} from 'react-redux'
import LoginForm from './forms/LoginForm'
import SignupForm from './forms/SignupForm'

function Auth(props) {
    const [isShown, setIsShown] = useState(false);
    const [isLoginShown, setisLoginShown] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleShown = () => !isLoggedIn ? setIsShown(!isShown) : logout()

    const toggleLogin = () => setisLoginShown(!isLoginShown)

    const toggleIsLoggedIn = () => {
        setIsLoggedIn(true)
    }

    const logout = () => {
        props.logout()
        localStorage.clear()
        setIsLoggedIn(false)
        setIsShown(false)
    }

    const pointer = (event) => {
        return event.target.style.cursor = "pointer"
    }

    return (
    <div 
        className="dropdown"         
    >
        <button className="dropdown-button clickable" onClick={!props.isLoggedIn ? toggleShown : logout} onMouseOver={event => pointer(event)} >
        {props.isLoggedIn ? `Log out (${props.user.username})` : "Login or create account"}
        </button>
        {isShown && !props.isLoggedIn && (
            <div className="forms-container">
                {isLoginShown ? <LoginForm toggleIsLoggedIn={toggleIsLoggedIn} setUserProfile={props.setUserProfile}/> : <SignupForm setisLoginShown={setisLoginShown}/>}
                <button className="auth-button" onClick={toggleLogin}>{isLoginShown ? "Create an account" : "Already have an account?"}</button>
            </div>
        )}
    </div>
    );
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        logout: () => dispatch({type: "LOG_OFF"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

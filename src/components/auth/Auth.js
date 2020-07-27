
import React, { useState } from 'react';
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
        return props.toggleLoggedin(true)
    }

    const logout = () => {
        localStorage.clear()
        setIsLoggedIn(false)
        setIsShown(false)
        props.resetProfile()
        props.toggleLoggedin(false)
    }

    const pointer = (event) => {
        return event.target.style.cursor = "pointer"
    }

    return (
    <div 
        className="dropdown"         
    >
        <button className="dropdown-button" onClick={toggleShown} onMouseOver={event => pointer(event)} >
        {isLoggedIn ? `Log out (${props.username})` : "Login or create account"}
        </button>
        {isShown && !isLoggedIn && (
            <div className="forms-container">
                {isLoginShown ? <LoginForm toggleIsLoggedIn={toggleIsLoggedIn} setUserProfile={props.setUserProfile}/> : <SignupForm setisLoginShown={setisLoginShown}/>}
                <button onClick={toggleLogin}>{isLoginShown ? "Create an account" : "Already have an account?"}</button>
            </div>
        )}
    </div>
    );
}

export default Auth;





import React, { useState } from 'react';
import LoginForm from './forms/LoginForm'
import SignupForm from './forms/SignupForm'

function Auth({toggleLogin, toggleSignup}) {
    const [isShown, setIsShown] = useState(false);

    const toggleShown = () => setIsShown(!isShown)

    const pointer = (event) => {
        return event.target.style.cursor = "pointer"
    }

    return (
    <div 
        className="dropdown"         
    >
        <button className="dropdown-button" onClick={toggleShown} onMouseOver={event => pointer(event)} >
        Login or create account
        </button>
        {isShown && (
            <div>
                <LoginForm />
                <SignupForm />
            </div>
        )}
    </div>
    );
}

export default Auth;




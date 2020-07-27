import React, {useState} from 'react'

export default function UserProfileButton(props) {

    const { toggleMainContainer, isProfile } = props

    const handleClick = () => {
        toggleMainContainer()
    }

    return (
        <div className="dropdown">
            
            <button className="dropdown-button" onClick={handleClick}>
                {!isProfile ? "Profile" : "Games"}
                
            </button>
        </div>
    )
}

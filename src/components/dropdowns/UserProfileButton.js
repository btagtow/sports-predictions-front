import React from 'react'

export default function UserProfileButton(props) {

    const { toggleMainContainer, isProfile, refreshUserProfile } = props

    const handleClick = () => {
        toggleMainContainer()
        refreshUserProfile()
    }

    return (
        <div className="dropdown">
            
            <button className="dropdown-button" id="profile-button" onClick={handleClick}>
                {!isProfile ? "Profile" : "Games"}
                
            </button>
        </div>
    )
}

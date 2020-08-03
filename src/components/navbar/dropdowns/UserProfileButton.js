import React from 'react'

import { connect } from 'react-redux'

import { showProfile } from '../../actions/mainDisplay'

function UserProfileButton(props) {

    const handleClick = () => {
        props.profileOn()
        // aboutOff()
    }

    return (
        <div className="dropdown">
            
            <button className="dropdown-button clickable" onClick={handleClick}>
                Profile
            </button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        profileOn: () => showProfile(dispatch)
    }
}
export default connect(null, mapDispatchToProps)(UserProfileButton)
import React from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { showProfile } from '../../actions/mainDisplay'

function UserProfileButton(props) {

    const handleClick = () => {
        props.profileOn()
        // aboutOff()
    }

    return (
        <div className="dropdown">
            
            <Link to='/profile'>
                <button className="dropdown-button clickable" onClick={handleClick}>
                    Profile
                </button>
            </Link>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        profileOn: () => showProfile(dispatch)
    }
}
export default connect(null, mapDispatchToProps)(UserProfileButton)
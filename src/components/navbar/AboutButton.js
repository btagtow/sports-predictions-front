import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { showAbout } from '../../actions/mainDisplay'

function AboutButton(props) {

    return (
        <div>
            <Link to="/about">
                <button className="dropdown-button clickable" onClick={() => props.aboutOn()}>About
                </button>
            </Link>
        </div>
    )
}
    

function mapDispatchToProps(dispatch){
    return{
        aboutOn: () => showAbout(dispatch)
    }
}
export default connect(null, mapDispatchToProps)(AboutButton)
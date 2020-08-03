import React from 'react'
import { connect } from 'react-redux'

import { showAbout } from '../../actions/mainDisplay'

function AboutButton(props) {

    return (
        <div>
            <button className="dropdown-button clickable" onClick={() => props.aboutOn()}>About</button>
        </div>
    )
}
    

function mapDispatchToProps(dispatch){
    return{
        aboutOn: () => showAbout(dispatch)
    }
}
export default connect(null, mapDispatchToProps)(AboutButton)
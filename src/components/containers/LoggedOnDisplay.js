import React from 'react'
import { connect } from 'react-redux'

function LoggedOnDisplay(props) {
    return (
        <div>
        
            <h4>Your available betting points: {props.user.betting_points}</h4>
            
        </div>
    )
}

function mapStateToProps(state){
    return {
        user: state.user, 
    }
}

export default connect(mapStateToProps, null)(LoggedOnDisplay)
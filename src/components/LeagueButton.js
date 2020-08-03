import React from 'react'
import { connect } from 'react-redux'

import { showGames } from '../actions/mainDisplay'

function LeagueButton(props) { 
    const { id, name, emoji, league, handleChange } = props

    function handleClick(){
        props.gamesOn()
        league.selected = true
        return handleChange(league)
    }
    
        return (

            <div className="button-div">
                <button className="drop-button" id={id} key={id} onClick={handleClick}> 
                    {name}
                    <span role="img" aria-label={name}>  {emoji}</span>
                </button>
            </div>
        )
    
}

function mapDispatchToProps(dispatch){
    return{
        gamesOn: () => showGames(dispatch)
    }
}
export default connect(null, mapDispatchToProps)(LeagueButton)
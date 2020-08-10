import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
    selectNFL, 
    selectEPL, 
    selectMLB, 
    selectNBA, 
    selectNHL,
   } from '../../../redux/actions/leagues'
  

import { showGames } from '../../../redux/actions/mainDisplay'

function LeagueButton(props) { 
    const { id, name, emoji, select } = props

    function handleClick(){
        props.gamesOn()
        select()
    }
    
    return (

        <div className="button-div">
            <Link to="/games">
                <button className="drop-button" id={id} key={id} onClick={handleClick}> 
                    {name}
                    <span role="img" aria-label={name}>  {emoji}</span>
                </button>
            </Link>
        </div>
    )
    
}

function mapDispatchToProps(dispatch){
    return{
        gamesOn: () => showGames(dispatch),
        selectNFL: () => dispatch(selectNFL()),
        selectNBA: () => dispatch(selectNBA()),
        selectNHL: () => dispatch(selectNHL()),
        selectEPL: () => dispatch(selectEPL()),
        selectMLB: () => dispatch(selectMLB()),
    }
}
export default connect(null, mapDispatchToProps)(LeagueButton)
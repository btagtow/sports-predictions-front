import React from 'react'

export default function LeagueButton({ games, id, name, emoji, league, handleChange }) { 

    function handleClick(){
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

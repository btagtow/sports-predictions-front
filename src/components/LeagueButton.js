import React from 'react'

export default function LeagueButton({ id, name, emoji, league, handleChange, resetProfile }) { 

    function handleClick(){
        league.selected = true
        resetProfile()
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

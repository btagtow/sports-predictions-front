import React from 'react'
import LeagueButtons from './LeagueButtons'

function SportSelector ({leagues}){
    return (
        <div className="upcoming-games-container">
            <LeagueButtons leagues={leagues} />
        </div>
    )
    
}

export default SportSelector
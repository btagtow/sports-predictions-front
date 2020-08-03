import React from 'react'
import LeagueButton from'./LeagueButton'

export default function LeagueButtons (props) {
    const leagues = props.leagues
    const switchLeagues = (league) => props.switchLeague(league.id)


    const showButtons = leagues.map(league=> {
        return (
            <LeagueButton games={league.games} id={league.id} key={league.id} name={league.name} emoji={league.emoji} handleChange={switchLeagues} league={league} resetProfile={props.resetProfile} aboutOff={props.aboutOff}/>
        )
    })

    return (
        <div className="league-button-container">
           {showButtons}
        </div>
    )
}
import React from 'react'

export default function GameCard(props) {
    const {game} = props

    let homeScore = game.intHomeScore
    let awayScore = game.intAwayScore

    const checkForScore = () => {
        const winner = () => {
            if (homeScore !== awayScore) {
                
                return (
                    homeScore > awayScore ? 
                        <div className="score-card">
                            <h3><b>{game.strHomeTeam}: {homeScore}</b></h3>
                            <h4>{game.strAwayTeam}: {awayScore}</h4> 
                        </div> : 
                        <div className="score-card">
                            <h4>{game.strHomeTeam}: {homeScore}</h4>
                            <h3><b>{game.strAwayTeam}: {awayScore}</b></h3> 
                        </div>
                )
            } else {
                return(
                    <div className="score-card">
                        <p>{game.strHomeTeam}: {homeScore}</p>
                        <p>{game.strAwayTeam}: {awayScore}</p> 
                    </div>
                )
            }
            

            
        }
        if (homeScore && awayScore){
            return (
                winner()
            )
        } else {
            return(<p>Outcome will be updated soon</p>)
        }

    }

    const homeVsAway = () => {
    let eventDate = <p>{game.dateEvent} at {game.strTime}</p>
    return (
        <div className = "game-card" key={game.idEvent}>
        <h3>{game.strEventAlternate}</h3>
            {eventDate}
            {checkForScore()}
        </div>
    )
    }

    return (
        <div className="game-card-container">
            {homeVsAway()}
        </div>        
    )
}

import React from 'react'

export default function GameCard(props) {
    const {game, selectGame} = props

    function handleClick(event){
        game.selectedWinnerId = event.target.id
        game.selectedWinnerString = event.target.value
        game.points_allocated = 0
        return selectGame(game)
    }

    const homeVsAway = () => {
        let homeButton = <button className="game-button"onClick={handleClick} id={game.idHomeTeam} value={game.strHomeTeam}>{game.strHomeTeam} (home)</button>
        let awayButton = <button className="game-button" onClick={handleClick} id={game.idAwayTeam} value={game.strAwayTeam}>{game.strAwayTeam} (away)</button>
        let americanEvent = game => (parseInt(game.idLeague) === parseInt(4391 || 4424 || 4387 || 4380))
        let eventDate = <p>{game.dateEvent} at {game.strTime}</p>

        if (americanEvent(game)){
            return (
                <div className = "game-card" key={game.idEvent}>
                <h3>{game.strEventAlternate}</h3>
                    {eventDate}
                        {awayButton}
                        {homeButton}
                </div>
            )
        } else {
            return (
                <div className = "game-card" key={game.idEvent}>
                    <h3>{game.strHomeTeam} vs. {game.strAwayTeam}</h3>
                    {eventDate}                    
                        {homeButton}
                        {awayButton}
                </div>
            )

        }
    }

    return (
        <div className="game-card-container">
            {homeVsAway()}
        </div>        
    )
}

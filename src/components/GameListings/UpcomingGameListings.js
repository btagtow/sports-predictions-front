import React from 'react'
import UpcomingGameCard from '../gamecards/UpcomingGameCard'

export default function UpcomingGameListings(props) {

    const { currentLeague , selectGame } = props

    const gameList = currentLeague.upcomingGames ? currentLeague.upcomingGames : []

    const leagueName = currentLeague.name

    const upcomingGamesMessage = <h3>Upcoming {leagueName} games:</h3>
    const noUpcomingGamesMessage =  
    (<h3 className="no-games-message">Upcoming games temporarily unavailable. Please come back soon!
    </h3>)

    const games = (
        gameList.map(game => {
            return (
                <UpcomingGameCard game={game} key={game.idEvent}  selectGame= {selectGame} />
            )
        })
    )

    return (
            <div className = "card-container">
                {gameList[0] ? upcomingGamesMessage : noUpcomingGamesMessage}
                {games}
            </div>
    )
}

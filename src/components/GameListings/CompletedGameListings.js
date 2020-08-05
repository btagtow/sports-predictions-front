import React from 'react'
import CompletedGameCard from '../gamecards/CompletedGameCard'

export default function PastGameListings(props) {

    const { currentLeague , selectGame } = props

    const gameList = currentLeague.last15

    const leagueName = currentLeague.name

    const upcomingGamesMessage = <h3>Past {leagueName} games:</h3>
    const noUpcomingGamesMessage =  <h3 className="no-games-message">No {leagueName} games available on our partner's database: 
                                    <br></br> 
                                    https://www.thesportsdb.com/.
                                    <br></br> 
                                    Please try another league.
                                    </h3>

    const games = (
        gameList.map(game => {
            return (
                    <CompletedGameCard game={game} key={game.idEvent}  selectGame= {selectGame} />
            )
        })
    )

    const checkGames = gameList[0] ? upcomingGamesMessage : noUpcomingGamesMessage

    return (
            <div className = "card-container">
                {checkGames}
                {games}
            </div>
    )
}

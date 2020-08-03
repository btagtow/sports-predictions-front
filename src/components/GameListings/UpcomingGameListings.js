import React from 'react'
import UpcomingGameCard from '../cards/UpcomingGameCard'

export default function UpcomingGameListings(props) {

    const { currentLeague , selectGame } = props

    const gameList = currentLeague.next15

    const leagueName = currentLeague.name

    const upcomingGamesMessage = <h3>Upcoming {leagueName} games:</h3>
    const noUpcomingGamesMessage =  
    (<h3 className="no-games-message">No upcoming {leagueName} games available on our partner's database: 
        <br></br> 
        https://www.thesportsdb.com/.
        <br></br> 
        Please try another league.
    </h3>)

    const games = (
        gameList.map(game => {
            return (
                    <UpcomingGameCard game={game} key={game.idEvent}  selectGame= {selectGame} />
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

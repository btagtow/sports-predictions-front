import React, { useState } from 'react'
import GameCard from '../cards/GameCard'

export default function GameListings(props) {

    const { currentLeague , selectGame } = props

    const gameList = currentLeague.games

    const leagueName = currentLeague.name

    const upcomingGamesMessage = <h3>Upcoming {leagueName} games:</h3>
    const noUpcomingGamesMessage = <h3>No {leagueName} games available on our partner's database. Please try another league.</h3>

    const games = (
        gameList.map(game => {
            return (
                    <GameCard game={game} key={game.idEvent}  selectGame= {selectGame} />
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

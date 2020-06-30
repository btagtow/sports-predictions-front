import React from 'react'
import GameCard from '../cards/GameCard'

export default function GameListings(props) {
    const { currentLeague , selectGame } = props

    const gameList = currentLeague.games

    const leagueName = currentLeague.name

    const message = () => {
        if (gameList[0]) {
            return <h3>{leagueName} games:</h3>
        } else {
            return <h3>No {leagueName} games available. Please try another league.</h3>
        }
    }

    const games = (
        gameList.map(game => {
            return (
                <div>
                    <GameCard game={game} key={game.idEvent}  selectGame= {selectGame} />
                </div>
            )
        })
    )


    return (
        <div className = "card-container">
            <div>{message()}
                {games}
            </div>
        </div>
    )
}

import React from 'react'

import SelectedGameCard from '../gamecards/SelectedGameCard'

export default function SelectedGames (props) {
    const { selectedGames, submitSelectedGame, removeSelectedGame } = props

    const message = () => selectedGames[0] ? <h3>Your picks: </h3> : <h3>Make a selection</h3>

    const displayGames = () => selectedGames.map(game =>  <SelectedGameCard game={game} submitSelectedGame={submitSelectedGame} removeSelectedGame={removeSelectedGame} key={game.idEvent}/>)

        return (
            <div>
                <div className="card-container">
                    {message()}
                    {displayGames()}
                </div>
            </div>
        )
}


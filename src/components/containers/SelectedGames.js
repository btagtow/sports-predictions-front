import React from 'react'
import SelectedGame from '../cards/SelectedGameCard'

export default function SelectedGames(props) {
    const { selectedGames, removeSelectedGame } = props

    const message = (selectedGames[0]) ? <h3>Your picks: </h3> : null

    const displayGames = selectedGames.map(game => {
        return (
            <SelectedGame game={game} removeSelectedGame={removeSelectedGame}/>
        )
    })
    
    return (
        <div>{message}
            <div className="card-container">{displayGames}</div>
        </div>
    )
}


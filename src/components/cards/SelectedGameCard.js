import React from 'react'

export default function SelectedGame(props) {

    const { game, removeSelectedGame } = props

    function handleClick(){
        removeSelectedGame(game)
    } 
    return (
        <div className = "game-card" key={game.idEvent}>
                <p>{game.strEventAlternate}</p>
                <h2>Selected winner: {game.selectedWinnerString}</h2>
                <button onClick={handleClick} className="game-button">Remove Selection</button>
                <p>{game.dateEvent} at {game.strTime}</p>
        </div>   
    )
}

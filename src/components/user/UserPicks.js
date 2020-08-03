import React from 'react'

export default function SelectedGame(props) {

    const { game, deleteGame, refreshUserProfile} = props

    function handleRemove(){
        deleteGame(game)
        refreshUserProfile()
    } 
    
    console.log(game)

    return (
        <div className = "game-card" key={game.idEvent}>
                <p>{game.strEventAlternate}</p>
                <h2>Selected winner: 
                    <br></br> 
                    {game.selectedWinnerString ? game.selectedWinnerString : "No winner"}
                    {game.completed ? <p>COMPLETED</p> : null}
                </h2>
                <h4>Allocated points: {game.points_allocated}</h4>
                <button onClick={handleRemove} className="game-button">Remove Selection</button>
                <p>{game.dateEvent} at {game.strTime}</p>
        </div>   
    )
}

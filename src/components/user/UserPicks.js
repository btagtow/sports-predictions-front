import React from 'react'

export default function SelectedGame(props) {

    const { game, deleteGame } = props

    function handleRemove(){
        deleteGame(game)
    } 
    
    console.log(game)

    return (
        <div className = "game-card" key={game.idEvent}>
                <p>{game.strEventAlternate}</p>
                <h2>Selected winner: 
                    <br></br> 
                    {game.selectedWinnerString ? game.selectedWinnerString : "No winner"}
                </h2>
                    <h4>Allocated points: {game.points_allocated}</h4>
                {/* <div className="game-button-container"> */}
                    <button onClick={handleRemove} className="game-button">Remove Selection</button>
                {/* </div> */}
                <p>{game.dateEvent} at {game.strTime}</p>
        </div>   
    )
}

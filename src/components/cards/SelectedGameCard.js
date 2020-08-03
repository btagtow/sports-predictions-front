import React, {useState} from 'react'

export default function SelectedGame(props) {

    const { game, submitSelectedGame, removeSelectedGame } = props

    const [points, setPoints] = useState(game.bettingPoints)

    function handleSubmit(){
        submitSelectedGame({...game, points_allocated: points})
    }

    function handleRemove(){
        removeSelectedGame(game)
    } 

    function addPoints(num) {
        game.bettingPoints = parseInt(game.bettingPoints + num)
        console.log(game)
        return game 
    }

    const addOnePoint = () => {
        setPoints(points+1)
        addPoints(1)
    }
    const addFivePoints = () => {
        setPoints(points+5)
        addPoints(5)
    }
    const addTenPoints = () => {
        setPoints(points+10)
        addPoints(10)
    }
    return (
        <div className = "game-card" key={game.idEvent}>
                <p>{game.strEventAlternate}</p>
                <h3>Selected winner: 
                    <br></br> 
                    {game.selectedWinnerString}
                </h3>
                    <button onClick={addOnePoint} className="game-button">Wager 1 point</button>
                    <button onClick={addFivePoints} className="game-button">Wager 5 points</button>
                    <button onClick={addTenPoints} className="game-button">Wager 10 points</button>
                    <br></br>
                    <button onClick={handleSubmit} className="game-button">Submit Selection</button>
                    <button onClick={handleRemove} className="game-button">Remove Selection</button>
                    <p>Points allocated: 
                        {points}
                    </p>
                
                <p>{game.dateEvent} at {game.strTime}</p>
        </div>   
    )
}

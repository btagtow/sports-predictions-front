import React from 'react'
import UserPicks from './UserPicks'

export default function Profile(props) {
    const {userProfile, refreshUserProfile, deleteGame} = props

    const gameSelections = () => {
        return userProfile.game_selections.map(game => {
            // console.log(game)
            return <UserPicks game={game} deleteGame={deleteGame}  />
        })
    }

    const handleClick = () => {
        refreshUserProfile()
    }
    return (
        <div>
            <h1>{userProfile.username}</h1>
            <h4>Betting points: {userProfile.betting_points}</h4>
            <section>Your picks 
                <button className="refresh-button" onClick={handleClick}> 
                    
                    <span role="img" aria-label="refresh">🔄</span>
                </button>
                <div className="user-games">
                    {gameSelections()}
                </div>
            </section>
        </div>
    )
}

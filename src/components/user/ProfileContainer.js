import React from 'react'

import { connect } from 'react-redux'

import UserPicks from '../gamecards/UserPicks'
import { confirmUserData, deleteSubmittedGame, adjustPoints } from '../../redux/actions/user'

function ProfileContainer(props) {

    const gameSelections = () => {
        
        if (props.isLoggedIn){
            return props.user.game_selections.map(game => {
                return <UserPicks key={game.id} game={game} deleteSubmittedGame={handleDelete} refreshUserProfile={handleRefresh}/>
            })
        }
    }
 
    const handleRefresh = () => {
         props.confirmUserData()
    }

    const handleDelete = game => {
        return (
            props.adjustPoints(props.user.betting_points + game.points_allocated),
            props.deleteSubmittedGame(game, props.user.game_selections)
        )
    }


    return (
        <div>
            <h1>{props.user.username}</h1>
            <h4>Betting points: {props.user.betting_points}</h4>
            
            <section>Your selections:
                <button className="refresh-button" onClick={handleRefresh}> 
                    
                    <span role="img" aria-label="refresh">🔄</span>
                </button>
                <div className="user-games">
                    {gameSelections()}
                </div>
            </section>
        </div>
    )
}


function mapStateToProps(state){
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    }
  }

  function mapDispatchToProps(dispatch){
      return{
        confirmUserData: () => dispatch(confirmUserData()), 
        deleteSubmittedGame: (game) => dispatch(deleteSubmittedGame(game)), 
        logout: () => dispatch({type: "LOG_OFF"}),
        adjustPoints: (points) => dispatch(adjustPoints(points)),

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

  
  
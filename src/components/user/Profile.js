import React from 'react'
import UserPicks from './UserPicks'

import { connect } from 'react-redux'

function Profile(props) {
    const {refreshUserProfile, deleteGame} = props

    const gameSelections = () => {
        if (props.isLoggedIn){
            return props.user.game_selections.map(game => {
                return <UserPicks game={game} deleteGame={deleteGame} refreshUserProfile={refreshUserProfile}  />
            })
        }
    }

    const handleClick = () => {
        refreshUserProfile()
    }
    return (
        <div>
            <h1>{props.user.username}</h1>
            <h4>Betting points: {props.user.betting_points}</h4>
            
            <section>Your selections:
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)


function mapStateToProps(state){
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    }
  }

  function mapDispatchToProps(dispatch){
      return{
          refresh: (user) => dispatch({type: "REFRESH_PROFILE", payload: user})
      }
  }
  
  
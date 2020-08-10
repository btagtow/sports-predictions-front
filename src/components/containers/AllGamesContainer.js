import React from 'react'
import { connect } from 'react-redux'

import CompletedGameListings from '../GameListings/CompletedGameListings'
import UpcomingAndSelectedGamesContainer from './UpcomingAndSelectedGamesContainer'

function AllGamesContainer(props) {

    let leagueArr = [];
    
    for ( let league in props.leagues ){
        leagueArr.push(props.leagues[league])
    }

    let currentLeague = leagueArr.find(league => league.selected===true)

    return (
        <div className="all-games-container">
            <CompletedGameListings currentLeague = {currentLeague} />
            <UpcomingAndSelectedGamesContainer currentLeague = {currentLeague} adjustUserBettingPoints={props.adjustUserBettingPoints} />

        </div>
    )
}

function mapStateToProps(state){
    return {
        leagues: state.leagues,
        isLoggedIn: state.isLoggedIn,
    }
  }
function mapDispatchToProps(dispatch){
    return {
        adjustUserBettingPoints: (points) => dispatch({type: "ADJUST_POINTS", payload: points}),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllGamesContainer)
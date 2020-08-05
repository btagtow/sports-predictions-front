import React from 'react'
import { connect } from 'react-redux'

import CompletedGameListings from '../GameListings/CompletedGameListings'
import UpcomingAndSelectedGamesContainer from './UpcomingAndSelectedGamesContainer'

function AllGamesContainer(props) {
    const {currentLeague, isLoggedIn, adjustUserBettingPoints } = props
    return (
        <div className="all-games-container">
            <CompletedGameListings currentLeague = {currentLeague} />
            <UpcomingAndSelectedGamesContainer currentLeague = {currentLeague} isLoggedIn={isLoggedIn} adjustUserBettingPoints={adjustUserBettingPoints} />
        </div>
    )
}
function mapStateToProps(state){
    return{
        allLeagues: state.leagues
    }
}
export default connect(mapStateToProps, null)(AllGamesContainer)
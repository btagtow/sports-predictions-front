import React from 'react'
import CompletedGameListings from '../GameListings/CompletedGameListings'
import UpcomingAndSelectedGamesContainer from './UpcomingAndSelectedGamesContainer'

export default function AllGamesContainer(props) {
    const {currentLeague, isLoggedIn, adjustUserBettingPoints } = props
    return (
        <div className="all-games-container">
            <CompletedGameListings currentLeague = {currentLeague} />
            <UpcomingAndSelectedGamesContainer currentLeague = {currentLeague} isLoggedIn={isLoggedIn} adjustUserBettingPoints={adjustUserBettingPoints} />
        </div>
    )
}

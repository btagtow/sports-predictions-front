const leagueIds = { EPL: 4328, NFL: 4391, MLB: 4424, NBA: 4387, NHL: 4380 }

function selectLeague(league){
    return (dispatch) => {
        dispatch({type: 'SWITCHING_LEAGUES'});
        dispatch({type: `SELECT_${league}`})
    }
}

function fetchUpcomingGames(league, leagueId){
    return (dispatch) => {
        dispatch({type: `START_ADDING_UPCOMING_GAMES_${league}`});
        fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${leagueId}`
            ).then(response => response.json()
            ).then(events => events.events
            ).then(upcomingGames => 
                dispatch({type: `ADD_UPCOMING_GAMES_${league}`, upcomingGames})
            )}
}
function fetchPastGames(league, leagueId){
    return (dispatch) => {
        dispatch({type: `START_ADDING_PAST_GAMES_${league}`});
        fetch(`https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${leagueId}`
            ).then(response => response.json()
            ).then(events => events.events
            ).then(pastGames => 
                dispatch({type: `ADD_PAST_GAMES_${league}`, pastGames})
            ).then()
    }
}

function selectNFL(){
    return selectLeague("NFL")
}
function selectMLB(){
    return selectLeague("MLB")
}
function selectNBA(){
    return selectLeague("NBA")
}
function selectNHL(){
    return selectLeague("NHL")
}
function selectEPL(){
    return selectLeague("EPL")
}

function fetchUpcomingGamesNFL(){
    return (fetchUpcomingGames("NFL", leagueIds.NFL))
}
function fetchPastGamesNFL(){
    return (fetchPastGames("NFL", leagueIds.NFL))
}
function fetchUpcomingGamesNBA(){
    return (fetchUpcomingGames("NBA", leagueIds.NBA))
}
function fetchPastGamesNBA(){
    return (fetchPastGames("NBA", leagueIds.NBA))
}
function fetchUpcomingGamesEPL(){
    return (fetchUpcomingGames("EPL", leagueIds.EPL))
}
function fetchPastGamesEPL(){
    return (fetchPastGames("EPL", leagueIds.EPL))
}
function fetchUpcomingGamesMLB(){
    return (fetchUpcomingGames("MLB", leagueIds.MLB))
}
function fetchPastGamesMLB(){
    return (fetchPastGames("MLB", leagueIds.MLB))
}
function fetchUpcomingGamesNHL(){
    return (fetchUpcomingGames("NHL", leagueIds.NHL))
}
function fetchPastGamesNHL(){
    return (fetchPastGames("NHL", leagueIds.NHL))
}

export {
    fetchUpcomingGamesNFL, fetchPastGamesNFL,
    fetchUpcomingGamesMLB, fetchPastGamesMLB,
    fetchUpcomingGamesEPL, fetchPastGamesEPL,
    fetchUpcomingGamesNHL, fetchPastGamesNHL,
    fetchUpcomingGamesNBA, fetchPastGamesNBA,
    selectNFL,
    selectMLB,
    selectNHL,
    selectNBA,
    selectEPL

}
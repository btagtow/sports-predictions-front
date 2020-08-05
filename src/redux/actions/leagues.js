function fetchUpcomingGames(){
    return (dispatch) => {
        dispatch({type: 'START_ADDING_UPCOMING_GAMES'});
        fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4391`)
            .then(response => response.json())
            .then(upcomingGames => dispatch({type: "ADD_UPCOMING_GAMES", upcomingGames}))
    }
}

export {fetchUpcomingGames}
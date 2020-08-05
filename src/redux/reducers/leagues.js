export function leaguesReducer(state= {upcomingGames: [], requesting: false  }, action){
    switch(action.type){
        case 'START_ADDING_UPCOMING_GAMES': 
            return {
                ...state, 
                upcomingGames: [],
                requesting: true
            }
        case 'ADD_UPCOMING_GAMES': 
            return {
                ...state, 
                upcomingGames: action.upcomingGames,
                requesting: false
            }

        default: return state

    }
}


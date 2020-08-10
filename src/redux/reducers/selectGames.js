function selectedGames(state=[], action){
    switch (action.type){
        case "SELECT_GAME" : 
            return [...state, action.game]
        case "REMOVE_GAME" : 
            return state = state.filter(game => game !== action.game)
        default: return state
    }
}
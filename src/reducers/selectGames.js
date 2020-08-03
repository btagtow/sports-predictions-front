function selectedGames(state=[], action){
    switch (action.type){
        case "SELECT_GAME" : 
            return [...state, action.game]
        default: return state
    }
}
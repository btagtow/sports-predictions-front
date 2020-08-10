function userReducer(state={}, action){

    switch(action.type){
        case "LOG_IN" : 
            return state=action.payload;
        case "LOG_OFF" : 
            return state={}
        case "REFRESH_PROFILE" : 
            return state=action.payload
        case "START_ADJUSTING_POINTS" : 
            return {...state}
        case "ADJUST_POINTS" : 
            return {...state, betting_points: action.betting_points}  
        case "START_REQUESTING_DATA" : 
            return {...state, requesting:true}
        case "CONFIRM_USER_DATA" : 
            return state = action.user
        case "START_SUBMITTING_GAME" : 
            return {...state, requesting: true}
        case "SUBMIT_GAME" : 
            alert("Game submitted")
            return {...state, game_selections: [...state.game_selections, action.game]}
        case "START_DELETING_GAME" : 
            return {...state, requesting: true}
        case "DELETE_GAME" : 
            return {...state, game_selections: state.game_selections.filter(game => game.id!==action.g.id)}
        default: return state
    }
}

export default userReducer


function userReducer(state={}, action){

    switch(action.type){
        case "LOG_IN" : 
            return state=action.payload;
        case "LOG_OFF" : 
            return state={}
            
        case "REFRESH_PROFILE" : 
            return state=action.payload;

        case "ADJUST_POINTS" : 
            return {...state, betting_points: action.payload}

        default: return state
    }
}

export default userReducer
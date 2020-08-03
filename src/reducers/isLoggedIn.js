function isLoggedIn(state=false, action){
    switch(action.type){
        case "LOG_IN": 
            return (
                state=true
            )
        case "LOG_OFF": 
            return state=false
        default: return state
    }

}
export default isLoggedIn
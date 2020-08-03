function mainContainerDisplay(state="about", action){
    switch(action.type){
        case "ABOUT" : 
            return state="about"
        case "PROFILE" : 
            return state="profile"
        case "GAMES" : 
            return state="games"
        default: return state
    }
}

export default mainContainerDisplay
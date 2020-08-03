function showAbout(dispatch){
    dispatch({type: "ABOUT"})
}

function showProfile(dispatch){
    dispatch({type: "PROFILE"})
}

function showGames(dispatch){
    dispatch({type: "GAMES"})
}

export {
    showAbout,
    showProfile,
    showGames
}
// function refreshProfile(user, dispatch){
//     dispatch({type: "REFRESH_PROFILE", payload: user})
// }
const selectedGamesURL = `http://localhost:3000/game_selections`
const userURL = `http://localhost:3000/users/${localStorage.user_id}`

function confirmUserData(){
    return (dispatch) => {
        dispatch({type: "START_CONFIRMING_USER"});
        fetch(userURL, {
            method: "GET", 
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            }
        ).then(response => response.json()
        ).then(user => {
            dispatch({type: "CONFIRM_USER", user })
        })
    }
}
function submitGame(game){
    return (dispatch) => {
        dispatch({type: "START_SUBMITTING_GAME"});
        fetch(selectedGamesURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(game)
        }).then(response => response.json()
        ).then(r => {
            if (r.message === "Accepted"){
                dispatch({type: "SUBMIT_GAME", game: r.game_selection})
            } else (alert("Error submitting picks, please try again."))
        })
        
    }        
}

function adjustPoints(newPoints){
    return (dispatch) => {
        dispatch({type: "START_ADJUSTING_POINTS"});
        fetch(userURL, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({betting_points: newPoints})
        }).then(response => response.json()
        ).then(r => {
            dispatch({type: "ADJUST_POINTS", betting_points: r.betting_points})
        })

    }
}

function deleteSubmittedGame(game, games){
    return dispatch => {
        dispatch({type: "START_DELETING_GAME"})
            fetch(`http://localhost:3000/game_selections/${game.id}`, {
                method: "DELETE", 
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
                }
            }).then(response => response.json()
        ).then(r => {
            let g = r.deleted_game
                return dispatch({type: "DELETE_GAME", g})
            
        }
        )
    }
}

export {
    confirmUserData,
    submitGame,
    adjustPoints, 
    deleteSubmittedGame
}
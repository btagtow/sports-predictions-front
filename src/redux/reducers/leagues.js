let leagues = { 
    EPL: {name: 'EPL', id: 4328, emoji: '⚽️' , pastGames: [], upcomingGames: [], selected: false, requesting: false},
    NFL: {name: 'NFL', id: 4391, emoji: '🏈' , pastGames: [], upcomingGames: [], selected: false, requesting: false},
    MLB: {name: 'MLB', id: 4424, emoji: '⚾️' , pastGames: [], upcomingGames: [], selected: true, requesting: false},
    NHL: {name: 'NHL', id: 4380, emoji: '🏒' , pastGames: [], upcomingGames: [], selected: false, requesting: false},
    NBA: {name: 'NBA', id: 4387, emoji: '🏀' , pastGames: [], upcomingGames: [], selected: false, requesting: false}
}

function leaguesReducer(state = leagues, action){

    switch(action.type){
        case 'SWITCHING_LEAGUES' : 
            return {
                ...state, 
                NFL: {...state.NFL, selected: false },             
                EPL: {...state.EPL, selected: false },
                NBA: {...state.NBA, selected: false },
                NHL: {...state.NHL, selected: false },
                MLB: {...state.MLB, selected: false },
            }
        
            
        case 'SELECT_NFL':
            return {
                ...state, 
                NFL: {...state.NFL, selected: true}
            }
        case 'SELECT_MLB':
            return {
                ...state, 
                MLB: {...state.MLB, selected: true}
            }
        case 'SELECT_NHL':
            return {
                ...state, 
                NHL: {...state.NHL, selected: true}
            }
        case 'SELECT_NBA':
            return {
                ...state, 
                NBA: {...state.NBA, selected: true}
            }
        case 'SELECT_EPL':
            return {
                ...state, 
                EPL: {...state.EPL, selected: true}
            }
        
        case 'START_ADDING_UPCOMING_GAMES_NFL': 
            return {
                ...state, 
                NFL: {...state.NFL, requesting: true },
            }
        case 'START_ADDING_UPCOMING_GAMES_MLB': 
            return {
                ...state, 
                MLB: {...state.MLB, requesting: true },
            }
        case 'START_ADDING_UPCOMING_GAMES_NBA': 
            return {
                ...state, 
                NBA: {...state.NBA, requesting: true },
            }
        case 'START_ADDING_UPCOMING_GAMES_NHL': 
            return {
                ...state, 
                NHL: {...state.NHL, requesting: true },
            }
        case 'START_ADDING_UPCOMING_GAMES_EPL': 
            return {
                ...state, 
                EPL: {...state.EPL, requesting: true },
            }
        
        case 'START_ADDING_PAST_GAMES_NFL': 
            return {
                ...state, 
                NFL: {...state.NFL, requesting: true },
            }
        case 'START_ADDING_PAST_GAMES_MLB': 
            return {
                ...state, 
                MLB: {...state.MLB, requesting: true },
            }
        case 'START_ADDING_PAST_GAMES_NBA': 
            return {
                ...state, 
                NBA: {...state.NBA, requesting: true },
            }
        case 'START_ADDING_PAST_GAMES_NHL': 
                return {
                    ...state, 
                    NHL: {...state.NHL, requesting: true },
                }
        case 'START_ADDING_PAST_GAMES_EPL': 
            return {
                ...state, 
                EPL: {...state.EPL, requesting: true },
            }
        case 'ADD_UPCOMING_GAMES_NFL': 
            return {
                ...state, 
                NFL: {...state.NFL, upcomingGames: action.upcomingGames, requesting: false },
            }
        case 'ADD_UPCOMING_GAMES_MLB': 
            return {
                ...state, 
                MLB: {...state.MLB, upcomingGames: action.upcomingGames, requesting: false },
            }
        case 'ADD_UPCOMING_GAMES_NBA': 
            return {
                ...state, 
                NBA: {...state.NBA, upcomingGames: action.upcomingGames, requesting: false },
            }
        
        case 'ADD_UPCOMING_GAMES_NHL': 
            return {
                ...state, 
                NHL: {...state.NHL, upcomingGames: action.upcomingGames, requesting: false },
            }
        case 'ADD_UPCOMING_GAMES_EPL': 
            return {
                ...state, 
                EPL: {...state.EPL, upcomingGames: action.upcomingGames, requesting: false },
            }
        
        case 'ADD_PAST_GAMES_NFL': 
            return {
                ...state, 
                NFL: {...state.NFL, pastGames: action.pastGames, requesting: false },
            }
        
        case 'ADD_PAST_GAMES_MLB': 
            return {
                ...state, 
                MLB: {...state.MLB, pastGames: action.pastGames, requesting: false },
            }
        case 'ADD_PAST_GAMES_NBA': 
            return {
                ...state, 
                NBA: {...state.NBA, pastGames: action.pastGames, requesting: false },
            }
        case 'ADD_PAST_GAMES_NHL': 
            return {
                ...state, 
                NHL: {...state.NHL, pastGames: action.pastGames, requesting: false },
            }
        case 'ADD_PAST_GAMES_EPL': 
            return {
                ...state, 
                EPL: {...state.EPL, pastGames: action.pastGames, requesting: false },
            }
        default: return state

    }
}

export default leaguesReducer
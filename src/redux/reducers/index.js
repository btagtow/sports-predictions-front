import { combineReducers } from 'redux'
import isLoggedIn from './isLoggedIn'
import user from './user'
import mainContainerDisplay from './mainContainerDisplay'
import selectGames from './selectGames'
import leagues from './leagues'

export const rootReducer = combineReducers({isLoggedIn, user, mainContainerDisplay, selectGames, leagues })



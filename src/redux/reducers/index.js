import { combineReducers } from 'redux'
import isLoggedIn from './isLoggedIn'
import user from './user'
import mainContainerDisplay from './mainContainerDisplay'
import selectGames from './selectGames'
import {leaguesReducer} from './leagues'

export const reducer = combineReducers({isLoggedIn, user, mainContainerDisplay, selectGames, leaguesReducer })



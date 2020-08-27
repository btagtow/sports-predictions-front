import { combineReducers } from 'redux'
import isLoggedIn from './isLoggedIn'
import user from './user'
import mainContainerDisplay from './mainContainerDisplay'
import leagues from './leagues'

export const rootReducer = combineReducers({isLoggedIn, user, mainContainerDisplay, leagues })



import React from 'react'

import { connect } from 'react-redux'

import AboutButton from './AboutButton'
import UserProfileButton from './UserProfileButton'
import LeagueDropdown from './league/LeagueDropdown'
import Auth from '../auth/Auth'


function NavBar(props) {

    return (
        <div className="dropdown-and-forms">
            <div className="dropdown-container">
                <AboutButton />
                {props.isLoggedIn ? <UserProfileButton  /> : null}
                <LeagueDropdown leagues={props.leagues} switchLeague = {props.switchLeague} />
                <Auth />
            </div>
        </div>
    )
}
function mapStateToProps(state){
    return {
        isLoggedIn: state.isLoggedIn
    }
  }

  export default connect(mapStateToProps, null)(NavBar)
  
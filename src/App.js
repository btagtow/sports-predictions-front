import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { fetchUpcomingGames } from './redux/actions/leagues'

import NavBar from './components/containers/NavBar'
import AllGamesContainer from './components/containers/AllGamesContainer'
import LoggedOnDisplay from './components/user/LoggedOnDisplay'
import AboutPage from './components/AboutPage'
import Profile from './components/user/Profile';

const next15url = (id) => `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${id}`
const last15url = (id) => `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${id}`

const leagueIds = { epl: 4328, nfl: 4391, mlb: 4424, nba: 4387, nhl: 4380 }

const leagueInfo = {
  epl: { 
    next15: next15url(leagueIds.epl),
    last15: last15url(leagueIds.epl),
  },
  nfl: { 
    next15: next15url(leagueIds.nfl),
    last15: last15url(leagueIds.nfl),
  },
  mlb: { 
    next15: next15url(leagueIds.mlb),
    last15: last15url(leagueIds.mlb),
  },
  nba: { 
    next15: next15url(leagueIds.nba),
    last15: last15url(leagueIds.nba),
  },
  nhl: { 
    next15: next15url(leagueIds.nhl),
    last15: last15url(leagueIds.nhl),
  },
}
  

class App extends Component {
  state = {
    leagues: [
      {name: 'EPL', id: 4328, emoji: '⚽️' , next15: [], last15: [], selected: false},
      {name: 'NFL', id: 4391, emoji: '🏈' , next15: [], last15: [], selected: false},
      {name: 'MLB', id: 4424, emoji: '⚾️' , next15: [], last15: [], selected: true},
      {name: 'NBA', id: 4387, emoji: '🏀' , next15: [], last15: [], selected: false},
      {name: 'NHL', id: 4380, emoji: '🏒' , next15: [], last15: [], selected: false}, 
    ],
  }

  //deletes pick that has been submitted
  deleteGame = game => {
    fetch(`http://localhost:3000/game_selections/${game.id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(this.adjustUserBettingPoints(this.props.user.betting_points + game.points_allocated))
  }

  
  leagueIndex = leagueId => this.state.leagues.findIndex(league =>  league.id === leagueId )


  switchLeague = (id) => {
    let newLeagues = [...this.state.leagues]
    this.state.leagues.map(league => {
      return (league.id !== id ? league.selected = false : null)
    })
    this.setState({
      leagues: newLeagues
    })
  }

  fetchAllGames = (leagueAbr) => {
    this.fetchNext15(leagueAbr)
    this.fetchLast15(leagueAbr)
  }

  fetchNext15 = (leagueAbr) => {
    return(
     fetch(leagueInfo[leagueAbr].next15)
      .then(response => response.json())
      .then(games => {  
        this.addUpcomingGames(games, leagueIds[leagueAbr])
      })
    )
  }

  fetchLast15 = (leagueAbr) => {
    return(
     fetch(leagueInfo[leagueAbr].last15)
      .then(response => response.json())
      .then(games => {  
        this.addCompletedGames(games, leagueIds[leagueAbr])
      })
    )
  }

  addUpcomingGames = (games, leagueId) => {
    if (games.events){
      let league = this.leagueIndex(leagueId)
      let newLeagues = [...this.state.leagues]
      newLeagues[league] = {...newLeagues[league], next15: games.events} 
      // this.setState({
      //   leagues: newLeagues
      // })
    }

      return this.props.addUpcomingGames(games.events,leagueId)
    
  }

  addCompletedGames = (games, leagueId) => {
    if (games.events){
      let league = this.leagueIndex(leagueId)
      let newLeagues = [...this.state.leagues]
      newLeagues[league] = {...newLeagues[league], last15: games.events} 
      this.setState({
        leagues: newLeagues
      })
    }
  }

  fetchGames = () => {
        this.fetchAllGames("epl")
        this.fetchAllGames("nfl")
        this.fetchAllGames("mlb")
        this.fetchAllGames("nhl")
        this.fetchAllGames("nba")
  }

  componentDidMount(){
    this.fetchGames()
  }

  currentLeague = () => this.state.leagues.find(league => league.selected === true)

  refreshUserProfile = () => {
    fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
      method: "GET", 
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(result => this.props.refreshProfile(result))
  }


    adjustUserBettingPoints = (newBettingPoints) => {
      fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({betting_points: newBettingPoints})
        
      })
    }

    handleClick() {
      this.props.fetchUpcomingGames()
    }
  render(){

    return (

      <Router>
        <div className="App">
          <div className="headline-container">
            <h1 className="headline" >The Broke Gambler</h1>
          </div>
          <p>Test your sports betting abilities</p>
          <button onClick={event => this.handleClick(event)}>GIVE ME GAMES</button>
          <NavBar leagues ={this.state.leagues} switchLeague={this.switchLeague}/>
          
          <Route exact path="/">
            <AboutPage />
          </Route> 
          <Route exact path="/about">
            <AboutPage />
          </Route> 
          <Route exact path="/profile">
            <Profile refreshUserProfile={this.refreshUserProfile} deleteGame={this.deleteGame}/>
          </Route> 
          <Route exact path="/games">
            <div>
              {this.props.isLoggedIn ? <LoggedOnDisplay /> : null}
              <AllGamesContainer currentLeague = {this.currentLeague()} adjustUserBettingPoints={this.adjustUserBettingPoints} />
            </div>
          </Route>

        </div>
      </Router>
      
    );
  }
}



function mapStateToProps(state){
  return {
      isLoggedIn: state.isLoggedIn,
      user: state.user, 
      mainContainerDisplay: state.mainContainerDisplay,
      upcomingGames: state.leaguesReducer.upcomingGames,
      requesting: state.leaguesReducer.requesting
    }
}

function mapDispatchToProps(dispatch){
  return {
      refreshProfile: (user) => dispatch({type: "REFRESH_PROFILE", payload: user}), 
      adjustUserBettingPoints: (points) => dispatch({type: "ADJUST_POINTS", payload: points}),
      addUpcomingGames: (games, leagueId) => dispatch({type: "ADD_UPCOMING_GAMES", games, leagueId }),
      addCompletedGames: (games, leagueId) => dispatch({type: "ADD_COMPLETED_GAMES", games, leagueId }),
      fetchUpcomingGames: () => dispatch(fetchUpcomingGames()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

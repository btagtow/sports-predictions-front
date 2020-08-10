import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { 
  fetchUpcomingGamesNFL, fetchPastGamesNFL,
  fetchUpcomingGamesMLB, fetchPastGamesMLB,
  fetchUpcomingGamesEPL, fetchPastGamesEPL,
  fetchUpcomingGamesNHL, fetchPastGamesNHL,
  fetchUpcomingGamesNBA, fetchPastGamesNBA,
 } from './redux/actions/leagues'

import NavBar from './components/containers/NavBar'
import AllGamesContainer from './components/containers/AllGamesContainer'
import LoggedOnDisplay from './components/user/LoggedOnDisplay'
import AboutPage from './components/AboutPage'
import Profile from './components/user/ProfileContainer';

class App extends Component {

  fetchGames = () => {
      
    this.props.fetchUpcomingGamesNFL()
    this.props.fetchPastGamesNFL()
    this.props.fetchUpcomingGamesMLB()
    this.props.fetchPastGamesMLB()
    this.props.fetchUpcomingGamesNBA()
    this.props.fetchPastGamesNBA()
    this.props.fetchUpcomingGamesNHL()
    this.props.fetchPastGamesNHL()
    this.props.fetchUpcomingGamesEPL()
    this.props.fetchPastGamesEPL()
      
  }

  componentDidMount(){
    this.fetchGames()
  }

  render(){

    return (

      <Router>
        <div className="App">
          <div className="headline-container">
            <h1 className="headline" >The Broke Gambler</h1>
          </div>
          <p>Test your sports betting abilities</p>
          <NavBar />
          <Route exact path="/">
            <AboutPage />
          </Route> 
          <Route exact path="/about">
            <AboutPage />
          </Route> 
          <Route exact path="/profile">
            <Profile />
          </Route> 
          <Route exact path="/games">
            <div>
              {this.props.isLoggedIn ? <LoggedOnDisplay /> : null}
              <AllGamesContainer />
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
      }
}

function mapDispatchToProps(dispatch){
  return {
      fetchUpcomingGamesNFL: () => dispatch(fetchUpcomingGamesNFL()),
      fetchPastGamesNFL: () => dispatch(fetchPastGamesNFL()),
      fetchUpcomingGamesMLB: () => dispatch(fetchUpcomingGamesMLB()),
      fetchPastGamesMLB: () => dispatch(fetchPastGamesMLB()),
      fetchUpcomingGamesNBA: () => dispatch(fetchUpcomingGamesNBA()),
      fetchPastGamesNBA: () => dispatch(fetchPastGamesNBA()),
      fetchUpcomingGamesNHL: () => dispatch(fetchUpcomingGamesNHL()),
      fetchPastGamesNHL: () => dispatch(fetchPastGamesNHL()),
      fetchUpcomingGamesEPL: () => dispatch(fetchUpcomingGamesEPL()),
      fetchPastGamesEPL: () => dispatch(fetchPastGamesEPL()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

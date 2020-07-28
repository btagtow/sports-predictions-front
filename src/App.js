import React, { Component } from 'react';
import './App.css';

import GameListings from './components/containers/GameListings'
import SelectedGames from './components/containers/SelectedGames'
import LeagueDropdown from './components/dropdowns/LeagueDropdown'
import About from './components/About'
import Auth from './components/auth/Auth'
import UserProfileButton from './components/dropdowns/UserProfileButton';
import Profile from './components/user/Profile';
import MainContainer from './components/containers/MainContainerLoggedIn';

const selectedGamesURL = `http://localhost:3000/game_selections`

const leagueInfo = {
  epl: {
    id: 4328, 
    url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328`
  },
  nfl: {
    id: 4391, 
    url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4391`
  },
  mlb: {
    id: 4424, 
    url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4424`
  },
  nba: {
    id: 4387, 
    url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387`
  },
  nhl: {
    id: 4380, 
    url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4380`
  },
}


class App extends Component {
  state = {
    selectedGames: [],
    leagues: [
      {name: 'EPL', id: 4328, emoji: '⚽️' , games: [], selected: false},
      {name: 'NFL', id: 4391, emoji: '🏈' , games: [], selected: false},
      {name: 'MLB', id: 4424, emoji: '⚾️' , games: [], selected: true},
      {name: 'NBA', id: 4387, emoji: '🏀' , games: [], selected: false},
      {name: 'NHL', id: 4380, emoji: '🏒' , games: [], selected: false}, 
    ],
    failedToFetch: [],
    isLoggedIn: false,
    isProfile: false,
    currentUserProfile: {},
    currentBettingPoints: 0
    // loginForm: false,
    // signupForm: false
    //failed to fetch identified by league id 
  }
  selectGame = (game) => {

    if(!this.state.selectedGames.find(theGame => game.idEvent === theGame.idEvent)){
      
      this.setState({
        selectedGames: [...this.state.selectedGames, game]
      })
    } else {
      this.setState({
        selectedGames: [...this.state.selectedGames]
      }) 
    }
  }

  

  submitSelectedGame = (game) => {
    if (this.state.isLoggedIn){
      if (this.state.currentBettingPoints - game.points_allocated >= 0){
        fetch(selectedGamesURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
          },
          body: JSON.stringify(game)
        })
        .then(response => response.json())
        .then(result => {
          result.message === "Accepted" ? alert("Selection submitted") : alert("Failed to submit, try refreshing the page")
        })
        .then(this.updateSelectedGames(game))
        .then(
          this.adjustUserBettingPoints(this.state.currentBettingPoints - game.points_allocated) 
          )
      } else alert("Not enough betting points to make a pick.")

      
    } else {
      alert("Log in to submit your picks")
    }
  }

  

  //removes game on selection menu
  removeSelectedGame = (game) => {
    this.updateSelectedGames(game)
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
    .then(console.log)
  }

  
  leagueIndex = leagueId => this.state.leagues.findIndex(league =>  league.id === leagueId )

  addGames = (games, leagueId) => {
    let league = this.leagueIndex(leagueId)
    let newLeagues = [...this.state.leagues]
    newLeagues[league] = {...newLeagues[league], games: games.events} 
    this.setState({
      leagues: newLeagues
    })
  }

  switchLeague = (id) => {
    let newLeagues = [...this.state.leagues]
    this.state.leagues.map(league => {
      return (league.id !== id ? league.selected = false : null)
    })
    this.setState({
      leagues: newLeagues
    })
  }

  checkForGames = (games, leagueId) => {
    games.events ? this.addGames(games, leagueId) : this.setState({failedToFetch: [...this.state.failedToFetch, leagueId] })
  }

  fetchFrom = (leagueAbr) => {
    return(
     fetch(leagueInfo[leagueAbr].url)
      .then(response => response.json())
      .then(games => {  
        this.checkForGames(games, leagueInfo[leagueAbr].id)
      })
    )
  }
  fetchGames = () => {
        this.fetchFrom("epl")
        this.fetchFrom("nfl")
        this.fetchFrom("mlb")
        this.fetchFrom("nhl")
        this.fetchFrom("nba")
  }

  componentDidMount(){
    this.fetchGames()
  }

  currentLeague = () => this.state.leagues.find(league => league.selected === true)

  updateSelectedGames = (game) => {
    let newSelectedGames = this.state.selectedGames.filter(selectedGame => game.idEvent !== selectedGame.idEvent)
    this.setState({
      selectedGames: newSelectedGames
    })
  }

  toggleLoggedin = (boo) => {
    this.setState({
      isLoggedIn: boo
    })
  }



  toggleProfileShown = () => {
    const regularContainer = 
      <div className="main-container">
          <div className="filler">
          </div>
          <div className="all-games-container">
            <GameListings currentLeague = {this.currentLeague()} selectGame= {this.selectGame} />
            <SelectedGames selectedGames={this.state.selectedGames} submitSelectedGame={this.submitSelectedGame} removeSelectedGame={this.removeSelectedGame} />
          </div>
      </div>
    if (this.state.isLoggedIn){
      if (this.state.isProfile) {
        return (
          <div className="main-container">
            <Profile userProfile={this.state.currentUserProfile} betting_points={this.state.currentBettingPoints} refreshUserProfile={this.refreshUserProfile} deleteGame={this.deleteGame}/>
          </div>
          )
      } else if (!this.state.isProfile){ 
        return (
          <MainContainer betting_points={this.state.currentBettingPoints} regularContainer={regularContainer} />
        )
        
      } else {
        return regularContainer
      }
    } else {
      return regularContainer
    }
    
    }
  

    toggleMainContainer = () => {
      this.setState({
        isProfile: !this.state.isProfile
      })
    }

    setUserProfile = (user) => {
      this.setState({
        currentUserProfile: user, 
        currentBettingPoints: user.betting_points
      })
    }

    refreshUserProfile = () => {
      fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(result => this.setState({currentUserProfile: result}))
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
        .then(response => response.json())
        .then(this.setState({currentBettingPoints: newBettingPoints}))
        // .then(result => this.setState({currentUserProfile: result}))
    }

    resetProfile = () => {
      this.setState({isProfile: false})
    }
    

  render(){

    console.log()

    return (

      <div className="App">
        <div className="headline-container">
          <h1 className="headline" >Sports Predictor</h1>
        </div>
        <div className="dropdown-and-forms">
          <div className="dropdown-container">
            {/* <About /> */}
            {this.state.isLoggedIn ? <UserProfileButton toggleMainContainer={this.toggleMainContainer} isProfile={this.state.isProfile} refreshUserProfile={this.refreshUserProfile} /> : null}
            <LeagueDropdown leagues={this.state.leagues} switchLeague = {this.switchLeague} resetProfile={this.resetProfile} isProfile={this.state.isProfile} />
            <Auth toggleLoggedin={this.toggleLoggedin} username={this.state.currentUserProfile.username} setUserProfile= {this.setUserProfile} resetProfile={this.resetProfile} />
          </div>
        </div>
        {this.toggleProfileShown()}

      </div>
    );
  }
}


export default App;

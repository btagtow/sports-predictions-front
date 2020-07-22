import React, { Component } from 'react';
import './App.css';
import GameListings from './components/containers/GameListings'
import SelectedGames from './components/containers/SelectedGames'
import LeagueDropdown from './components/dropdowns/LeagueDropdown'
import Auth from './components/auth/Auth'

class App extends Component {
  state = {
    selectedGames: [],
    leagues: [
      {name: 'EPL', id: 4328, emoji: '⚽️' , games: [], selected: true},
      {name: 'NFL', id: 4391, emoji: '🏈' , games: [], selected: false},
      {name: 'MLB', id: 4424, emoji: '⚾️' , games: [], selected: false},
      {name: 'NBA', id: 4387, emoji: '🏀' , games: [], selected: false},
      {name: 'NHL', id: 4380, emoji: '🏒' , games: [], selected: false}, 
    ],
    failedToFetch: [],
    fetchComplete: false,
    loginForm: false,
    signupForm: false
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

  removeSelectedGame = (game) => {
    let newSelectedGames = this.state.selectedGames.filter(selectedGame => game !== selectedGame)
    this.setState({
      selectedGames: newSelectedGames
    })
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

  fetchGames = () => {
    let eplId = 4328
    let nflId = 4391
    let mlbId = 4424
    let nbaId = 4387
    let nhlId = 4380
          fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${eplId}`)
            .then(response => response.json())
            .then(games => {  
              this.checkForGames(games, eplId)
            })
        .then(
          fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${nflId}`)
            .then(response => response.json())
            .then(games => {
              this.checkForGames(games, nflId)
        }))
        .then(
          fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${mlbId}`)
            .then(response => response.json())
            .then(games => {
              this.checkForGames(games, mlbId)
            }))
        .then(
          fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${nbaId}`)
            .then(response => response.json())
            .then(games => {
              this.checkForGames(games, nbaId)
            }))
        .then(
          fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${nhlId}`)
            .then(response => response.json())
            .then(games => {
              this.checkForGames(games, nhlId)
            }))
          .then(
            this.setState({fetchComplete: true})
          )
        .catch(error => this.setState({error: error}))
  }

  componentDidMount(){
    this.fetchGames()
  }

  currentLeague = () => this.state.leagues.find(league => league.selected === true)

  fetchStatus = () => this.state.fetchComplete

  // toggleLogin = () => this.state.loginForm ? this.setState({loginForm: false}) : this.setState({loginForm: true, signupForm: false})
  // toggleSignup = () => this.state.signupForm ? this.setState({signupForm: false}) : this.setState({signupForm: true, loginForm: false})

  showSignupForm = () => this.state.signupForm
  showLoginForm = () => this.state.loginForm

  render(){

    return (

      <div className="App">
        <h1>Sports Predictor</h1>
        <div className="dropdown-and-forms">
          <div className="dropdown-container">
            <LeagueDropdown leagues={this.state.leagues} switchLeague = {this.switchLeague} />
            <Auth toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup} 
              
            />
          </div>
          {/* <div className="forms">
            <Form loginForm={this.showLoginForm()} signupForm={this.showSignupForm()} />

          </div> */}

        </div>
        <div className="all-games-container">
          <div className="game-listings">
            <GameListings currentLeague = {this.currentLeague()} selectGame= {this.selectGame} fetchComplete={this.fetchStatus()} />

          </div>

          <div className="selected-games">
            <SelectedGames selectedGames={this.state.selectedGames} removeSelectedGame={this.removeSelectedGame} />
          </div>
          {/* <Group /> */}
          {/* <LeagueButtons leagues={this.state.leagues} switchLeague = {this.switchLeague} /> */}
        </div>


      </div>
    );
  }
}


export default App;

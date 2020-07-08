import React, { Component } from 'react';
import './App.css';
import GameListings from './components/containers/GameListings'
import SelectedGames from './components/containers/SelectedGames'
import LeagueDropdown from './components/dropdowns/LeagueDropdown'
import SelectionDropdown from './components/dropdowns/SelectionDropdown'
import Group from './components/Group'


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

  leagueIndex = leagueId => this.state.leagues.findIndex(league =>  league.id == leagueId )

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
    let league = newLeagues[this.leagueIndex(id)]
    let otherLeagues = this.state.leagues.map(league => {
      if (league.id !== id){return league.selected = false}
    })
    league = ({...league, selected: true}, {...otherLeagues}) 
    this.setState({
      leagues: newLeagues
    })
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
          this.addGames(games, eplId)
        })
        .then(
      fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${nflId}`)
        .then(response => response.json())
        .then(games => {
          this.addGames(games, nflId)
    }))
  }

  componentDidMount(){
    this.fetchGames()
  }

  currentLeague = () => this.state.leagues.find(league => league.selected === true)

  render(){

    return (

      <div className="App">
        <h1>Sports Predictor</h1>
        <div className="dropdown-container">
          <LeagueDropdown leagues={this.state.leagues} switchLeague = {this.switchLeague} />
        </div>
        <div className="all-games-container">
          <GameListings currentLeague = {this.currentLeague()} selectGame= {this.selectGame} />

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

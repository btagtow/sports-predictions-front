import React, { Component } from 'react'

import SelectedGameListings from '../GameListings/SelectedGameListings'
import UpcomingGameListings from '../GameListings/UpcomingGameListings'
import { submitGame, confirmUserData, adjustPoints } from '../../redux/actions/user'

import { connect } from 'react-redux'

const selectedGamesURL = `http://localhost:3000/game_selections`

class UpcomingAndSelected extends Component {
    state = {
        selectedGames: []
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
    let newSelectedGames = this.state.selectedGames.filter(selectedGame => game.idEvent !== selectedGame.idEvent)
    this.setState({
        selectedGames: newSelectedGames
    })
    }


  submitSelectedGame = (game) => {
    let newPoints = this.props.user.betting_points - game.points_allocated
    if (this.props.isLoggedIn){
      if (newPoints >= 0){
        return (
          this.props.confirmUserData(), 
          this.props.submitGame(game),
          this.props.adjustPoints(newPoints),
          this.removeSelectedGame(game)
        )
      } else {
        alert("Not enough points for this selection")
    }
  }
}
      // console.log("game", game)
      // console.log("beting points", this.props.user.betting_points)
      // console.log("newPoints", this.props.user.betting_points - game.points_allocated)
    //   fetch(selectedGamesURL, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer ${localStorage.token}`
    //     },
    //     body: JSON.stringify(game)
    //   }).then(response=> response.json()
    //   ).then(console.log)
    // } else {
    //   alert("Please log in to submit your picks")
    // }
  
  //   if (this.props.isLoggedIn){
  //     if (this.props.user.betting_points - game.points_allocated >= 0){
  //       fetch(selectedGamesURL, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": `Bearer ${localStorage.token}`
  //         },
  //         body: JSON.stringify(game)
  //       })
  //       .then(response => response.json())
  //       .then(result => {
  //         if (result.message === "Accepted"){
  //           return (
  //             // alert("Selection submitted"),
  //             // this.removeSelectedGame(game),
  //             this.props.adjustUserBettingPoints(this.props.user.betting_points - game.points_allocated)
  //             // this.props.refreshProfile()
  //           )
  //         } else {
  //           alert("Failed to submit, try refreshing the page")
  //         } 
  //       })
  //     } else alert("Not enough betting points to make a pick.")
  //   } else {
  //     alert("Log in to submit your picks")
  //   }
  // }

    
    render() {
        return (
            <>
                <UpcomingGameListings currentLeague = {this.props.currentLeague} selectGame= {this.selectGame} />
                <SelectedGameListings selectedGames={this.state.selectedGames} submitSelectedGame={this.submitSelectedGame} removeSelectedGame={this.removeSelectedGame}/>
            </>
        )
    }
}


function mapStateToProps(state){
  return {
      isLoggedIn: state.isLoggedIn,
      user: state.user,

  }
}
function mapDispatchToProps(dispatch){
  return {
      confirmUserData: (user) => dispatch(confirmUserData(user)),
      submitGame: (game) => dispatch(submitGame(game)),
      adjustPoints: (points) => dispatch(adjustPoints(points)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingAndSelected)

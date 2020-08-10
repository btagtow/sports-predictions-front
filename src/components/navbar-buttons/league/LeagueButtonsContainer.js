import React from 'react'
import LeagueButton from'./LeagueButton'
import {connect} from 'react-redux'
import {  selectNFL, selectEPL, selectMLB, selectNBA, selectNHL } from '../../../redux/actions/leagues'

function LeagueButtons (props) {
    let leagueArr = [];
    
    for ( let league in props.leagues ){
        leagueArr.push(props.leagues[league])
    }
    
    const createButtons = () => {
        return leagueArr.map(league => {
            return <LeagueButton key={league.id} id={league.id} name={league.name} emoji={league.emoji} select={addSelect(league)} />
        })
    }
    
    const addSelect = league => {
        switch(league.id){
            case 4391 : 
                return props.selectNFL
            case 4328 : 
                return props.selectEPL
            case 4424 : 
                return props.selectMLB
            case 4380 : 
                return props.selectNHL
            case 4387 : 
                return props.selectNBA
            default: return null
        }
    }
    return (
        <div className="league-button-container">
            {createButtons()}
        </div>
    )
}

function mapStateToProps(state){
    return {
        leagues: state.leagues
    }
  }
  
  function mapDispatchToProps(dispatch){
    return {
        refreshProfile: (user) => dispatch({type: "REFRESH_PROFILE", payload: user}), 
        adjustUserBettingPoints: (points) => dispatch({type: "ADJUST_POINTS", payload: points}),
        selectNFL: () => dispatch(selectNFL()),
        selectNBA: () => dispatch(selectNBA()),
        selectNHL: () => dispatch(selectNHL()),
        selectEPL: () => dispatch(selectEPL()),
        selectMLB: () => dispatch(selectMLB()),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(LeagueButtons)
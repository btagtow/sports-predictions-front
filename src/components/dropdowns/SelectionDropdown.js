import React, { useState } from 'react';
import SelectedGames from '../containers/SelectedGames'

function LeagueDropdown(props) {
  const [isShown, setIsShown] = useState(false);


  return (
    <div 
    className="dropdown"         
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    >
      <button className="dropdown-button">
        Your picks:
      </button>
      {isShown && (
        <div className="selected-games-container">
          <SelectedGames selectedGames={props.selectedGames} removeSelectedGame={props.removeSelectedGame} />
        </div>
      )}
    </div>
  );
}

export default LeagueDropdown;
import React, { useState } from 'react';
import LeagueButtons from '../containers/LeagueButtonsContainer';

function LeagueDropdown(props) {
  const [isShown, setIsShown] = useState(false);


  return (
    <div 
    className="dropdown"         
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    >
      <button className="dropdown-button">
        Change League
      </button>
      {isShown && (
        <div>
          <LeagueButtons leagues={props.leagues} switchLeague = {props.switchLeague} />
        </div>
      )}
    </div>
  );
}

export default LeagueDropdown;
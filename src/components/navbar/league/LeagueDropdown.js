import React, { useState } from 'react';
import LeagueButtons from './LeagueButtonsContainer';

function LeagueDropdown(props) {
  const [isShown, setIsShown] = useState(false);

  const {leagues, switchLeague, resetProfile, isProfile, aboutOff } = props


  return (
    <div 
    className="dropdown"         
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    >
      <button className="dropdown-button">
        {!isProfile ? "Select League" : "Make Picks"}
      </button>
      {isShown && (
        <div>
          <LeagueButtons leagues={leagues} switchLeague = {switchLeague} resetProfile={resetProfile} aboutOff={aboutOff}/>
        </div>
      )}
    </div>
  );
}

export default LeagueDropdown;
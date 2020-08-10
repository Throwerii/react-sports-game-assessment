import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./game/Game";
import FrameImages from "./frameimages/FrameImages";
import Raccoon from './assets/images/raccoon.png'
import Squirrels from './assets/images/squirrel.png'
import Bunnies from './assets/images/bunny.png'
import Hounds from './assets/images/hound.png'



function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Raccoon
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: Squirrels
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: Bunnies
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: Hounds
  }

  return (
    <div className="App">
      
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}



export default App;

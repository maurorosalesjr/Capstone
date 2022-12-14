import React from 'react';
import Header from "./Header";
import GameControl from "./GameControl";
import Player from './Player';

function App(){
  return (
    <React.Fragment>
      <Header />
      <GameControl />
      <Player />
    </React.Fragment>
  );
}

export default App;

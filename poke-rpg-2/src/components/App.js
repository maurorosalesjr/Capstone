import React from 'react';
import Header from "./Header";
import GameControl from "./GameControl";
import Player from './Player';
import Combat from './Combat';


function App(){
  return (
    <React.Fragment>
      <Header />
      <GameControl />
      <Player />
      <Combat />
    </React.Fragment>
  );
}

export default App;

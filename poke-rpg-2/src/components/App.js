import React from 'react';
import Header from "./Header";
// import GameControl from "./GameControl";
import ChoosePokemon from "./Pokemon";

function App(){
  return (
    <React.Fragment>
      <Header />
      {/* <GameControl /> */}
      <ChoosePokemon />
    </React.Fragment>
  );
}

export default App;

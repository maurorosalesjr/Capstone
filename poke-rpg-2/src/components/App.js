import React from 'react';
import Header from "./Header";
import GameControl from "./GameControl";
import Player from './Player';
// import Combat from './Combat';
import overlay from "./../img/overlay.png"
import {background} from './sceneLoader'

const overlayImg = {
backgroundImage: `url(${overlay})`,
zIndex: "1",
position: "absolute",
top: "10%",
display: "block",
maxWidth: "90%",
width: "100%",
marginLeft: "5%",
}

function App(){
  return (
  <div className="photo">   
    <img src={overlay} style={overlayImg} />

    <React.Fragment>
      <Header />
      <GameControl />
      <Player />
      {/* <Combat /> */}
    </React.Fragment>
    </div>
  );
}

export default App;

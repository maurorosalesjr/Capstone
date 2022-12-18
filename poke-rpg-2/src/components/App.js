import React from 'react';
import Header from "./Header";
import GameControl from "./GameControl";
import Player from './Player';
// import Combat from './Combat';
import overlay from "./../img/overlay.png"

const overlayImg = {
backgroundImage: `url(${overlay})`,
zIndex: "2",
position: "absolute",
top: "0px",
display: "block",
width: "90%",
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

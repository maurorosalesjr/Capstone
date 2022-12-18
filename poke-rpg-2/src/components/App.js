import React from 'react';
import Header from "./Header";
import GameControl from "./GameControl";
import Player from './Player';
// import Combat from './Combat';
import overlay from "./../img/overlay.png"
import background from './sceneLoader'
import back from "./../img/room2.png"
const overlayImg = {
backgroundImage: `url(${overlay})`,
zIndex: "2",
position: "absolute",
top: "10%",
display: "block",
maxWidth: "90%",
width: "100%",
marginLeft: "5%",
}

const backgroundImages = {
zIndex: "3",
position: "absolute",
top: "10px",
display: "block",
width: "90%",
height: "auto",
marginLeft: "5%",
marginRight: "5%",
}

function App(){
  return (
  <div className="photo">   
    <img src={overlay} style={overlayImg} />
    <img src={back} style={backgroundImages} />
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

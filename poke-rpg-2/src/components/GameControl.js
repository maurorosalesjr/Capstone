import React, { useState  }  from "react";
import ChoosePokemon from "./Pokemon";
import Loot from "./Loot";


const buttonStyle = {
  left: "5%",
  zIndex: "4",
  marginTop: "50%",
  position: "absolute",
  border: "2px solid black",
  hight: "200px",
  maxWidth: "25%",
  width: "100%",
  display: "block",
}

function GameControl() {
  const [areaSearched, setAreaSearched] = useState(false);
  var searchPoke = <ChoosePokemon />;
  var searchLoot = <Loot />;
  var [conditionMet, setConditionMet] = useState(false);

  const searchArea = () => {
    var num = parseInt(Math.floor((Math.random() * 20) + 1));
    setAreaSearched(true);
    if(num === 20){
      return setConditionMet(true);
    }
  }

  return (
    
    <div>
    {!areaSearched ? (
      <button style={buttonStyle} onClick={searchArea}>Search Area</button>
    ) : (
      <div>
        <React.Fragment>
          {conditionMet ? searchLoot : searchPoke}
        </React.Fragment>
      </div>
    )}
    </div>
  )



}





export default GameControl;
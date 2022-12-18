import React, { useState  }  from "react";
import ChoosePokemon from "./Pokemon";
import Loot from "./Loot";


const buttonStyle = {
  marginLeft: "55%",
  marginRight: "5px",
  marginTop: "20%",
  zIndex: "6",
  position: "absolute",
  width: "100px",
  hight: "auto",
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
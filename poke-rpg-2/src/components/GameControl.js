import React, { useState  }  from "react";
import ChoosePokemon from "./Pokemon";
import Loot from "./Loot";


function GameControl() {
  const [areaSearched, setAreaSearched] = useState(false);
  var searchPoke = <ChoosePokemon />;
  var searchLoot = <Loot />;
  var [conditionMet, setConditionMet] = useState(false);

  const searchArea = () => {
    var num = parseInt(Math.floor((Math.random() * 20) + 1));
    console.log(num)
    setAreaSearched(true);
    if(num == 20){
      console.log(num)
      return setConditionMet(true);
    }
  }

  return (
    
    <div>
    {!areaSearched ? (
      <button onClick={searchArea}>Search Area</button>
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
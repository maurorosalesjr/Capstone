import React, { useState  }  from "react";
import ChoosePokemon from "./Pokemon";



function GameControl() {
  const [areaSearched, setAreaSearched] = useState(false);
  const callPokemon = ChoosePokemon.callPokemon;

  const searchArea = () => {
    var num = Math.floor((Math.random() * 20) + 1);
    console.log(num)
    setAreaSearched(true);
    return num
  }
  const searching = (num) => {
      if(num == 20) {
        console.log(num)
        return <h1>TREASURE!!</h1>
      } else {
        
        console.log(num)
        return(
          <React.Fragment>
            <ChoosePokemon />
          </React.Fragment>
        )
      }
    }
  


  return (
    
    <div>
    {!areaSearched ? (
      <button onClick={searchArea}>Search Area</button>
    ) : (
      searching()
      
    )}
    </div>
  )



}





export default GameControl;
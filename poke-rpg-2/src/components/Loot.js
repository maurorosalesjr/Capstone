import React, { useState  } from 'react';
import GameControl from './GameControl';

const looting = {
  marginLeft: "5%",
  marginRight: "5px",
  marginTop: "50%",
  zIndex: "6",
  position: "absolute",
  maxWidth: "25%",
  width: "100%",
  hight: "auto",
  display: "block",
  border: "2px solid black",
  backgroundColor: "burlywood",
}

const buttonStyle = {
  marginLeft: "5%",
  marginRight: "5px",
  marginTop: "37%",
  zIndex: "6",
  position: "absolute",
  width: "100px",
  hight: "auto",
  display: "block",
}

function Loot() {
  const [lootChosen, setLootChosen] = useState(false);
  const [loot, setLoot] = useState({
    lootNum: {Number},
  })
  const [lootClicked, setlootClicked] = useState(false);

  const lootGenerator = () => {
    var lootable = ['1 gold', 'handfull of dust', 'basic sword', '10 gold'],
    lootNum = Math.floor((Math.random() * lootable.length));
    console.log(lootNum)
    setLootChosen(true);
    return setLoot(lootable[lootNum]);
  }

  const nextRoom = () => {
    setLootChosen(false);
    setlootClicked(true);
    setLoot('')
  }

  var resetToGame = <React.Fragment>
                      <GameControl />
                    </React.Fragment>;


  return (
      <React.Fragment>
          <div style={looting} className="LootDisplaySection">
            {!lootChosen ? (
          <button style={buttonStyle} onClick={lootGenerator}>Look Around</button>
          ) : (
              <>
              <div>
              <p>You Found: {loot}</p>
              </div>
              {!lootClicked ? (
              <button style={buttonStyle} onClick={nextRoom}>NextRoom</button>
              ) : resetToGame}
              
              </>
            )}
          </div>
        </React.Fragment>
  )

}

export default Loot;
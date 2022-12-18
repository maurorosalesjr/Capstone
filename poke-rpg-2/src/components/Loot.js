import React, { useState  } from 'react';

const looting = {
  marginLeft: "55%",
  marginRight: "5px",
  marginTop: "20%",
  zIndex: "6",
  position: "absolute",
  width: "100px",
  hight: "auto",
  display: "block",
}

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

function Loot() {
  const [lootChosen, setLootChosen] = useState(false);
  const [loot, setLoot] = useState({
    lootNum: "",
  })


  const lootGenerator = () => {
    var lootable = ['1 gold', 'handfull of dust', 'basic sword', '10 gold'],
    lootNum = Math.floor((Math.random() * lootable.length));
    console.log(lootNum)
    setLootChosen(true);
    return setLoot(lootable[lootNum]);
  }

  return (
      <React.Fragment>
          <div style={looting} className="LootDisplaySection">
            {!lootChosen ? (
          <button style={buttonStyle} onClick={lootGenerator}>Look Around</button>
          ) : (
              <>
              <p>You Found: {loot}</p>
              </>
            )}
          </div>
        </React.Fragment>
  )

}

export default Loot;
import React, { useState  } from 'react';


function Loot() {
  const [lootChosen, setLootChosen] = useState(false);
  const [loot, setLoot] = useState({
    lootNum: "",
  })


  const lootGenerator = () => {
    var lootable = ['1 gold', 'handfule of dust', 'basic sword', '10 gold'],
    lootNum = Math.floor((Math.random() * lootable.length));
    console.log(lootNum)
    setLootChosen(true);
    return setLoot(lootable[lootNum]);
  }

  return (
      <React.Fragment>
          <div className="LootDisplaySection">
            {!lootChosen ? (
          <button onClick={lootGenerator}>Look Around</button>
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
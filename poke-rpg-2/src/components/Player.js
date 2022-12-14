import React, { useState  } from 'react';

function Player(){
  const [characterRolled, setCharacterRolled] = useState(false);
  const [character, setCharacter] = useState({
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    gold: "",
    weapon: "",
    armor: "",
    xp: "",
  })

  const rollCharacter = () => {
    setCharacter({
      hp: Math.floor(Math.random() * (150-100) + 100),
      attack: Math.floor((Math.random() * 20) + 1),
      defense: Math.floor((Math.random() * 20) + 1),
      speed: Math.floor(Math.random() * (100-50) + 50),
    });
    setCharacterRolled(true);
  }

  return(
    <React.Fragment>
      <div className="letsRoll">
        {!characterRolled ? (
          <button onClick={rollCharacter}>Roll Your Stats!</button>
        ) : (
          <>
          <ul>
            <li>HP: {character.hp}</li>
            <li>Attack: {character.attack}</li>
            <li>Defense: {character.defense}</li>
            <li>Speed: {character.speed}</li>
          </ul>
          </>
        )}
      </div>
    </React.Fragment>
  )

}

export default Player;
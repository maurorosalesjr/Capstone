import React, { useState  } from 'react';
import PropTypes from "prop-types";


function Player(props){
  const [characterRolled, setCharacterRolled] = useState(false);
  const [character, setCharacter] = useState({
    hp: {Number},
    attack: {Number},
    defense: {Number},
    speed: {Number},
    gold: {Number},
    weapon: {Number},
    armor: {Number},
    xp: {Number},
  })

  const rollCharacter = (event) => {
    event.preventDefault();
    setCharacter({
      hp: Math.floor(Math.random() * (150-100) + 100),
      attack: Math.floor(Math.random() * (50-30) + 30),
      defense: Math.floor(Math.random() * (50-20) + 20),
      speed: Math.floor(Math.random() * (100-50) + 50),
    });
    setCharacterRolled(true);
    console.log(character.hp);
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

Player.propTypes = {
  hp: PropTypes.string.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  gold: PropTypes.number,
  weapon: PropTypes.number,
  armor: PropTypes.number,
  xp: PropTypes.number,
}

export default Player;
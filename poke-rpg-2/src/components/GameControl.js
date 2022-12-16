import React, { useState  }  from "react";
import Loot from "./Loot";
import Axios from "axios";


function GameControl() {
  const [areaSearched, setAreaSearched] = useState(false);
  var [conditionMet, setConditionMet] = useState(false);
  const searchArea = () => {
    var num = parseInt(Math.floor((Math.random() * 20) + 1));
    setAreaSearched(true);
    if(num == 20){
      return setConditionMet(true);
    }
  }

  var searchLoot = <Loot />;

const [isPokeDead, setDeadPoke] = useState(false);
const [isPlayerDead, setDeadPlayer] = useState(false);

const [pokemonChosen, setPokemonChosen] = useState(false);
const [pokemon, setPokemon] = useState({
  nameP: "",
  hpP: {Number},
  attackP: {Number},
  defenseP: {Number},
  speedP: {Number},
  imgP: "",
  xpP: {Number},
});
const [characterRolled, setCharacterRolled] = useState(false);
const [character, setCharacter] = useState({ setCharacter.map(hp, attack, defense, speed, gold, weapon, armor, xp) =>
  hp: {Number},
  attack: {Number},
  defense: {Number},
  speed: {Number},
  gold: {Number},
  weapon: {Number},
  armor: {Number},
  xp: {Number},
});

const pokemonNum =  Math.floor((Math.random() * 151) + 1);

const callPokemon = () => {
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`).then(
    (response) => {
      setPokemon({
        nameP: response.data.name,
        hpP: response.data.stats[0].base_stat,
        attackP: response.data.stats[1].base_stat,
        defenseP: response.data.stats[2].base_stat,
        speedP: response.data.stats[5].base_stat,
        imgP: response.data.sprites.front_default,
        xpP: response.data.base_experience,
      });
      setPokemonChosen(true);
    }
  );
};

const rollCharacter = () => {
  setCharacter({
    hp: Math.floor(Math.random() * (150-100) + 100),
    attack: Math.floor(Math.random() * (50-30) + 30),
    defense: Math.floor(Math.random() * (50-20) + 20),
    speed: Math.floor(Math.random() * (100-50) + 50),
  });
  setCharacterRolled(true);
}

const [activePlayer, setActivePlayer] = useState(character);
const [activePoke, setActivePoke] = useState(pokemon);
const damage = (character.attack + character.weapon) - pokemon.defenseP;
const damageP = (pokemon.attackP - character.defense);
const mitigation = (character.defense + character.armor);
const combatTime = (
  <div className='combatTime'>
  <p>Your Remaining HP: {character.hp}</p>
  <p>{pokemon.nameP} Remaing HP: {pokemon.hpP}</p>
</div>
)

function endTurn(){
  return  <p>You survived the attack, your hp is now {character.hp}</p>;
};
function victory(){
  return <p>Congrats! you have defeated {pokemon.nameP} for {pokemon.xpP}</p>;
};
function defeat(){
  return <p>Congrats! You Died!</p>;
};


if(character.hp < 1){
  setDeadPlayer(true);
}
if(pokemon.hpP < 1){
  setDeadPoke(true);
}

function takeDamage(hp, mitigation, damageP) 
  { return activePlayer(hp = mitigation - damageP);}

function giveDamage(hpP, damage) 
  { return activePoke(hpP = hpP - damage);}


  const hit = () => {
    var results = [];

    if(damage < 1) {
      damage = 1;
    }
    if(damageP < 1){
      damage = 1;
    }

    if(character.speed > pokemon.speedP){
      giveDamage();
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (isPokeDead ?  victory() : takeDamage())
      setActivePoke(pokemon.hpP);
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (isPlayerDead ? defeat() : endTurn())
      setActivePlayer(character.hp);
    } else if(pokemon.speedP > character.speed){
      takeDamage();
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (isPlayerDead ? defeat() : giveDamage())
      setActivePlayer(character.hp);
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (isPokeDead ? victory() : endTurn())
      setActivePoke(character.hpP);
    }console.log(character.hp);
    return results;
};

  return (
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
      <div>
      {!areaSearched && characterRolled ? (
        <button onClick={searchArea}>Search Area</button>
      ) : (
        <div>
            {conditionMet ? searchLoot : combatTime}
        </div>
      )}
      </div>
      <div className="DisplaySection">
    {!pokemonChosen ? (
    <button onClick={callPokemon}>Reveal Pokemon</button>
    ) : (
        <>
        <img src={pokemon.imgP} />
        <h4>{pokemon.nameP}</h4>
        <ul>
          <li>HP: {pokemon.hpP}</li>
          <li>Attack: {pokemon.attackP}</li>
          <li>Defense: {pokemon.defenseP}</li>
          <li>Speed: {pokemon.speedP}</li>
          <li>{pokemon.xpP}</li>
        </ul>
        </>
      )}
  </div>
  <button onClick={hit}>ATTACK!!!!</button>


      {/* ---------------- */}

    </React.Fragment>
  )


}











export default GameControl;
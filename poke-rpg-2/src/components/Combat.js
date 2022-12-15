import React, { useState  } from 'react';
import Player from './Player';
import ChoosePokemon from './Pokemon';

function Combat(){
const [isPokeDead, setDeadPoke] = useState(false);
const [isPlayerDead, setDeadPlayer] = useState(false);
const [activePlayer, setActivePlayer] = useState(Player.character);
const [activePoke, setActivePoke] = useState(ChoosePokemon.pokemon);
const name = ChoosePokemon.name;
const hpP = parseInt(ChoosePokemon.hpP);
const attackP = parseInt(ChoosePokemon.attackP);
const defenseP = parseInt(ChoosePokemon.defenseP);
const speedP = parseInt(ChoosePokemon.speedP);
const hp = parseInt(Player.hp);
console.log(hp.value);
const attack = parseInt(Player.attack);
const defense = parseInt(Player.defense);
const speed = parseInt(Player.speed);
const armor = parseInt(Player.armor);
const weapon = parseInt(Player.weapon);
console.log(hp);
const damage = (attack + weapon) - defenseP;
const damageP = (attackP - defense);
const mitigation = (defense + armor);


function endTurn(){return  <p>You survived the attack, your hp is now {hp}</p>;};
function victory() {return <p>Congrats! you have defeated {ChoosePokemon.name} for {ChoosePokemon.xpP}</p>;};
function defeat() {return <p>Congrats! You Died!</p>;};


if(hp < 1){
  setDeadPlayer(true);
}
if(hpP < 1){
  setDeadPoke(true);
}

function takeDamage(hp, mitigation, damageP) { return activePlayer(hp = mitigation - damageP);}
function giveDamage(hpP, damage) { return activePoke(hpP = hpP - damage);}


  const hit = () => {
    var results = [];

    if(damage < 1) {
      damage = 1;
    }
    if(damageP < 1){
      damage = 1;
    }

    if(speed > speedP){
      giveDamage();
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (isPokeDead ?  victory() : takeDamage())
      setActivePoke(hpP);
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (isPlayerDead ? defeat() : endTurn())
      setActivePlayer(hp);
    } else if(speedP > speed){
      takeDamage();
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (isPlayerDead ? defeat() : giveDamage())
      setActivePlayer(hp);
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (isPokeDead ? victory() : endTurn())
      setActivePoke(hpP);
    }console.log(hp.value);
    return results;
};

  return (
    <React.Fragment>
      <div className='combatTime'>
        <button onClick={hit}>ATTACK!!!!</button>
        <p>Your Remaining HP: {hp}</p>
        <p>{name} Remaing HP: {hpP}</p>
      </div>
    </React.Fragment>
  )


}

export default Combat;
import React, { useState  } from 'react';
import Player from './Player';
import ChoosePokemon from './Pokemon';
import PropTypes from "prop-types";

class Combat extends React.Component{

constructor(props){
  super(props);
  this.state = {
  pokemon: props.ChoosePokemon,
  player: props.Player,
  isPokeDead: false,
  isPlayerDead: false,
  name: props.nameP,
  hpP: parseInt(props.hpP),
  attackP: parseInt(props.attackP),
  defenseP: parseInt(props.defenseP),
  speedP: parseInt(props.speedP),
  hp: parseInt(props.hp),
  attack: parseInt(props.attack),
  defense: parseInt(props.defense),
  speed: parseInt(props.speed),
  armor: parseInt(props.armor),
  weapon: parseInt(props.weapon),
    };
  // this.handleClick = this.handleClick.bind(this);
}  
// const [isPokeDead, setDeadPoke] = useState(false);
// const [isPlayerDead, setDeadPlayer] = useState(false);
// const [activePlayer, setActivePlayer] = useState(Player.character);
// const [activePoke, setActivePoke] = useState(ChoosePokemon.pokemon);


// damage = (attack + weapon) - defenseP;
// damageP = (attackP - defense);
// const mitigation = (defense + armor);



endTurn = (props) => {return  <p>You survived the attack, your hp is now {props.Player.hp}</p>;};
victory = (props) => {return <p>Congrats! you have defeated {ChoosePokemon.nameP} for {ChoosePokemon.xpP}</p>;};
defeat = (props) => {return <p>Congrats! You Died!</p>;};

deathCheck = (props) =>
{ const hp = props.Player.hp;
  const hpP = props.ChoosePokemon.hpP
  if(hp < 1){
  this.state.isPlayerDead(true);
}
if(hpP < 1){
  this.state.isPokeDead(true);
}}

takeDamage = (props) => { 
  const mitigation = (props.Player.defense + props.Player.armor);
  const damageP = (props.ChoosePokemon.attackP - props.Player.defense);
  const player = this.state.player(player);
  const damageFormula = (props.Player.hp = mitigation - damageP);
  const newCharacter = this.state.player.concat(damageFormula)
    this.setState({
      player: newCharacter,
    });
    console.log(props.Player.hp)
}

giveDamage = (props) => { 
  const damage = (props.Player.attack + props.Player.weapon) - props.ChoosePokemon.defenseP;
  const pokemon =  this.state.choosePokemon(pokemon);
  const damageFormulaP = (props.ChoosePokemon.hpP = props.ChoosePokemon.hpP - damage);
  const newPokemon = this.state.pokemon.concat(damageFormulaP)
    this.setState({
      pokemon: newPokemon,
    });
    console.log(this.state.hp)
}


hit = (props) => {
    var results = [];
    const damage = (props.attack + props.weapon) - (props.defenseP);
    const damageP = (props.attackP - props.defense);

    if(damage < 1) {
      damage = 1;
    }
    if(damageP < 1){
      damage = 1;
    }

    if(props.speed > props.speedP){
      this.giveDamage();
      this.deathCheck();
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (props.isPokeDead ?  this.victory() : this.takeDamage())
      this.setState({
        pokemon: props.ChoosePokemon.hpP,
      });
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (props.isPlayerDead ? this.defeat() : this.endTurn())
      this.setState({
        player: props.Player.hp,
      })
    } else if(props.speedP > props.speed){
      this.takeDamage();
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (props.isPlayerDead ? this.defeat() : this.giveDamage())
      this.setState({
        player: props.Player.hp,
      })
      /*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
      (props.isPokeDead ? this.victory() : this.endTurn())
      this.setState({
        pokemon: props.ChoosePokemon.hpP
      });
    }console.log(props.hp);

}

render(){

  return (
    <React.Fragment>
      <div className='combatTime'>
        <button onClick={this.state.hit}>ATTACK!!!!</button>
        <p>Your Remaining HP: {this.state.hp}</p>
        <p>{this.state.name} Remaing HP: {this.state.hpP}</p>
      </div>
    </React.Fragment>
  );
  }

}

export default Combat;
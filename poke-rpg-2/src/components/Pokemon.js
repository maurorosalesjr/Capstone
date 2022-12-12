import React, { useState  } from 'react';
import Axios from "axios";





function ChoosePokemon() {
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    img: "",
  })

  const pokemonNum =  Math.floor((Math.random() * 151) + 1);


  const callPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`).then(
      (response) => {
        setPokemon({
          name: response.data.name,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          speed: response.data.stats[5].base_stat,
          img: response.data.sprites.front_default,
        });
        setPokemonChosen(true);
      }
    );
  };




    

    
      return (
        <React.Fragment>
          <div className="DisplaySection">
            {!pokemonChosen ? (
          <button onClick={callPokemon}>Reveal Pokemon</button>
          ) : (
              <>
              <img src={pokemon.img} />
              <ul>
                <li>{pokemon.name}</li>
                <li>HP: {pokemon.hp}</li>
                <li>Attack: {pokemon.attack}</li>
                <li>Defense: {pokemon.defense}</li>
                <li>Speed: {pokemon.speed}</li>
              </ul>
              </>
            )}
          </div>
        </React.Fragment>
      );
}
export default ChoosePokemon;
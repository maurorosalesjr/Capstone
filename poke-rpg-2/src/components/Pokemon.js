import React, { useState  } from 'react';
import Axios from "axios";
import PropTypes from "prop-types";

function ChoosePokemon(props) {
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    nameP: "",
    hpP: {Number},
    attackP: {Number},
    defenseP: {Number},
    speedP: {Number},
    imgP: "",
    xpP: {Number},
  })

  const pokemonNum =  Math.floor((Math.random() * 151) + 1);

  const callPokemon = (event) => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`).then(
      (response) => { 
        event.preventDefault();
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

      return (
        <React.Fragment>
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
        </React.Fragment>
      );
}

ChoosePokemon.propTypes = {
  nameP: PropTypes.string.isRequired,
  hpP: PropTypes.string.isRequired,
  attackP: PropTypes.number.isRequired,
  defenseP: PropTypes.number.isRequired,
  speedP: PropTypes.number.isRequired,
  imgP: PropTypes.string.isRequired,
  xp: PropTypes.number.isRequired,
  callPokemon: PropTypes.func,

}
export default ChoosePokemon;
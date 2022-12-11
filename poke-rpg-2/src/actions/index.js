import * as c from './ActionTypes';

export const getPokemonsSuccess = (pokemons) => ({
  type: c.GET_POKEMON_SUCCESS,
  pokemons
});

export const getPokemonsFailure = (error) => ({
  type: c.GET_POKEMON_FAILURE,
  error
});
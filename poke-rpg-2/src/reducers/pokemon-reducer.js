import * as c from '../actions/ActionTypes';

const pokemonsReducer = (state, action) => {
  switch (action.type) {
    case c.GET_POKEMON_SUCCESS:
      return {
        ...state, 
        isLoaded: true,
        pokemons: action.pokemons
      };
    case c.GET_POKEMON_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default pokemonsReducer;
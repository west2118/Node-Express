import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
  },
  reducers: {
    replacePokemon(state, action) {
      state.pokemons = action.payload;
    },
    addPokemon(state, action) {
      const newPokemon = { id: state.pokemons.length + 1, ...action.payload };
      state.pokemons.push(newPokemon);
    },
  },
});

export const { replacePokemon, addPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;

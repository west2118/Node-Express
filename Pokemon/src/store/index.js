import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../store/pokemonSlice";

const store = configureStore({
  reducer: { pokemon: pokemonReducer },
});

export default store;

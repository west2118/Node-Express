import React, { useEffect } from "react";
import PokemonItem from "./PokemonItem";
import { useSelector } from "react-redux";

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemon.pokemons);

  return (
    <div className="font-[sans-serif]">
      <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {pokemons &&
            pokemons
              .map((pokemon) => (
                <PokemonItem key={pokemon.id} pokemon={pokemon} />
              ))
              .slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;

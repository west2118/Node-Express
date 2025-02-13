import React from "react";
import { Link } from "react-router-dom";

const PokemonItem = ({ pokemon }) => {
  return (
    <Link
      to={`/pokemons/${pokemon.id}`}
      className="bg-gray-800 px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={pokemon.image}
          className="w-60 h-60 rounded-full object-cover"
        />
        <div className="mt-6 text-center">
          <p className="text-base text-gray-300 font-bold uppercase">
            {pokemon.name}
          </p>
          <h3 className="text-white text-base mt-3 leading-relaxed">
            {pokemon.description}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default PokemonItem;

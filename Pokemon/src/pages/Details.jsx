import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const pokemons = useSelector((state) => state.pokemon.pokemons || []);

  if (!pokemons.length) {
    return <h1 className="text-white text-xl">Loading Pokémon data...</h1>;
  }

  const pokemon = pokemons.find((item) => Number(item.id) === Number(id));

  if (!pokemon) {
    return <h1 className="text-white text-xl">Pokemon not found...</h1>;
  }

  return (
    <div className="flex-col p-6 h-screen flex items-center justify-center bg-gradient-to-b from-orange-300 to-red-500">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl w-96 transform hover:scale-105 transition duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">{`${pokemon.name} #${pokemon.id}`}</h2>
          <p className="text-gray-600 mt-1">{`Weight: ${pokemon.weight} | Height: ${pokemon.height}`}</p>
          <motion.img
            src={pokemon.image}
            alt="charizard sprite"
            className="w-36 h-36 mx-auto my-4 drop-shadow-lg"
            whileHover={{ scale: 1.1 }}
          />
          <div className="flex justify-center gap-2">
            {(Array.isArray(pokemon.types)
              ? pokemon.types.map((typeObj) => typeObj.name) // If it's an array of objects
              : pokemon.types?.name?.split(", ")
            ) // If it's a string inside an object
              ?.map((type, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-red-600 text-white rounded-full text-sm shadow-md">
                  {type}
                </span>
              ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-center text-gray-800">
            Base Stats
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            {Object.entries(pokemon?.stats || {}).map(([key, value], index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-100 p-2 rounded-md shadow-sm">
                <span>{key}</span>
                <span className="font-bold text-gray-900">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Details;

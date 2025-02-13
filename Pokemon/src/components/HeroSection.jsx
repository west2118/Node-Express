import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-400 via-red-500 to-orange-600 px-6 sm:py-20 py-10 font-[sans-serif]">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">
          Welcome to the Pokémon Database
        </h1>
        <p className="text-lg mb-12">
          Search for your favorite Pokémon by name or ID and explore their
          stats, types, and abilities.
        </p>
        <Link
          to="/pokemons"
          className="bg-red-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
          Start Searching
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

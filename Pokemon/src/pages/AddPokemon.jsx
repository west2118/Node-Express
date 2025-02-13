import React, { useState } from "react";
import { API_URL } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../store/pokemonSlice";

const AddPokemon = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    base_experience: "",
    image: "",
    types: "",
    description: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed_attack: "",
      speed_defense: "",
      speed: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      stats: { ...prevData.stats, [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields have values
    if (
      !formData.name ||
      !formData.height ||
      !formData.weight ||
      !formData.base_experience ||
      !formData.image ||
      !formData.types ||
      !formData.description
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    for (const key in formData.stats) {
      if (!formData.stats[key]) {
        alert("Please fill in all stats before submitting.");
        return;
      }
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pokemon: formData }),
      });

      if (response.ok) {
        alert("Pokémon added successfully!");
        setFormData({
          name: "",
          height: "",
          weight: "",
          base_experience: "",
          image: "",
          types: "",
          description: "",
          stats: {
            hp: "",
            attack: "",
            defense: "",
            speed_attack: "",
            speed_defense: "",
            speed: "",
          },
        });
      }

      dispatch(addPokemon(formData));
      console.log(pokemons);
    } catch (error) {
      console.log("Error adding data:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg my-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Pokémon Form
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Salamence"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Height
          </label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="15"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Weight
          </label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="1026"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Base Experience
        </label>
        <input
          type="number"
          name="base_experience"
          value={formData.base_experience}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="270"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Image URL"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png"
          className="w-24 h-24 mx-auto mt-3"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Types</label>
        <input
          type="text"
          name="types"
          value={formData.types}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="dragon, flying"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="w-full mt-1 p-2 border rounded-lg"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="2"
          placeholder="Salamence’s dream of flying came true..."></textarea>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Base Stats</h3>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {[
            "hp",
            "attack",
            "defense",
            "speed_attack",
            "speed_defense",
            "speed",
          ].map((stat) => (
            <div key={stat}>
              <label className="block text-sm text-gray-700">
                {stat.replace("_", " ")}
              </label>
              <input
                type="number"
                name={stat}
                value={formData.stats[stat]}
                onChange={handleStatsChange}
                className="w-full p-2 border rounded-lg"
                placeholder="0"
              />
            </div>
          ))}
        </div>
      </div>

      <button className="w-full mt-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Add Pokémon
      </button>
    </form>
  );
};

export default AddPokemon;

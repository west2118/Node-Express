const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const pokemons = [
  {
    id: 1,
    name: "Raichu",
    height: 4,
    weight: 60,
    base_experience: 112,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    types: { name: "electric" },
    description:
      "Raichu stores electricity in its cheeks and can discharge powerful shocks.",
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      speed_attack: 50,
      speed_defense: 50,
      speed: 90,
    },
  },
  {
    id: 2,
    name: "Charizard",
    height: 17,
    weight: 905,
    base_experience: 240,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    types: { name: "fire, flying" },
    description:
      "Charizard flies around the sky in search of powerful opponents and breathes intense flames.",
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      speed_attack: 109,
      speed_defense: 85,
      speed: 100,
    },
  },
  {
    id: 3,
    name: "Bulbasaur",
    height: 7,
    weight: 69,
    base_experience: 64,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: { name: "grass, poison" },
    description:
      "Bulbasaur can store energy by soaking up sunlight through the bulb on its back.",
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      speed_attack: 65,
      speed_defense: 65,
      speed: 45,
    },
  },
  {
    id: 4,
    name: "Pikachu",
    height: 4,
    weight: 60,
    base_experience: 112,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    types: { name: "electric" },
    description:
      "Pikachu releases electric discharges to protect itself and communicate with others.",
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      speed_attack: 50,
      speed_defense: 50,
      speed: 90,
    },
  },
  {
    id: 5,
    name: "Gengar",
    height: 15,
    weight: 405,
    base_experience: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    types: { name: "ghost, poison" },
    description:
      "Gengar lurks in the shadows and is known for its mischievous and eerie laughter.",
    stats: {
      hp: 60,
      attack: 65,
      defense: 60,
      speed_attack: 130,
      speed_defense: 75,
      speed: 110,
    },
  },
  {
    id: 6,
    name: "Jigglypuff",
    height: 5,
    weight: 55,
    base_experience: 95,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    types: { name: "normal, fairy" },
    description:
      "Jigglypuff's singing voice lulls its opponents to sleep effortlessly.",
    stats: {
      hp: 115,
      attack: 45,
      defense: 20,
      speed_attack: 45,
      speed_defense: 25,
      speed: 20,
    },
  },
  {
    id: 7,
    name: "Dragonite",
    height: 22,
    weight: 2100,
    base_experience: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    types: { name: "dragon" },
    description:
      "Despite its bulky appearance, Dragonite is a kind-hearted Pokémon that flies at high speeds.",
    stats: {
      hp: 91,
      attack: 134,
      defense: 95,
      speed_attack: 100,
      speed_defense: 100,
      speed: 80,
    },
  },
  {
    id: 8,
    name: "Eevee",
    height: 3,
    weight: 65,
    base_experience: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    types: { name: "normal" },
    description:
      "Eevee has an unstable genetic makeup, allowing it to evolve into multiple forms.",
    stats: {
      hp: 55,
      attack: 55,
      defense: 50,
      speed_attack: 45,
      speed_defense: 65,
      speed: 55,
    },
  },
  {
    id: 9,
    name: "Snorlax",
    height: 21,
    weight: 4600,
    base_experience: 189,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    types: { name: "normal" },
    description:
      "Snorlax sleeps most of the day and wakes up only to eat massive amounts of food.",
    stats: {
      hp: 160,
      attack: 110,
      defense: 65,
      speed_attack: 65,
      speed_defense: 110,
      speed: 30,
    },
  },
  {
    id: 10,
    name: "Lucario",
    height: 12,
    weight: 540,
    base_experience: 184,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    types: { name: "fighting" },
    description:
      "Lucario can sense the emotions of others by reading their aura waves.",
    stats: {
      hp: 70,
      attack: 110,
      defense: 70,
      speed_attack: 115,
      speed_defense: 70,
      speed: 90,
    },
  },
  {
    id: 11,
    name: "Blastoise",
    height: 16,
    weight: 855,
    base_experience: 239,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    types: { name: "water" },
    description:
      "Blastoise's water cannons are powerful enough to punch holes through thick steel.",
    stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      speed_attack: 85,
      speed_defense: 105,
      speed: 78,
    },
  },
  {
    id: 12,
    name: "Arcanine",
    height: 19,
    weight: 1550,
    base_experience: 194,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    types: { name: "fire" },
    description:
      "Arcanine is a legendary Pokémon known for its speed and bravery.",
    stats: {
      hp: 90,
      attack: 110,
      defense: 80,
      speed_attack: 100,
      speed_defense: 80,
      speed: 95,
    },
  },
  {
    id: 13,
    name: "Gyarados",
    height: 65,
    weight: 2350,
    base_experience: 189,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    types: { name: "water, flying" },
    description:
      "Gyarados is known for its fierce temper and destructive rampages.",
    stats: {
      hp: 95,
      attack: 125,
      defense: 79,
      speed_attack: 60,
      speed_defense: 100,
      speed: 81,
    },
  },
  {
    id: 14,
    name: "Machamp",
    height: 16,
    weight: 1300,
    base_experience: 253,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    types: { name: "fighting" },
    description:
      "Machamp’s four muscular arms allow it to throw powerful punches at an incredible speed.",
    stats: {
      hp: 90,
      attack: 130,
      defense: 80,
      speed_attack: 65,
      speed_defense: 85,
      speed: 55,
    },
  },
  {
    id: 15,
    name: "Alakazam",
    height: 15,
    weight: 480,
    base_experience: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    types: { name: "psychic" },
    description:
      "Alakazam’s brain constantly grows, making it one of the most intelligent Pokémon.",
    stats: {
      hp: 55,
      attack: 50,
      defense: 45,
      speed_attack: 135,
      speed_defense: 95,
      speed: 120,
    },
  },
  {
    id: 16,
    name: "Scizor",
    height: 18,
    weight: 1180,
    base_experience: 175,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    types: { name: "bug, steel" },
    description:
      "Scizor’s pincers are strong enough to crush any hard object with ease.",
    stats: {
      hp: 70,
      attack: 130,
      defense: 100,
      speed_attack: 55,
      speed_defense: 80,
      speed: 65,
    },
  },
  {
    id: 17,
    name: "Metagross",
    height: 16,
    weight: 5500,
    base_experience: 270,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    types: { name: "steel, psychic" },
    description:
      "Metagross has a supercomputer brain that can analyze its opponent’s moves instantly.",
    stats: {
      hp: 80,
      attack: 135,
      defense: 130,
      speed_attack: 95,
      speed_defense: 90,
      speed: 70,
    },
  },
  {
    id: 18,
    name: "Togekiss",
    height: 15,
    weight: 380,
    base_experience: 245,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    types: { name: "fairy, flying" },
    description:
      "Togekiss brings happiness and is known as a sign of peace and goodwill.",
    stats: {
      hp: 85,
      attack: 50,
      defense: 95,
      speed_attack: 120,
      speed_defense: 115,
      speed: 80,
    },
  },
  {
    id: 19,
    name: "Tyranitar",
    height: 20,
    weight: 2020,
    base_experience: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    types: { name: "rock, dark" },
    description:
      "Tyranitar is so powerful that it can bring down mountains with its sheer strength.",
    stats: {
      hp: 100,
      attack: 134,
      defense: 110,
      speed_attack: 95,
      speed_defense: 100,
      speed: 61,
    },
  },
  {
    id: 20,
    name: "Salamence",
    height: 15,
    weight: 1026,
    base_experience: 270,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    types: { name: "dragon, flying" },
    description:
      "Salamence’s dream of flying came true, and now it soars the skies, roaring fiercely.",
    stats: {
      hp: 95,
      attack: 135,
      defense: 80,
      speed_attack: 110,
      speed_defense: 80,
      speed: 100,
    },
  },
];

// Get all pokemons
app.get("/api/pokemons", (req, res) => {
  res.json(pokemons);
});

// Get specific pokemon
app.get("/api/pokemons/:id", (req, res) => {
  const pokemonId = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).json({ message: "Pokemon not found" });
  }
});

// Add pokemon
app.post("/api/pokemons", (req, res) => {
  const newPokemon = {
    id: pokemons.length + 1,
    name: req.body.pokemon.name,
    height: req.body.pokemon.height,
    weight: req.body.pokemon.weight,
    base_experience: req.body.pokemon.base_experience,
    image: req.body.pokemon.image,
    types: { name: req.body.pokemon.types },
    description: req.body.pokemon.description,
    stats: {
      hp: req.body.pokemon.stats.hp,
      attack: req.body.pokemon.stats.attack,
      defense: req.body.pokemon.stats.defense,
      speed_attack: req.body.pokemon.stats.speed_attack,
      speed_defense: req.body.pokemon.stats.speed_defense,
      speed: req.body.pokemon.stats.speed,
    },
  };

  pokemons.push(newPokemon);
  res.status(201).json(newPokemon);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

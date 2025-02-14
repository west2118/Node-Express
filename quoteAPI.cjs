const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const quotes = [
  {
    id: 1,
    quote: "Rise with purpose, sleep with satisfaction.",
    philosopher: "Elias Carter",
  },
  {
    id: 2,
    quote: "The mind is a battlefield; choose your weapons wisely.",
    philosopher: "Felix Monroe",
  },
  {
    id: 3,
    quote: "Greatness is forged in the fire of persistence.",
    philosopher: "Liam Calloway",
  },
  {
    id: 4,
    quote: "A silent thinker is louder than a noisy crowd.",
    philosopher: "Victor Hale",
  },
  {
    id: 5,
    quote: "Success whispers only to those who listen beyond doubt.",
    philosopher: "Naomi Sterling",
  },
  {
    id: 6,
    quote: "Every step forward leaves a footprint of courage.",
    philosopher: "Dorian Wells",
  },
  {
    id: 7,
    quote: "Strength is not in force, but in the will to endure.",
    philosopher: "Hugo Sinclair",
  },
  {
    id: 8,
    quote: "Dreams bloom where determination waters them.",
    philosopher: "Isla Harrington",
  },
  {
    id: 9,
    quote: "The soul speaks louder in silence.",
    philosopher: "Lucian Voss",
  },
  {
    id: 10,
    quote: "A moment of bravery can rewrite a lifetime.",
    philosopher: "Rowan Mercer",
  },
  {
    id: 11,
    quote: "Knowledge is a lantern, but wisdom lights the way.",
    philosopher: "Theo Langford",
  },
  {
    id: 12,
    quote: "The river carves stone not by strength, but by persistence.",
    philosopher: "Cassandra Vale",
  },
  {
    id: 13,
    quote: "A caged mind will never taste the sky.",
    philosopher: "Orion Graves",
  },
  {
    id: 14,
    quote: "Fear fades when action takes the stage.",
    philosopher: "Julian Blackwood",
  },
  {
    id: 15,
    quote: "The stars don't compete, they simply shine.",
    philosopher: "Elara Bennett",
  },
  {
    id: 16,
    quote: "True wealth is measured in moments, not coins.",
    philosopher: "Gideon Cross",
  },
  {
    id: 17,
    quote: "Mountains bow to those who never stop climbing.",
    philosopher: "Seraphina Wilde",
  },
  {
    id: 18,
    quote: "A quiet victory is still a victory.",
    philosopher: "Everett Vaughn",
  },
  {
    id: 19,
    quote: "The pen that writes your story is held by your choices.",
    philosopher: "Alistair Drake",
  },
  {
    id: 20,
    quote: "Time rewards those who respect its rhythm.",
    philosopher: "Vivian Archer",
  },
];

// Get All Quotes
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

// Get specific quote
app.get("/api/quotes/:id", (req, res) => {
  const quoteId = parseInt(req.params.id);
  const quote = quotes.find((quote) => quote.id === quoteId);

  if (quote) {
    res.json(quote);
  } else {
    res.status(404).json({ message: "Quote not found" });
  }
});

// Add Quote
app.post("/api/quotes", (req, res) => {
  if (!req.body.quote && !req.body.philosopher) {
    return res.status(404).json({ message: "Quote and Philosopher required!" });
  }

  const newQuote = {
    id: quotes.length + 1,
    quote: req.body.quote,
    philosopher: req.body.philosopher,
  };

  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

// Delete Quote
app.delete("/api/quotes/:id", (req, res) => {
  const quoteId = parseInt(req.params.id);
  const index = quotes.findIndex((item) => item.id === quoteId);

  if (index === -1) {
    res.status(404).json({ message: "Quote not found" });
  }

  quotes.slice(index, 1);
  res.status(201).json({ message: "Quote deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

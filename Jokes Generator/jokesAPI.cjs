const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const jokes = [
  {
    id: 1,
    joke: "Why don’t skeletons fight each other? They don’t have the guts.",
  },
  {
    id: 2,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  { id: 3, joke: "Why don’t eggs tell jokes? They might crack up." },
  {
    id: 4,
    joke: "Why couldn’t the bicycle stand up by itself? It was two-tired.",
  },
  {
    id: 5,
    joke: "What did one wall say to the other? 'I’ll meet you at the corner!'",
  },
  {
    id: 6,
    joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 7,
    joke: "Why can’t your nose be 12 inches long? Because then it would be a foot!",
  },
  {
    id: 8,
    joke: "What did the ocean say to the shore? Nothing, it just waved.",
  },
  { id: 9, joke: "How does a snowman get around? By riding an 'icicle'." },
  {
    id: 10,
    joke: "Why do cows have hooves instead of feet? Because they lactose.",
  },
  {
    id: 11,
    joke: "Why did the math book look sad? Because it had too many problems.",
  },
  { id: 12, joke: "What do you call fake spaghetti? An impasta!" },
  {
    id: 13,
    joke: "Why did the tomato turn red? Because it saw the salad dressing!",
  },
  { id: 14, joke: "What do you call a bear with no teeth? A gummy bear!" },
  { id: 15, joke: "Why did the coffee file a police report? It got mugged." },
  {
    id: 16,
    joke: "Why don’t some fish play piano? Because you can’t tuna fish!",
  },
  {
    id: 17,
    joke: "What do you call a factory that makes good products? A satisfactory.",
  },
  { id: 18, joke: "Why did the orange stop rolling? It ran out of juice." },
  {
    id: 19,
    joke: "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels.",
  },
  {
    id: 20,
    joke: "Why couldn’t the leopard hide? Because he was always spotted.",
  },
];

// Fetch all API
app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

// Fetch spefic API
app.get("/api/jokes/:id", (req, res) => {
  const jokeId = req.params.id;
  const joke = jokes.find((joke) => joke.id === jokeId);

  if (joke) {
    res.json(joke);
  } else {
    res.status(404).json({ message: "Could not find joke!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

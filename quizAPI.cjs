const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const quiz_questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: ["Paris", "Berlin", "Madrid", "Rome"],
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Jupiter", "Saturn"],
  },
  {
    id: 3,
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    answers: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    answers: ["Au", "Ag", "Fe", "Pb"],
  },
];

// Fetch all questions
app.get("/api/quiz", (req, res) => {
  res.json(quiz_questions);
});

// Fetch specific questions
app.get("/api/quiz/:id", (req, res) => {
  const quizId = req.params.id;
  const quiz = quiz_questions.find((item) => item.id === parseInt(quizId));

  if (quiz) {
    res.json(quiz);
  } else {
    res.status(404).json({ message: "Could not find question" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

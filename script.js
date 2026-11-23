const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const answerContainer = document.getElementById("answer-container");
const currenQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score-value");
const maxScoreSpan = document.getElementById("max-score-value");
const resultMessage = document.getElementById("result-message");
const progressBar = document.getElementById("progress-bar");
const restartButton = document.getElementById("restart-button");

const quizQuestions = [
  {
    question: "Which keyword is used to declare a constant variable?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false },
    ],
  },
  {
    question: "What does console.log(typeof 'Hello') print?",
    answers: [
      { text: "number", correct: false },
      { text: "text", correct: false },
      { text: "undefined", correct: false },
      { text: "string", correct: true },
    ],
  },
  {
    question: "Which method selects an HTML element by its id?",
    answers: [
      { text: "document.getClass()", correct: false },
      { text: "document.getElementById()", correct: true },
      { text: "document.findId()", correct: false },
      { text: "document.selectTag()", correct: false },
    ],
  },
  {
    question: "Which method loops through every item in an array?",
    answers: [
      { text: "toString()", correct: false },
      { text: "push()", correct: false },
      { text: "concat()", correct: false },
      { text: "forEach()", correct: true },
    ],
  },
  {
    question: "What does the === operator do?",
    answers: [
      { text: "Assigns a value", correct: false },
      { text: "Checks both value and type are equal", correct: true },
      { text: "Adds two values", correct: false },
      { text: "Checks only the value", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

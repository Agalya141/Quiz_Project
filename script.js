const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const answerContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("current-score");
const finalScoreSpan = document.getElementById("final-score-value");
const maxScoreSpan = document.getElementById("max-score-value");
const resultMessage = document.getElementById("result-message");
const progressBar = document.getElementById("progressBar");
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

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answerDisabled = false;
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  scoreSpan.textContent = score;
  showQuestion();
}
function showQuestion() {
  answerDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  questionElement.textContent = currentQuestion.question;
  const progressPercent =
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  answerContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.addEventListener("click", selectAnswer);
    const selectedButton = button;
    selectedButton.dataset.correct = answer.correct;
    answerContainer.appendChild(button);
  });
}
function selectAnswer(event) {
  if (answerDisabled) return;
  answerDisabled = true;
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  Array.from(answerContainer.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("wrong");
    }
  });
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}
function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreSpan.textContent = score;
  if (score === quizQuestions.length) {
    resultMessage.textContent = "Excellent! You got all questions right!";
  } else if (score >= quizQuestions.length / 2) {
    resultMessage.textContent = "Good job! You scored above average.";
  } else {
    resultMessage.textContent = "Keep trying! You can do better next time.";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}

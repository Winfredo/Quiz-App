const quizInfo = [
  {
    question: "What is my name?",
    a: "Winfred",
    b: "Kofi",
    c: "Ama",
    d: "Kojo",
    correct: "a",
  },
  {
    question: "Which language runs in a browser?",
    a: "Html",
    b: "Javascript",
    c: "Css",
    d: "Python",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext maths out lane",
    b: "Hypertext makeover lot",
    c: "Hypertext markup language",
    d: "Hypertext markup lantern",
    correct: "c",
  },
  {
    question: "What is my age",
    a: 6,
    b: 4,
    c: 2,
    d: 8,
    correct: "c"
  }
];

const quiz = document.getElementById('quiz');
const AnswerEl = document.querySelectorAll('.answer');
const QuestionEl = document.getElementById('question-header');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const SubmitEl = document.getElementById('submit-el');

let currentQuiz = 0;
let score = 0;
loadQuiz()

function loadQuiz() {
  deselectAnswers();

  const currentQuizInfo = quizInfo[currentQuiz];

  QuestionEl.innerText = currentQuizInfo.question;
  a_text.innerText = currentQuizInfo.a;
  b_text.innerText = currentQuizInfo.b;
  c_text.innerText = currentQuizInfo.c;
  d_text.innerText = currentQuizInfo.d;
}

function deselectAnswers() {
  AnswerEl.forEach(AnswerEl => AnswerEl.checked = false)
}

function getSelected() {
  let answer 
   AnswerEl.forEach(AnswerEl => {
    if (AnswerEl.checked) {
    answer = AnswerEl.id
    }
  })
  return answer
}

function Click() {
    const answer = getSelected()
if (answer === quizInfo[currentQuiz].correct) {
    score++
}

    currentQuiz++
 
if (currentQuiz < quizInfo.length){
    loadQuiz()
}else {
    quiz.innerHTML = `
    <h2> You have answered ${score}/ ${quizInfo.length} questions correctly.
    
    <button onclick="location.reload()">Reload</button>
    `
    
}
}

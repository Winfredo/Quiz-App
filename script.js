const quizInfo = [
  {
    question: "What is the capital of Senegal?",
    a: "Accra",
    b: "Dakar",
    c: "Cairo",
    d: "Lusaka",
    correct: "b"
  },
  {
    question: "What is the capital of Croatia?",
    a: "Zagreb",
    b: "Madrid",
    c: "Paris",
    d: "Berlin",
    correct: "a"
  },
  {
    question: "What is the capital of Zambia?",
    a: "Accra",
    b: "Berlin",
    c: "Lusaka",
    d: "Cairo",
    correct: "c"
  },
  {
    question: "What is the capital of France?",
    a: "Accra",
    b: "Madrid",
    c: "Paris",
    d: "Berlin",
    correct: "c"
  },
  {
    question: "What is the capital of Japan?",
    a: "Tokyo",
    b: "Beijing",
    c: "Seoul",
    d: "Bangkok",
    correct: "a"
  },
  {
    question: "What is the capital of Canada?",
    a: "Ottawa",
    b: "Toronto",
    c: "Vancouver",
    d: "Montreal",
    correct: "a"
  },
  {
    question: "What is the capital of Brazil?",
    a: "Rio de Janeiro",
    b: "Brasilia",
    c: "Sao Paulo",
    d: "Salvador",
    correct: "b"
  },
  {
    question: "What is the capital of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Brisbane",
    d: "Canberra",
    correct: "d"

  },
  {
    question: "What is the capital of Mexico?",
    a: "Mexico City",
    b: "Guadalajara",
    c: "Monterrey",
    d: "Cancun",
    correct: "a"
  },
  {
    question: " What is the capital of Italy?",
    a: "Milan",
    b: "Florence",
    c: "Rome",
    d: "Venice",
    correct: "c"
  },
  {
    question: " What is the capital of Egypt?",
    a: "Aswan",
    b: "Alexandria",
    c: "Luxor",
    d: "Cairo",
    correct: "d"
  },
  {
    question: " What is the capital of South Korea?",
    a: "Seoul",
    b: "Busan",
    c: "Incheon",
    d: "Daegu",
    correct: "a"
  },
  {
    question: " What is the capital of Ghana?",
    a: "Johannesburg",
    b: "Accra",
    c: "Cape Town",
    d: "Pretoria",
    correct: "b"
  },
  {
    question: " What is the capital of Russia?",
    a: "Moscow",
    b: "St. Petersburg",
    c: "Novosibirsk",
    d: "Vladivostok",
    correct: "a"
  },
  {
    question: " What is the capital of Argentina?",
    a: "Buenos Aires",
    b: " Cordoba",
    c: " Rosario",
    d: "Mendoza",
    correct: "a"
  },
  {
    question: " What is the capital of Germany?",
    a: "Berlin",
    b: "Munich",
    c: "Frankfurt",
    d: "Hamburg",
    correct: "a"
  },
  {
    question: " What is the capital of India?",
    a: "Kolkata",
    b: "Mumbai",
    c: "New Delhi",
    d: "Bangalore",
    correct: "c"
  },
  {
    question: " What is the capital of Nigeria?",
    a: "Lagos",
    b: "Abuja",
    c: "Kano",
    d: "Ibadan",
    correct: "b"
  },
  {
    question: " What is the capital of Turkey?",
    a: "Antalya",
    b: "Istabul",
    c: "Izmir",
    d: "Ankara",
    correct: "d"
  },
  {
    question: " What is the capital of Thailand?",
    a: "Chiang Mai",
    b: "Bangkok",
    c: "Phuket",
    d: "Pattaya",
    correct: "b"
  },
  {
    question: " What is the capital of Columbia?",
    a: " Bogota",
    b: "Medellin",
    c: "Cali",
    d: "Cartagena",
    correct: "a"
  },
  {
    question: " What is the capital of Saudi Arabia?",
    a: " Jeddah",
    b: "Riyadh",
    c: "Mecca",
    d: "Medina",
    correct: "b"
  },
];
const quiz = document.getElementById('quiz');
const AnswerEl = document.querySelectorAll('.answer');
const QuestionEl = document.getElementById('question-header');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const SubmitEl = document.getElementById('submit-el');
const initScreen = document.getElementById("initscreen")
const playground = document.getElementById("playground")
let currentQuiz = 0;
let score = 0;
function startQuiz()
{
  initScreen.classList.add("hidden")
  playground.classList.remove("hidden")
}

document.getElementById("start").addEventListener("click",startQuiz)
function generateRandomQuestions(numQuestions) {
  const selectedQuestions = [];
  const indices = [];
  while (selectedQuestions.length < numQuestions) {
    const randomIndex = Math.floor(Math.random() * quizInfo.length);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
      selectedQuestions.push(quizInfo[randomIndex]);
    }
  }
  return selectedQuestions;
}

const numQuestions = 10;
const randomQuestions = generateRandomQuestions(numQuestions);
console.log(randomQuestions);


function loadQuiz() {
  deselectAnswers();

  const currentQuizInfo = randomQuestions[currentQuiz];

  QuestionEl.innerText = currentQuizInfo.question;
  a_text.innerText = currentQuizInfo.a;
  b_text.innerText = currentQuizInfo.b;
  c_text.innerText = currentQuizInfo.c;
  d_text.innerText = currentQuizInfo.d;
}

loadQuiz()

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

SubmitEl.addEventListener('click', function(){
  const answer = getSelected() || null
  if(!answer)
  {
    alert("Invalid answer")
  }else{
    if (answer === quizInfo[currentQuiz].correct) {
      score++
      // play correct sound
  }else{
    // play error sound
  }
      currentQuiz++;
  if (currentQuiz < randomQuestions.length){
      loadQuiz()
  }else {
      quiz.innerHTML = `
      <h2> You have answered ${score}/ ${randomQuestions.length } questions correctly.
  
      <button onclick="location.reload()">Reload</button>
      `
    
  }
  }

})

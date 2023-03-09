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
    question: "Who won the first FIFA World Cup in 1930?",
    a: "Brazil",
    b: "Uruguay",
    c: "Argentina",
    d: "Germany",
    correct: "b"
    },
    {
    question: "What is the name of the ball used in official FIFA matches?",
    a: "Adidas Telstar",
    b: "Nike Ordem",
    c: "Puma Final",
    d: "Umbro Neo Pro",
    correct: "a"
    }, 
    {
    question: "Which country has won the most World Cup titles?",
    a: "Germany",
    b: "Brazil",
    c: "Italy",
    d: "Argentina",
    correct: "b"
    },
    {
    question: "Who is the all-time top scorer in the World Cup?",
    a: "Miroslav Klose",
    b: "Ronaldo",
    c: "Lionel Messi",
    d: "Pele",
    correct: "a"
    },
    {
    question: "Which player has won the most Ballon d'Or awards?",
    a: "Lionel Messi",
    b: "Cristiano Ronaldo",
    c: "Michel Platini",
    d: "Johan Cruyff",
    correct: "a"
    },
    {
    question: "Which club has won the most UEFA Champions League titles?",
    a: "Barcelona",
    b: "Manchester United",
    c: "AC Milan",
    d: "Real Madrid",
    correct: "d"
    },
    {
    question: "Who scored the 'Hand of God' goal in the 1986 World Cup?",
    a: "Diego Maradona",
    b: "Pele",
    c: "Lionel Messi",
    d: "Ronaldo",
    correct: "a"
    },
    {
    question: "Who is the current world record holder for the most goals scored in a single season?",
    a: "Lionel Messi",
    b: "Cristiano Ronaldo",
    c: "Gerd Muller",
    d: "Pelé",
    correct: "c"
    },
    {
    question: "Who is the oldest player to have ever played in a World Cup match?",
    a: "Roger Milla",
    b: "Faryd Mondragón",
    c: "Essam El-Hadary",
    d: "Dino Zoff",
    correct: "b"
    }, 
    {
    question: "Which country has won the most European Championships?",
    a: "Germany",
    b: "France",
    c: "Spain",
    d: "Italy",
    correct: "a"
    },
    {
    question: "Who is the all-time top scorer in the UEFA Champions League?",
    a: "Lionel Messi",
    b: "Cristiano Ronaldo",
    c: "Raul",
    d: "Karim Benzema",
    correct: "b"
    },
    {
    question: "Who is the youngest player to ever play in a World Cup match?",
    a: "Pele",
    b: "Diego Maradona",
    c: "Lionel Messi",
    d: "El Hadji Diouf",
    correct: "a"
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
    question: "Who is the author of the book 'To Kill a Mockingbird'?",
    a: "F. Scott Fitzgerald",
    b: "Harper Lee",
    c: "J.D. Salinger",
    d: "Ernest Hemingway",
    correct: "b"
  },
  {
    question: "Which country is the largest producer of cocoa in the world?",
    a: "Brazil",
    b: "Ghana",
    c: "Ivory Coast",
    d: "Indonesia",
    correct: "c"
  },
  {
    question: "In which year did the first man land on the moon?",
    a: "1965",
    b: "1967",
    c: "1969",
    d: "1971",
    correct: "c"
  },
  {
    question: "Who was the first person to reach the South Pole?",
    a: "Roald Amundsen",
    b: "Robert Scott",
    c: "Ernest Shackleton",
    d: "Edmund Hillary",
    correct: "a"
  },
  {
    question: "Which planet in our solar system has the most moons?",
    a: "Saturn",
    b: "Uranus",
    c: "Jupiter",
    d: "Neptune",
    correct: "c"
  },
  {
    question: "What is the highest mountain peak in North America?",
    a: "Mount Everest",
    b: "Mount Denali",
    c: "Mount Kilimanjaro",
    d: "Mount Vinson",
    correct: "b"
  },
  {
    question: "Who is the current President of France?",
    a: "Emmanuel Macron",
    b: "Francois Hollande",
    c: "Nicolas Sarkozy",
    d: "Jacques Chirac",
    correct: "a"
  },
  {
    question: "Which famous scientist is credited with discovering the laws of motion and universal gravitation?",
    a: "Isaac Newton",
    b: "Albert Einstein",
    c: "Galileo Galilei",
    d: "Johannes Kepler",
    correct: "a"
  },
  {
    question: "Which country is home to the world's largest waterfall by volume of water?",
    a: "Brazil",
    b: "United States",
    c: "Canada",
    d: "Venezuela",
    correct: "d"
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
      question: "Who invented the telephone?",
      a: "Alexander Graham Bell",
      b: "Thomas Edison",
      c: "Nikola Tesla",
      d: "Guglielmo Marconi",
      correct: "a"
    },
    {
      question: "Who invented the light bulb?",
      a: "Thomas Edison",
      b: "Nikola Tesla",
      c: "Alexander Graham Bell",
      d: "Guglielmo Marconi",
      correct: "a"
    },
    {
      question: "Who invented the airplane?",
      a: "Wilbur and Orville Wright",
      b: "Leonardo da Vinci",
      c: "Benjamin Franklin",
      d: "Albert Einstein",
      correct: "a"
    },
    {
      question: "Who invented the steam engine?",
      a: "James Watt",
      b: "Thomas Edison",
      c: "Eli Whitney",
      d: "Benjamin Franklin",
      correct: "a"
    },
    {
      question: "Who invented the cotton gin?",
      a: "Eli Whitney",
      b: "James Watt",
      c: "Thomas Edison",
      d: "Nikola Tesla",
      correct: "a"
    },
    {
      question: "Who invented the printing press?",
      a: "Johannes Gutenberg",
      b: "Benjamin Franklin",
      c: "Thomas Edison",
      d: "Nikola Tesla",
      correct: "a"
    },
    {
      question: "Who invented the computer?",
      a: "Charles Babbage",
      b: "Steve Jobs",
      c: "Bill Gates",
      d: "Mark Zuckerberg",
      correct: "a"
    },
    {
      question: "Who invented the internet?",
      a: "Tim Berners-Lee",
      b: "Bill Gates",
      c: "Steve Jobs",
      d: "Mark Zuckerberg",
      correct: "a"
    },
    {
      question: "Who invented the television?",
      a: "Philo Farnsworth",
      b: "John Logie Baird",
      c: "Thomas Edison",
      d: "Nikola Tesla",
      correct: "a"
    },
    {
      question: "Who invented the telephone switchboard?",
      a: "A.S. Erickson",
      b: "Alexander Graham Bell",
      c: "Thomas Edison",
      d: "Guglielmo Marconi",
      correct: "a"
    },
    {
      question: "Who invented the microwave oven?",
      a: "Percy Spencer",
      b: "Albert Einstein",
      c: "Benjamin Franklin",
      d: "Nikola Tesla",
      correct: "a"
    },
    {
      question: "Who invented the refrigerator?",
      a: "Carl von Linde",
      b: "Albert Einstein",
      c: "Thomas Edison",
      d: "Guglielmo Marconi",
      correct: "a"
    },
    {
      question: "Who invented the light-emitting diode (LED)?",
      a: "Nick Holonyak Jr.",
      b: "Thomas Edison",
      c: "Nikola Tesla",
      d: "Guglielmo Marconi",
      correct: "a"
    },
    {
      question: "Who invented the battery?",
      a: "Alessandro Volta",
      b: "Thomas Edison",
      c: "Nikola Tesla",
     
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
  {
      question: "What is the fastest land animal?",
      a: "Lion",
      b: "Leopard",
      c: "Cheetah",
      d: "Gazelle",
      correct: "c"
   },
   {
      question: "What is the largest mammal in the world?",
      a: "Giraffe",
      b: "Hippopotamus",
      c: "Elephant",
      d: "Whale",
      correct: "d"
    },
    {
      question: "What is the only continent where penguins live naturally?",
      a: "North America",
      b: "Europe",
      c: "Antarctica",
      d: "Australia",
      correct: "c"
    },
    {
      question: "What is the only bird that can fly backwards?",
      a: "Penguin",
      b: "Hummingbird",
      c: "Ostrich",
      d: "Eagle",
      correct: "b"
    },
    {
      question: "What is the smallest mammal in the world?",
      a: "Mouse",
      b: "Shrew",
      c: "Rat",
      d: "Bat",
      correct: "b"
    },
    {
      question: "What is the largest land animal?",
      a: "Giraffe",
      b: "Elephant",
      c: "Hippopotamus",
      d: "Rhino",
      correct: "b"
    },
    {
      question: "What is the fastest bird?",
      a: "Peregrine Falcon",
      b: "Bald Eagle",
      c: "Osprey",
      d: "Golden Eagle",
      correct: "a"
    },
    {
      question: "What is the most venomous snake in the world?",
      a: "Black Mamba",
      b: "King Cobra",
      c: "Rattlesnake",
      d: "Inland Taipan",
      correct: "d"
    },
    {
      question: "What is the only mammal that can truly fly?",
      a: "Flying Squirrel",
      b: "Bat",
      c: "Bird",
      d: "Penguin",
      correct: "b"
    },
    {
      question: "What is the largest fish in the world?",
      a: "Great White Shark",
      b: "Whale Shark",
      c: "Manta Ray",
      d: "Hammerhead Shark",
      correct: "b"
    },
    {
      question: "What is the tallest animal?",
      a: "Giraffe",
      b: "Horse",
      c: "Elephant",
      d: "Camel",
      correct: "a"
    },
    {
      question: "What is the only mammal that can walk on water?",
      a: "Otter",
      b: "Seal",
      c: "Platypus",
      d: "Kangaroo",
      correct: "c"
    },
    {
      question: "What is the slowest mammal in the world?",
      a: "Sloth",
      b: "Koala",
      c: "Hedgehog",
      d: "Gorilla",
      correct: "a"
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
const CORRECTSOUND = new Audio("./sounds/sound_correct.mp3")
const INCORRECTSOUND = new Audio("./sounds/sound_incorrect.mp3")
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
    console.log(answer)
    if (answer == randomQuestions[currentQuiz].correct) {
      score++
      CORRECTSOUND.play()
    }else{
    INCORRECTSOUND.play()
  }
      currentQuiz++;
  if (currentQuiz < randomQuestions.length){
      loadQuiz()
  }else {
      quiz.innerHTML = `
      <h2> You have answered ${score}/ ${randomQuestions.length} questions correctly.
  
      <button onclick="location.reload()">Reload</button>
      `
    
  }
  }

})




  
  
  
  

  
  



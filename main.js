const quizData = [
  {
    question: "Short cut to open new tab in Windows?",
    a: "Ctrl + T",
    b: "Ctrl + 0",
    c: "Alt + Z",
    correct: "a"
  }, {
question: "Short cut to create new doc in Windows?",
    a: "Ctrl + T",
    b: "Ctrl + N",
    c: "Ctrl + C",
    correct: "b"
  }, {
    question: "Short cut to stop running code?",
    a: "Ctrl + T",
    b: "Ctrl + C",
    c: "Alt + T",
    correct: "b"
  }, {
    question: "Short cut for toggle word wrap in vscode?",
    a: "Alt + N",
    b: "Ctrl + 0",
    c: "Alt + Z",
    correct: "c"
  }, {
  question: "Short cut to select multiple lines in vscode?",
    a: "Ctrl + Alt + arrow",
    b: "Ctrl + arrows",
    c: "Alt + arrows",
    correct: "a"
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswers();

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
}

function getSelected(){
let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked){
     answer = answerEl.id;
    }
  });

 return answer;

  }

function deselectAnswers(){
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

if(answer){
  if(answer === quizData[currentQuiz].correct){
     score++;
  }

  currentQuiz++;

  if(currentQuiz < quizData.length){
    loadQuiz();
  } else {
  quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} quostions.</h2> 
  
  <button
  onclick="location.reload()">Reload</button>`;
  }
} 
});
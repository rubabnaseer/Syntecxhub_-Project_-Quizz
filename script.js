const questions = [
{
question:"What does HTML stand for?",
answers:["Hyper Text Markup Language","Home Tool Markup Language","Hyperlinks Text Mark Language","Hyper Tool Multi Language"],
correct:0
},
{
question:"Which language is used for styling?",
answers:["HTML","Python","CSS","Java"],
correct:2
},
{
question:"Which is a JavaScript framework?",
answers:["Django","React","Laravel","Flask"],
correct:1
},
{
question:"Which tag creates a link?",
answers:["<a>","<p>","<link>","<href>"],
correct:0
},
{
question:"Which symbol is used for comments in JS?",
answers:["//","<!-- -->","#","**"],
correct:0
},
{
question:"Which company developed Java?",
answers:["Microsoft","Sun Microsystems","Google","IBM"],
correct:1
},
{
question:"Which is not a programming language?",
answers:["Python","HTML","Java","C++"],
correct:1
},
{
question:"Which CSS property changes color?",
answers:["background","font","color","style"],
correct:2
},
{
question:"Which tag for image?",
answers:["<img>","<image>","<src>","<pic>"],
correct:0
},
{
question:"JavaScript is?",
answers:["Compiled","Interpreted","Both","None"],
correct:1
},
{
question:"Which keyword declares variable?",
answers:["int","var","string","num"],
correct:1
},
{
question:"Which is backend language?",
answers:["CSS","HTML","PHP","Bootstrap"],
correct:2
},
{
question:"Which method prints console?",
answers:["console.log()","print()","echo()","write()"],
correct:0
},
{
question:"Which HTML tag for paragraph?",
answers:["<p>","<para>","<text>","<pg>"],
correct:0
},
{
question:"Which symbol for id in CSS?",
answers:[".","#","*","@"],
correct:1
},
{
question:"Which is database?",
answers:["MySQL","HTML","CSS","React"],
correct:0
},
{
question:"Which loop in JS?",
answers:["for","repeat","loop","iterate"],
correct:0
},
{
question:"Which tag for heading?",
answers:["<h1>","<head>","<top>","<title>"],
correct:0
},
{
question:"Which attribute for image source?",
answers:["link","src","href","img"],
correct:1
},
{
question:"Which is frontend language?",
answers:["Java","Python","HTML","SQL"],
correct:2
}
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
const questionNumber = document.getElementById("question-number");

function showQuestion(){
resetState();
let q = questions[currentQuestion];

questionNumber.innerText = "Question " + (currentQuestion+1) + " of " + questions.length;
questionEl.innerText = q.question;

q.answers.forEach((answer,index)=>{
let btn = document.createElement("button");
btn.innerText = answer;

btn.addEventListener("click",()=>{
selectAnswer(btn,index);
});

answersEl.appendChild(btn);
});
}

function resetState(){
answersEl.innerHTML="";
selectedAnswer = null;
}

function selectAnswer(button,index){

if(selectedAnswer !== null) return;

selectedAnswer = index;
let buttons = answersEl.querySelectorAll("button");

buttons.forEach(btn=>btn.classList.remove("selected"));
button.classList.add("selected");

if(index === questions[currentQuestion].correct){
score++;
button.classList.add("correct");
}else{
button.classList.add("wrong");
buttons[questions[currentQuestion].correct].classList.add("correct");
}

nextBtn.style.display="inline-block";
}

nextBtn.addEventListener("click",()=>{
currentQuestion++;

if(currentQuestion < questions.length){
showQuestion();
}else{
showScore();
}
});

function showScore(){
questionEl.innerText="Quiz Completed!";
questionNumber.innerText="";
answersEl.innerHTML="";
scoreEl.classList.remove("hide");
scoreEl.innerText="Your Score: " + score + " / " + questions.length;
restartBtn.classList.remove("hide");
nextBtn.style.display="none";
}

restartBtn.addEventListener("click",()=>{
currentQuestion=0;
score=0;
scoreEl.classList.add("hide");
restartBtn.classList.add("hide");
nextBtn.style.display="inline-block";
showQuestion();
});

showQuestion();
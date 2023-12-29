

const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Fish", correct: false},

         
        ]
    },

    {
        question: "Which are the two colours of Nigeria?",
        answers: [
            {text: "Red and green", correct: false},
            {text: "Blue and white", correct: false},
            {text: "Green and White", correct: true},
            {text: "violet and green", correct: false},

         
        ]
    },

    {
        question: "Which is largest animal on the land?",
        answers: [
            {text: "Shark", correct: false},
            {text: "lion", correct: false},
            {text: "Elephant", correct: true},
            {text: "Giraffe", correct: false},

         
        ]
    },

    {
        question: "What makes up Front-End delveloping web design?",
        answers: [
            {text: "Html,JS&CSS", correct: true},
            {text: "python,js,c++", correct: false},
            {text: "Html,css,python", correct: false},
            {text: "css&c++", correct: false},

         
        ]
    },

    {
        question: "What is the shortcut for cut on ms word?",
        answers: [
            {text: "ctrl+A", correct: false},
            {text: "ctrl+P", correct: false},
            {text: "ctrl+G", correct: false},
            {text: "ctrl+X", correct: true},

         
        ]
    },

    {

        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Fish", correct: false},

         
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetStat();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetStat(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++
        } else{
            selectedBtn.classList.add("incorrect");
        }
    
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;

        });

        nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();


    }
    else{
        startQuiz();
    }
});

startQuiz();

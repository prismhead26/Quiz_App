const questions = [
    {
        question: 'Which is not varaiable declaration?',
        answers: [
            { text: 'set', correct: true},
            { text: 'const', correct: false},
            { text: 'var', correct: false},
            { text: 'let', correct: false}
        ]
    },
    {
        question: 'An Object contains...',
        answers: [
            { text: 'meta data', correct: false},
            { text: 'properties and methods', correct: true},
            { text: 'modules', correct: false},
            { text: 'classes', correct: false}
        ]
    },

    {
        question: 'What is the first step in the event loop pertaining Asynchronous Programming with promises?',
        answers: [
            { text: 'Job Queue', correct: false},
            { text: 'Browser API', correct: false},
            { text: 'Callback Que', correct: false},
            { text: 'Call Stack', correct: true}
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'msgBox("Hello World")', correct: false},
            { text: 'alert("Hello World")', correct: true},
            { text: 'msg("Hello World")', correct: false},
            { text: 'alertBox("Hello World")', correct: false}
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: 'function = myFunction()', correct: false},
            { text: 'function: myFunction()', correct: false},
            { text: 'function; myFunction()', correct: false},
            { text: 'function myFunction()', correct: true}
        ]
    },
    {
        question: 'How do you call a function named "myFunction"?',
        answers: [
            { text: 'call myFunction()', correct: false},
            { text: 'myFunction()', correct: true},
            { text: 'call function myFunction', correct: false},
            { text: 'call function', correct: false}
        ]
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        answers: [
            { text: 'if (i == 5)', correct: true},
            { text: 'if i==5', correct: false},
            { text: 'if i==5 then', correct: false},
            { text: 'if i=5 then', correct: false}
        ]
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: [
            { text: 'if i=!5 then', correct: false},
            { text: 'if (i != 5)', correct: true},
            { text: 'if (i<>5) then', correct: false},
            { text: 'if (i=!5 then', correct: false}
        ]
    },
];
// creates a reference to the doc contained in the window pertaining to the named element/class/id attribute
const questionEl = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");
const container = document.querySelector('.app')
//declare and set the score and current question index
let currentQuestionIndex = 0;
let score = 0;

const mostRecentScore = localStorage.getItem('mostRecentScore')
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5

document.body.style.cssText = "background: navy;background-image: url(./assets/images/5073414.jpg);"
document.querySelector('#title').style.cssText = "font-size: 25px;color: #001e4d;font-weight: 600;border-bottom: 1px solid #333;padding-bottom: 30px;"
document.querySelector('.question').style.cssText = "font-size: 18px;color: #001e4d;font-weight: 600;"
document.querySelector('.app').style.cssText = "display: flex; flex-direction: column; justify-content: center;background: lightgray;width: 90%;max-width: 600px;margin: 100px auto 0px;border-radius: 10px;padding: 30px;"
document.querySelector('.quiz').style.cssText = "padding: 20px 0;"


// document.querySelector('.btn').style.cssText = "font-weight: 500;border: 1px solid #222;padding: 10px;margin: 10px 0;text-align: left;border-radius: 4px;cursor: pointer;transition: all 0.3s;"
// document.querySelector('#next-btn').style.cssText = "background: #001e4d;color: #fff;font-weight: 500;width: 150px;border: 0;padding: 10px;margin: 20px auto 0;border-radius: 4px;cursor: pointer;display: none;"
// document.querySelector('.correct').style.cssText = "background: #9aeabc;"
// document.querySelector('.incorrect').style.cssText = "background: #ff9393;"

// set score/currentQuestionindex to 0 
// set next button text, could have put into html
// chain next step/function ---> showQuestion
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// reset function for each question... add now, build after showQuestion func
// choose current question based on the currentQuestionIndex
// declare questionNo to show help with progression
// attach questionNo and the currentQuestion to the html window
// for each answer create a button element
// add the answer.text to the button.innerHTML/ window
// add class for styling CSS and to be able to combine all similar buttons
// append newly created btn element to the answer-buttons section
// add guard statement to ensure functionality and only button can be clicked
// add button to click on the each selected answer ---> function selectAnswer --- build after reset func
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>  {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; font-weight: 500;border: 1px solid #222;padding: 10px;margin: 10px 0;text-align: left;border-radius: 4px;cursor: pointer;transition: all 0.3s;")
        answerButtons.appendChild(button);
        //add true or false in the data-set
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
//hide next button for better user experience
// while a the answerButtons section/element has a appended children remove each child / button
// removing the previous buttons
function resetState(){
    nextButton.setAttribute("style" , "display: none; background: #001e4d;color: #fff;font-weight: 500;width: 150px;border: 0;padding: 10px;margin: 20px auto 0;border-radius: 4px;cursor: pointer;display: none;")
    // nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// declare/create the selectedButton with event target
// declare isCorrect condition if selectecBtn.dataset.correct is true
// if isCorrect increase score and add class element to change color/styling
// else decrease score and add classList for styling
// create func to disable each button after selectedBtn
// since buttons are an array inside obj-> answerBtn section
// get the array from answerButtons children and for each child/button
// since going through all buttons,
// ... if the dateset is true style green even if it wasnt selected to show the correct answer
// if the dataset property contains true prevent unwanted clicks/ disable btn
// show next btn
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect) {
        selectedBtn.classList.add("correct");
        // document.querySelector('.correct')=("styles", "background: #9aeabc;")
        selectedBtn.setAttribute('style', 'background: green;')
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        // document.querySelector('.incorrect')=("styles", "background: #ff9393;")
        selectedBtn.setAttribute('style', 'background: red;')

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
// add showScore func for next 'page'
// display total = score/total questions by grabbing questionEl
// use next btn to play again after shows score
// show btn. diplay block to revert the display none
function showScore() {
    resetState();
    let finalScore = score * 100
    localStorage.setItem('mostRecentScore', finalScore)
    questionEl.innerHTML = `You scored ${score} out of ${questions.length}, with a total of ${finalScore} points!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter your name');
    input.setAttribute('id', 'username')
    input.setAttribute('style', 'font-size: 1.5rem; font-weight: 600; padding: 2rem 1rem; text-align:center; margin: 20px 3rem 0;');
    // input.style.cssText = 'textAlign:center;'
    // input.style.textAlign = 'center;'
    container.appendChild(input)

    const newButton = document.createElement('button');
    newButton.textContent = 'Submit and/or view leaderboard';
    newButton.setAttribute('type', 'submit')
    newButton.setAttribute('style', 'color: red;font-size: 1.5rem;font-weight: 600;padding: 2rem 1rem;text-align: center;margin: 20px 3rem 0;background: lightBlue');
    newButton.classList.add('btn')
    container.appendChild(newButton);
    console.log('test')

    input.addEventListener('keyup', () => {
        newButton.disabled = !input.value
    })


    newButton.addEventListener('click', (e) => {
    e.preventDefault()

    const score = {
        score: mostRecentScore, 
        name: input.value
    }
    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('leaderboard.html')

    });
}
// handling the next btn
// increase currentQuestionIndex to view next question obj
// if the currentQuestionIndex is less than the length of the questions
// showQuestion 
// else showScore functin "page"
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
// create play again btn
// addEventListener to nextButton
// callback func for if the there are still more questions handleNextBtn
// else StarQuiz to play again
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})



// initiate the js with the startQuiz func
startQuiz();
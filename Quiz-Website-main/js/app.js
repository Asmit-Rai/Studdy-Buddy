const quizData = [
    {
        question: "What is HTML?",
        a: "HTML describes the structure of a webpage",
        b: "HTML is the standard markup language mainly used to create web pages",
        c: "HTML consists of a set of elements that helps the browser how to view the content",
        d: "All of the mentioned",
        correct: "d",
    },
    {
        question: "What is the correct syntax of doctype in HTML5?",
        a: "</doctype html>",
        b: "<doctype html>",
        c: "<doctype html!>",
        d: "<!doctype html>",
        correct: "d",
    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        a: "head",
        b: "<h1>",
        c: "<h6>",
        d: "heading",
        correct: "b",
    },
    {
        question: "Which element is used for styling HTML5 layout?",
        a: "CSS",
        b: "jQuery",
        c: "JavaScript",
        d: "PHP",
        correct: "a",
    },
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    },
    {   question: "Which element is used to get highlighted text in HTML5?",
        a: "<u>",
        b: "<nark>",
        c: "<highlight>",
        d: "<b>",
        correct: "b"
}
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()

    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Your Scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);
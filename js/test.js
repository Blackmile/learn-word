alert("Enter your Registration number e.g 2020/202020\nEnter your Name in the field provided");

var database = firebase.database();

window.onload = function () {
    show(0);
}

let questions = [
    {
        id: 1,
        question: "__ is a keyboard shortcut ?",
        answer: "Ctrl + C",
        options: [
            "Ctrl",
            "windows",
            "Ctrl + C",
            "Power button"
        ]
    },
    {
        id: 2,
        question: "these are types of file extension EXCEPT",
        answer: "RAM",
        options: [
            "RAM",
            "docx",
            "mp3",
            "pdf"
        ]
    },
    {
        id: 3,
        question: "__ tool is used for changing the text style",
        answer: "Font Style",
        options: [
            "Format painter",
            "Clipboard",
            "Font Style",
            "none of the above"
        ]
    },
    {
        id: 4,
        question: "an example of a word processor is ?",
        answer: "Ms word",
        options: [
            "Mario forever",
            "Fifa 14",
            "Windows player",
            "Ms word"
        ]
    }
];
function info(){
    id = document.forms["welcome_form"]["id"].value;
    name = document.forms["welcome_form"]["name"].value;
}


function submitForm(e) {
    e.preventDefault();
    info();
    // store user
    sessionStorage.setItem("id", id);
    location.href = "#test";
    firebase.database().ref('user/' + id).set({
        Name: name,
        points: point,
        Time: (`${minutes} minutes and ${seconds} seconds`)
    });
    
}

let question_count = 0;
let point = 0;


function next() {
    info();
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questions[question_count].answer) {
        point += 10;
        firebase.database().ref('user/' + id).update({
            points: point
        });
        console.log(point);
    }

    if (question_count == questions.length - 1) {
        firebase.database().ref('user/' + id).update({
            Time: (`${minutes} minutes and ${seconds} seconds`)
        });
        clearInterval(myTime);
        location.href = "grade.html";
        return;
    }

    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("question");
    let questionId = document.getElementById("Qid");
    questionId.innerHTML= `Q${question_count + 1}`;
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option-list">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>
    `;

    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}

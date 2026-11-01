
const questions = [
    {
        question: "What is 15 + 25?",
        answers: ["30", "40", "50", "45"],
        correct: "40"
    },
    {
        question: "What is the capital of Kazakhstan?",
        answers: ["Almaty", "Astana", "London", "Paris"],
        correct: "Astana"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: "Mars"
    },
    {
        question: "What is 9 × 8?",
        answers: ["72", "81", "64", "90"],
        correct: "72"
    },
    {
        question: "How many days are in a week?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    document.getElementById("score").textContent = "⭐ Score: 0";
    document.getElementById("result").textContent = "";

    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById("question").textContent =
            "🎉 Quiz Completed!";

        document.getElementById("answers").innerHTML = "";

        document.getElementById("result").textContent =
            `You scored ${score} out of ${questions.length}!`;

        return;
    }

    const q = questions[currentQuestion];

    document.getElementById("question").textContent = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer;

        button.onclick = () => checkAnswer(answer);

        answersDiv.appendChild(button);
    });
}

function checkAnswer(answer) {
    const correct = questions[currentQuestion].correct;

    if (answer === correct) {
        score++;
        document.getElementById("result").textContent =
            "✅ Correct! Great job!";
    } else {
        document.getElementById("result").textContent =
            "❌ Not quite! Keep learning!";
    }

    document.getElementById("score").textContent =
        `⭐ Score: ${score}`;

    currentQuestion++;

    setTimeout(showQuestion, 1000);
}

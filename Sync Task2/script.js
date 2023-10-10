function home() {
    window.location.href = "index.html";
  }
function start() {
    window.location.href = "level.html";
  }
function level1() {
    window.location.href = "level1.html";
  }
  function level2() {
    window.location.href = "level2.html";
  }
  function level3() {
    window.location.href = "level3.html";
  }
  function level4() {
    window.location.href = "level4.html";
  }
  function level5() {
    window.location.href = "level5.html";
  }
  function calculateScoreLevel1() {
    const quizForm = document.getElementById("quizForm");
    const scoreDisplay = document.getElementById("score");
    
    const answers = {
        q1: "b", 
        q2: "c", 
        q3: "b",
        q4:"b",
        q5: "a", 
        q6: "a", 
        q7: "b", 
        q8: "b", 
        q9: "b", 
        q10: "c"
    };
    
    let score = 0;

    for (const question in answers) {
        const selectedAnswer = quizForm.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    scoreDisplay.textContent = score + "/" + Object.keys(answers).length;
}
function calculateScoreLevel2() {
    const quizForm = document.getElementById("quizForm");
    const scoreDisplay = document.getElementById("score");

    const answers = {
        q1: "b", 
        q2: "a", 
        q3: "b", 
        q4: "b", 
        q5: "a", 
        q6: "b", 
        q7: "b", 
        q8: "b", 
        q9: "a", 
        q10: "b" 
    };

    let score = 0;

    for (const question in answers) {
        const selectedAnswer = quizForm.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    scoreDisplay.textContent = score + "/" + Object.keys(answers).length;
}
function calculateScoreLevel3() {
    const quizForm = document.getElementById("quizForm");
    const scoreDisplay = document.getElementById("score");

    const answers = {
        q1: "b", 
        q2: "c", 
        q3: "a", 
        q4: "b", 
        q5: "b", 
        q6: "b", 
        q7: "b", 
        q8: "b", 
        q9: "a", 
        q10: "b" 
    };

    let score = 0;

    for (const question in answers) {
        const selectedAnswer = quizForm.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    scoreDisplay.textContent = score + "/" + Object.keys(answers).length;
}
function calculateScoreLevel4() {
    const quizForm = document.getElementById("quizForm");
    const scoreDisplay = document.getElementById("score");

    const answers = {
        q1: "b", 
        q2: "b", 
        q3: "a", 
        q4: "b", 
        q5: "b", 
        q6: "c", 
        q7: "b", 
        q8: "b", 
        q9: "a", 
        q10: "b" 
    };

    let score = 0;

    for (const question in answers) {
        const selectedAnswer = quizForm.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    scoreDisplay.textContent = score + "/" + Object.keys(answers).length;
}
function calculateScoreLevel5() {
    const quizForm = document.getElementById("quizForm");
    const scoreDisplay = document.getElementById("score");

    const answers = {
        q1: "b", 
        q2: "a", 
        q3: "b", 
        q4: "b", 
        q5: "a", 
        q6: "a", 
        q7: "b", 
        q8: "b", 
        q9: "c", 
        q10: "b" 
    };

    let score = 0;

    for (const question in answers) {
        const selectedAnswer = quizForm.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    scoreDisplay.textContent = score + "/" + Object.keys(answers).length;
}

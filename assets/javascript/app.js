var questions = [

    {
        question: "Javascript is what kind of programming language?",
        choices: ["High-Level language", "Low-Level Language", "Scripting Language", "Machine Language"],
        answer: "Scripting Language"
    },
    {
        question: "What is the main browser setting industry standards?",
        choices: ["Edge", "Firefox", "Google", "Safari"],
        answer: "Google"
    },

    {
        question: "Which CSS property is used to change the backgorund color?",
        choices: ["backgoround", "background-color", "color", "setbackground"],
        answer: "background-color"
    },
    {
        question: "Which sign does jQuery use as a shortcut?",
        choices: ["$", "#", ".", "^"],
        answer: "$"
    },
    {
        question: "Bootstarp Grid System is based off how many coloumns?",
        choices: ["6", "8", "3", "12"],
        answer: "12"
    },
    {
        question: "How do you call a function named Callme in Javascript?",
        choices: ["callme", "Callme", "Callme();", "CallMe;"],
        answer: "Callme();"
    },
    {
        question: "Which BootStrap Class is used for creating a big box?",
        choices: [".jumbotron", ".container", ".container-fluid", ".big-box"],
        answer: ".jumbotron"
    },
    {
        question: "PHP variables begin with what symbol?",
        choices: ["@", "#", "%", "$"],
        answer: "$"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        choices: ["class", "font", "style", "inline-style"],
        answer: "style"
    },
    {
        question: "What character is used to denote a end tag",
        choices: ["*", "<", "/", ">"],
        answer: "/"
    }
]
var correct = 0;
var incorrect = 0;
var counter = 90;
var timer;
function countdown() {
    counter--;
    $("#counter").html(counter);
    if (counter <= 0) {
        done();
    }
}
function start() {
    timer = setInterval(countdown, 1000);
    $("#content").prepend('<h2> Time Remaining: <span id="counter">' + counter + '</span> Seconds </h2>')
    $("#button").remove();
    for (var i = 0; i < questions.length; i++) {
        $("#content").append("<h4>" + questions[i].question + "</h4>");

        for (var j = 0; j < questions[i].choices.length; j++) {

            $("#content").append("<input type ='radio' name ='question-" + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j]);

        }
    }
    $("#content").append("<button onclick='done()'>Done</button>")
}
function done() {
    $.each($('input[name="question-0"]:checked'), function () {
        if ($(this).val() == questions[0].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($('input[name="question-1"]:checked'), function () {
        if ($(this).val() == questions[1].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($('input[name="question-2"]:checked'), function () {
        if ($(this).val() == questions[2].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($('input[name="question-3"]:checked'), function () {
        if ($(this).val() == questions[3].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($('input[name="question-4"]:checked'), function () {
        if ($(this).val() == questions[4].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($('input[name="question-5"]:checked'), function () {
        if ($(this).val() == questions[5].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($('input[name="question-6"]:checked'), function () {
        if ($(this).val() == questions[6].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($('input[name="question-7"]:checked'), function () {
        if ($(this).val() == questions[7].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($('input[name="question-8"]:checked'), function () {
        if ($(this).val() == questions[8].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($('input[name="question-9"]:checked'), function () {
        if ($(this).val() == questions[9].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    result();
}
function result() {
    clearInterval(timer);
    $("#content h4").remove();
    $("#content").html("<h2>Finished</h2>");
    $("#content").append("<h3>Correct Answers: " + correct + "</h3>");
    $("#content").append("<h3>Incorrect Answers: " + incorrect + "</h3>");
    $("#content").append("<h3>Unanswered Questions: " + (questions.length - (incorrect + correct)) + "</h3>");
    $("#content").append('<input type="button" value="Play Again" onClick="window.location.reload()">');
}

$("#button").on("click", function () {

    start();


});



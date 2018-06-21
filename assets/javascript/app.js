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



var startGame;

$(document).ready(function () {
    $("#quizPage").hide();
    $("#scorePage").hide();
});

$("#button").on("click", function () {

    startGame = setTimeout(endGame, 30000);
    $("#startPage").hide();
    $("#quizPage").show();
    for (var i = 0; i < questions.length; i++) {

        var tempQuestion = $("<h4>" + questions[i].question + "</h4>");
        tempQuestion.css("clear", "both");
        tempQuestion.appendTo('#showQ');

        for (var j = 0; j < questions[i].choices.length; j++) {

            var tempChoices = $("<input>");
            tempChoices.attr("type", "radio");
            tempChoices.attr("name", i + " " + j);
            tempChoices.attr("value", questions[i].choices[j]);
            tempChoices.css("float", "left");
            tempChoices.appendTo('#showQ');
            var tempTXT = $("<p>" + questions[i].choices[j] + "</p>");
            tempTXT.css("float", "left");
            tempTXT.appendTo('#showQ');
        }
    }
});

function endGame() {

    $("#quizPage").hide();
    $("#scorePage").show();

    $("#btn").on("click", function () {
        $("#scorePage").hide();
        $("#startPage").show();
    });

    for (var i = 0; i < questions.length; i++) {

        for (var j = 0; j < questions[i].choices.length; j++) {
        }
    }

}


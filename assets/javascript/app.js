var startGame;

$(document).ready(function(){
    $("#quizPage").hide();
    $("#scorePage").hide();
});

$("#button").on("click", function(){

    startGame = setTimeout(endGame,3000);
    $("#startPage").hide();
    $("#quizPage").show();

});

function endGame(){

    $("#quizPage").hide();
    $("#scorePage").show();
}
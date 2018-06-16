$(document).ready(function(){

var questions_answers = [
    
    {   question: "Which type of chocolate is considered good for your health?",
        answers:['Dark', 'Milk', 'Semisweet', 'White'],
        correctAnswer: "Dark"
    },

    {   question: "In which country was tea first drunk?",
        answers: ['England', 'India', 'China', 'USA'],
        correctAnswer:"China"
    },

    {   question: "When was the first World Cup held?",
        answers: ['1930', '1934', '1926', '1924'],
        correctAnswer:"1930"
    }
    
];
var timer = 10;
var intervalID;
var answerButtons;
var questionNum = 0;
var userChoice;
var generateQuestionSet = function(){
    questionSet = questions_answers[questionNum];
};
generateQuestionSet();

var decrement = function(){
    timer--;
    $("#timer").html(timer);
    if (timer === 0) {
        stop(); 
        $(".hide").hide();
        $(".resultsPage").show(); 
        var finalAnswer = $("<p>").text("You didn't pick an answer. But here it is! " + questionSet.correctAnswer);
        $("#answer").append(finalAnswer); 
    }
};
function stop (){
    clearInterval(intervalID);
    questionNum++;
};

var run = function(){
    intervalID = setInterval(decrement, 1000);
};

document.getElementById("startButton").addEventListener('click',function(){
    $(".hide").show();
    $("#startButton").hide();
    run();
    document.getElementById("question").innerHTML = questionSet.question;
    questionSet.answers.forEach(function(answer) {
    answerButtons = $("#choices").append("<button class=choice data-correct=" + answer + ">" + answer + "</button>");
    });   
});

function results (userChoice) {
    $(".hide").hide();
    $(".resultsPage").show();
    if (questionSet.correctAnswer === userChoice){
    var correctP = $("<p>").text("You're correct!");
    $("#answer").append(correctP);
    } else {
    var incorrectP = $("<p>").text("It's not the correct answer. The correct answer is " + questionSet.correctAnswer);  
    $("#answer").append(incorrectP);
    }
    
}
 
$(document).on('click', '.choice', function(){
    userChoice = $(this).attr("data-correct");
    results(userChoice);
    stop();
})

// setTimeout(function newSetofQuestions(){
// generateQuestionSet();
// $(".hide").show();
// $(".resultsPage").hide();
// document.getElementById("question").innerHTML = questionSet.question;
//     questionSet.answers.forEach(function(answer) {
//     answerButtons = $("#choices").append("<button class=choice data-correct=" + answer + ">" + answer + "</button>");
//     });
// }, 3000);

});

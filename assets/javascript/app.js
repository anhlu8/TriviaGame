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

var generateQuestionSet = function(){
    rand = Math.floor(Math.random() * questions_answers.length);
    questionSet = questions_answers[rand];
};
generateQuestionSet();

// var timeOut = setTimeout (function(){
//     $("#correctAnswer").html("Correct answer: " + questionSet.correctAnswer);
// }, 10000);

var decrement = function(){
    timer--;
    $("#timer").html(timer);
    if (timer === 0) {
        $("#correctAnswer").html("Correct answer: " + questionSet.correctAnswer);
        stop();
    }
};
function stop (){
    clearInterval(intervalID);
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
    $("#choices").append("<button>" + answer + "</button>");
});
    
});




});

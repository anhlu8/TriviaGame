$(document).ready(function(){

var questions_answers = [
    
    {   question: "Which type of chocolate is considered good for your health?",
        answers:['Dark', 'Milk', 'Semisweet', 'White'],
        correctAnswer: "Dark"
    },

    {   question: "In which country was tea first drunk?",
        answers: ['Endland', 'India', 'China', 'USA'],
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
    rand = Math.floor(Math.random() * questions_answers.length);questionSet = questions_answers[rand];
};
generateQuestionSet();

var timeOut = setTimeout (function(){
    $("#correctAnswer").html("Correct answer: " + questionSet.correctAnswer);
}, 10000);

var decrement = function(){
    timer--;
    $("#timer").html(timer);
};

var stop = function(){
    clearInterval(intervalID);
};

var run = function(){
    intervalID = setInterval(decrement, 1000);
    if (timer === 0){
        stop()};
    };
    


document.getElementById("startButton").addEventListener('click',function(){
    $(".hide").show();
    $("#startButton").hide();
    decrement();
    run();
    document.getElementById("question").innerHTML = questionSet.question;
    // document.getElementById("choices").innerHTML = questionSet.answers.join(' ');
    $(questionSet.answers).each(function(){
        $("#choices").html("<button>" + this + "</button>");
    })
    timeOut();
});




});

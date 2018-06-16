$(document).ready(function () {

    var questions_answers = [

        {
            question: "Which type of chocolate is considered good for your health?",
            answers: ['Dark', 'Milk', 'Semisweet', 'White'],
            correctAnswer: "Dark"
        },

        {
            question: "In which country was tea first drunk?",
            answers: ['England', 'India', 'China', 'USA'],
            correctAnswer: "China"
        },

        {
            question: "When was the first World Cup held?",
            answers: ['1930', '1934', '1926', '1924'],
            correctAnswer: "1930"
        }

    ];
    var timer = 10;
    var intervalID;
    // var answerButtons = ;
    var questionNum = 0;
    var userChoice;
    var generateQuestionSet = function () {
        questionSet = questions_answers[questionNum];
    };
    generateQuestionSet();

    function reset() {
        $('#timer').empty()
        $('.timer').show()
        timer = 10
        $('#question').empty()
        $('.question').show()
        $('#choices').empty()
        $('.choices').show()
        $('#answer').empty()
        $('.answer').hide()
        
        run();
    }

    
    function stop() {
        clearInterval(intervalID);
        // questionNum++;
    };

    var run = function () {
        intervalID = setInterval(decrement, 1000);
        generateQuestionSet();
        document.getElementById("question").innerHTML = questionSet.question;
        questionSet.answers.forEach(function (answer) {
            answerButtons = $("#choices").append("<button class=choice data-correct=" + answer + ">" + answer + "</button>");
        });
    };

    document.getElementById("startButton").addEventListener('click', function () {
        $("#startButton").hide();
        reset();
    });

    function showAnswer(){
        $('.question').hide()
        $('.choices').hide()
        $('.answer').show()
    }

    var decrement = function () {
        timer--;
        $("#timer").html(timer);
        if (timer === 0) {
            stop();
            showAnswer()
            var finalAnswer = $("<p>").text("You didn't pick an answer. But here it is! " + questionSet.correctAnswer);
            $("#answer").append(finalAnswer);
            questionNum++;
            setTimeout(reset, 3000);
        }
        
    };

    function results(userChoice) {
        showAnswer()
        if (questionSet.correctAnswer === userChoice) {
            stop();
            var correctP = $("<p>").text("You're correct!");
            $("#answer").append(correctP);
        } else {
            stop();
            var incorrectP = $("<p>").text("It's not the correct answer. The correct answer is " + questionSet.correctAnswer);
            $("#answer").append(incorrectP);
        }
        questionNum++;
        // questionNum++;
        setTimeout(reset, 3000);
    }

    


    $(document).on('click', '.choice', function () {
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

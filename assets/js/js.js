$(document).ready(function() {
  console.log("ready!");
//On mouse over Styles and on click on pictures

  $('.pedal').mousemove(function(event) {
    $('#needle2').css({
      transform: 'rotate(180deg)',

    });
  });

  $('.pedal').mouseout(function(event) {
    $('#needle2').css({
      transform: 'rotate(0deg)',

    });
  });
  $('.wheel').mousemove(function(event) {
    $('#needle4').css({
      transform: 'rotate(180deg)',

    });
  });

  $('.wheel').mouseout(function(event) {
    $('#needle4').css({
      transform: 'rotate(0deg)',

    });
  });

  $('.radio').on('click', function(event) {
    var don = $('#audio2')[0];
    don.play();

  });

  $('.pedal').mouseover(function(event) {
    var gas = $('#audio3')[0];
    gas.play();
    $(this).addClass('coursor5')
  });

  $('.wheel').on('click', function(event) {
    var gas = $('#audio4')[0];
    gas.play();

  });

$('.radio').mouseover(function(event) {
          $('.radio').addClass('coursor')
  });

$(".startbtn").mouseover(function(event) {
  $(this).addClass('coursor3')
});


$(".answers").mouseover(function(event) {
  $(this).addClass('coursor2')
});


  $('.wheel').mouseover( function(event) {
   $(this).addClass('coursor4')

  });

        $('#elapsedTime').css({
        color: 'white',
        fontSize: '20px',
        opacity: '0.8'

      });


//main object for game
  var triviaObj = {
      //each question is an object with its own classes and parameters all in one array                         
    questionsArray: [{
        question: "The most popular racing sport?",
        answer1: "Formula 1",
        answer2: "NASCAR",
        answer3: "Cart Racing",
        answer4: "Kentucky Derby",
        img: "assets/img/formula.gif"
      },
               
      {
        question: "Who invented the world's very first car??",
        answer1: "Gottlieb Daimler",
        answer2: "Rudolf Diesel",
        answer3: "Karl Benz",
        answer4: "Henry Ford",
        img: "assets/img/benz.gif"
      }, {
        question: "What is the best-selling carin America ",
        answer1: "Mazda 3",
        answer2: "Kia Soul",
        answer3: "Ford Fusion",
        answer4: "Toyota Camry",
        img: "assets/img/toyota.gif"
      },



    ],
      //correct answers array to match user input
    correctAnswers: ["Formula 1", "Karl Benz", "Toyota Camry"], //array to hold correct answers
    userAnswers: [],
//game varriables the main one is QuestionCount
    questionCount: 0,
    inerval: 0,

    timer: 25,
    answerClick: false,
    numberCorrect: 0,
    numberIncorrect: 0,
    numberUnAnswered: 0,
    degrees: 0,
                //start game function
    GameStart: function() {
      triviaObj.timer = 25;
      console.log(triviaObj.questionCount);
      console.log(triviaObj.questionsArray.length);
                          //when all questions answerred this happeneds
      if (triviaObj.questionCount == triviaObj.questionsArray.length) {

        $('p.questions').hide();
        $('button.answer1').hide();
        $('button.answer2').hide();
        $('button.answer3').hide();
        $('button.answer4').hide();
        $('#wrong').hide();
        $('#correct').hide();
        $('#thisCorrectAnswer').hide();        
        $('#pic').hide();
        $('#outOfTime').hide();
        $('.timeRemaining').hide();
        

                    //removing text of the answers
        $('#el').children('p').remove();
        $('#el2').children('p').remove();
        $('#el3').children('p').remove();
        $('#el4').children('p').remove();
        $('#pic').children('img').remove();  


        $('#gameTotalCorrect').show()
        $('#gameTotalWrong').show()
        $('#gameUnanswered').show()
        $("#restartGame").show();

                    //putting on screen what did we unswer/unanswer/correct/wrong
        $('#gameUnanswered').append("<p>" + triviaObj.numberUnAnswered + "</p>");
        $('#gameTotalWrong').append("<p>" + triviaObj.numberIncorrect + "</p>");
        $('#gameTotalCorrect').append("<p>" + triviaObj.numberCorrect + "</p>");
        $("#gameDone").show();
        // console.log("all questions passed");



         //when all questions were NOT answerred this happened
      } else {
        //removing text of the answers
        $('#el').children('p').remove();
        $('#el2').children('p').remove();
        $('#el3').children('p').remove();
        $('#el4').children('p').remove();
        $('#thisCorrectAnswer').children('p').remove();
        //making answer fields avaliable again
        $('.answers').removeAttr('disabled');
        $('p.questions').show();
        $('.answerRow ').show();
        $('.pedal').show();
        //setingup data of answer as a text
        $('p.questions').html(triviaObj.questionsArray[triviaObj.questionCount].question);
        $('#el').data('value', triviaObj.questionsArray[triviaObj.questionCount].answer1);
        $('#el2').data('value', triviaObj.questionsArray[triviaObj.questionCount].answer2);
        $('#el3').data('value', triviaObj.questionsArray[triviaObj.questionCount].answer3);
        $('#el4').data('value', triviaObj.questionsArray[triviaObj.questionCount].answer4);
        //pushing answer text to the container and curving it
        $('#el').prepend(' <div class="curved-container" > <p  class="curved-text">' + triviaObj.questionsArray[triviaObj.questionCount].answer1 + '</p> </div>')

        $('#el2').prepend(' <div class="curved-container" > <p  class="curved-text2">' + triviaObj.questionsArray[triviaObj.questionCount].answer2 + '</p> </div>')
        $('#el3').prepend(' <div class="curved-container" > <p  class="curved-text3">' + triviaObj.questionsArray[triviaObj.questionCount].answer3 + '</p> </div>')
        $('#el4').prepend(' <div class="curved-container" > <p  class="curved-text4">' + triviaObj.questionsArray[triviaObj.questionCount].answer4 + '</p> </div>')
//curves text for each answer window
        var str = $('.curved-text').html();
        var curved = '';
        for (var i = 0, len = str.length; i < len; i++) {
          curved += '<span class="char';
          curved += i;
          curved += '">';
          curved += str[i];
          curved += '</span>';
        }
        $('.curved-text').html(curved);

        var str = $('.curved-text2').html();
        var curved = '';
        for (var i = 0, len = str.length; i < len; i++) {
          curved += '<span class="char';
          curved += i;
          curved += '">';
          curved += str[i];
          curved += '</span>';
        }
        $('.curved-text2').html(curved);
        var str = $('.curved-text3').html();
        var curved = '';
        for (var i = 0, len = str.length; i < len; i++) {
          curved += '<span class="char';
          curved += i;
          curved += '">';
          curved += str[i];
          curved += '</span>';
        }
        $('.curved-text3').html(curved);

        var str = $('.curved-text4').html();
        var curved = '';
        for (var i = 0, len = str.length; i < len; i++) {
          curved += '<span class="char';
          curved += i;
          curved += '">';
          curved += str[i];
          curved += '</span>';
        }
        $('.curved-text4').html(curved);


          //moving arrow in screen 3 every second
        setInterval(triviaObj.arrowMove, 1000)
        //main interval for game every second timer
        triviaObj.interval = setInterval(triviaObj.timeRemaining, 1000);
        $('#wrong').hide();
        $('#correct').hide();
        $('#thisCorrectAnswer').hide();
        $('#pic').empty();
        $('#pic').hide();
        $('#outOfTime').hide();
        $('.timeRemaining').show();
        $("#gameDone").hide();

        // console.log("Still working");

      }



    },

                              //answer selection right or wrong
    answerPick: function() {
      if (triviaObj.answerClick == true && triviaObj.userAnswers[triviaObj.questionCount] === triviaObj.correctAnswers[triviaObj.questionCount]) {
                        //making sure that answer was pressed and answer correct/wrong and do next function
        triviaObj.GoodAnswer();
       
        // console.log("correct answer");
      } else if (triviaObj.answerClick == true && triviaObj.userAnswers[triviaObj.questionCount] !== triviaObj.correctAnswers[triviaObj.questionCount]) {
        //making sure that answer was pressed and answer correct/wrong and do next function
        // console.log("wrong answer");
        triviaObj.WrongAnswer();
       
      }



    },
          //correct answer showing picture and greed or telling wrong
    GoodAnswer: function() {
      $('#pic').append("<img class='innerImage' src=" + '"' + triviaObj.questionsArray[triviaObj.questionCount].img + '"' + " >");
      $('#correct').show();

      $('#pic').show();
      triviaObj.numberCorrect++;
      //next question in 4 seconds
      setTimeout(triviaObj.GameStart, 4000)


    },
        //wrong answer showing picture and greed or telling wrong
    WrongAnswer: function() {
      $('#wrong').show();
      $('#pic').append("<img class='innerImage' src=" + '"' + triviaObj.questionsArray[triviaObj.questionCount].img + '"' + " >");
      $('#pic').show();
      triviaObj.numberIncorrect++;
      $('#thisCorrectAnswer').show().append("<p>" + triviaObj.correctAnswers[triviaObj.questionCount] + "</p>");
      setTimeout(triviaObj.GameStart, 4000)

    },
    timeRemaining: function() {



      triviaObj.timer--;
      console.log(triviaObj.timer);
      $('#time').text(triviaObj.timer);
      $('#elapsedTime').text(triviaObj.timer);




      if (triviaObj.timer <= 10) {
        $('#elapsedTime , #time').css({
          color: 'red',
          opacity: '1'
        });

      };

      console.log(triviaObj.timer);
      if (triviaObj.timer <= 0) {
        triviaObj.degrees = 0;
        triviaObj.timeOver();
      };
      triviaObj.degrees = triviaObj.degrees + 7.5;

      triviaObj.arrowMove();
    },
          //using closure function in timer to fire this one everu second to move arrow on screen 3
    arrowMove: function() {



      $('#needle3').css({
        transform: 'rotate(' + triviaObj.degrees + 'deg)',

      });



    },
        //missed time 
    timeOver: function() {
      $('p.questions').hide();
      $('#thisCorrectAnswer').show().append("<p>" + triviaObj.correctAnswers[triviaObj.questionCount] + "</p>");
      $('#pic').show();
      $('#outOfTime').show()
      $('#pic').append("<img class='innerImage' src=" + '"' + triviaObj.questionsArray[triviaObj.questionCount].img + '"' + " >");
      // console.log("I was fired! ")
      triviaObj.questionCount++;
      triviaObj.numberUnAnswered++;
      clearInterval(triviaObj.interval);
      //next question in 5 sec
      setTimeout(triviaObj.GameStart, 5000)
    },
      //reset game function
    resetGame: function() {
      clearInterval(triviaObj.interval);
      triviaObj.userAnswers = [],

        triviaObj.questionCount = 0,
        triviaObj.beginInt = 0,

        triviaObj.timer = 25,
        triviaObj.btnClicked = false,
        triviaObj.numberCorrect = 0,
        triviaObj.numberIncorrect = 0,
        triviaObj.numberUnAnswered = 0

    },



  }



  $(".answers").on('click', function(event) {


    $('.answers').attr('disabled', 'true');
    triviaObj.degrees = 0;
    // console.log($(this).data());
    triviaObj.userAnswers.push($(this).data('value'));
    $('p.questions').hide();
    clearInterval(triviaObj.interval);
    triviaObj.answerClick = true;
    triviaObj.answerPick();
    triviaObj.questionCount++;

    // triviaObj.GameStart();

  });
  $("#startGame").on('click', function(event) {
    var start = $('#audio1')[0]
    console.log(this);
    $("#startGame").hide();
    start.play();

    setTimeout(triviaObj.GameStart, 2000);

    // triviaObj.GameStart();

  });
//restart clicked
  $("#restartGame").on('click', function(event) {
    $("#restartGame").hide();
    $("#gameDone").hide();
    $('#gameUnanswered').children('p').remove();
    $('#gameTotalWrong').children('p').remove();
    $('#gameTotalCorrect').children('p').remove();
    $('#gameUnanswered').hide();
    $('#gameTotalWrong').hide();
    $('#gameTotalCorrect').hide();



    triviaObj.resetGame();
    setTimeout(triviaObj.GameStart, 3000);
    clearInterval(triviaObj.interval);
  });


//default
  $('p.questions').hide();
  $('#wrong').hide();
  $('#correct').hide();
  $('#thisCorrectAnswer').hide();
  $('#pic').hide();
  $('#gameDone').hide();
  $('#restartGame').hide();
  $('#outOfTime').hide();
  $('#thisCorrectAnswer').hide();
  $('.timeRemaining').hide();
  $('.answerRow ').hide();
  $('#gameTotalCorrect').hide()
  $('#gameTotalWrong').hide()
  $('#gameUnanswered').hide()
  $('.pedal').hide()



});
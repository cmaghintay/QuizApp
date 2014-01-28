        
//Variables        

        var i = 0;

        var Q0 = ["What is the second letter of the alphabet?",
                  "A",
                  "B",
                  "C",
                  /*ANSWER*/"B"];

        var Q1 = ["What is the fourth letter of the alphabet?",
                  "E",
                  "F",
                  "G",
                  /*ANSWER*/"E"];
        
        var question = Q0[0];
        var answer1 = Q0[1];
        var answer2 = Q0[2];
        var answer3 = Q0[3];

//        var question = document.getElementById("question");
//        var answer1 =  document.getElementById("option1");
//        var answer2 =  document.getElementById("option2");
//        var answer3 =  document.getElementById("option3");
        
        function newGame() {
            $("#titleScreen").fadeOut(function(){
    
                $("h4").replaceWith("<h4>"+question+"</h4>");
                $("#option1").replaceWith("<span id='option1'>"+answer1+"</span>");
                $("#option2").replaceWith("<span id='option2'>"+answer2+"</span>");                   $("#option3").replaceWith("<span id='option3'>"+answer3+"</span>");
                $("#questionScreen").fadeIn();
                
            });

        };    

//        function validateQuestion() {
//            var answersArray = document.questionsList.answer;
//
//            for (i=0; i < radioArray.length; i++){
//               if (radioArray[i].checked){
//                  var userAnswer = radioArray[i]Value;
//               };
//            };
//        };
        
        
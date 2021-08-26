const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('results');
const quizQuestions = [
    {question:"What is one of Henrys research skills?:",
    answers:{
        a:"Eating a big mac",
        b:"Throwing an axe",
        c:"Literature searching and reviews",
        d:"Literature mining and reviews"
    },
    correctAnswer:"d"},
    {question:"Where is the henriques group located?:",
    answers:{
        a:"Kelvin grove",
        b:"TRI",
        c:"QIMR",
        d:"Gardens point"
    },
    correctAnswer:"b"},
    {question:"Which of the following is not one of Henrys technical skills?:",
    answers:{
        a:"Molecular biology",
        b:"Cytotoxicity assays",
        c:"Communication in social situations",
        d:"Recombinant protein expression and purification"
    },
    correctAnswer:"c"},
    {question:"The cancer Henry’s research focuses on is?:",
answers:{
        a:"Melanoma",
        b:"Myeloma",
        c:"Glioblastoma",
        d:"Squamous cell carcinoma"
},
correctAnswer:"a"}
];
function buildQuiz(){
    const output= [];
        for(i=0; i<quizQuestions.length;i++){
          const answers=[];
          for(letter in quizQuestions[i].answers){
              answers.push(
                  '<label>'

         + '<input type="radio" name="question'+i+'" value="'+letter+'">'

         + letter + ': '

         + quizQuestions[i].answers[letter]

         + '</label>'

         );
          } 
          output.push(

            '<div class="question">' + quizQuestions[i].question + '</div>'
          
            + '<div class="answers">' + answers.join('') + '</div>'
          
            );
            quizContainer.innerHTML=output.join('')
        }
function showResults() {
    var answerContainers = quizContainer.querySelectorAll('.answers');
            var numCorrect=0;
            for(i=0;i<quizQuestions.length;i++){
                userAnswer=(answerCOntainers[i].querySelectorAll('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer===quizQuestions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';}
                else{
                answerContainers[i].style.color='red';
            }
        }
        
            if(numCorrect===0){
                resultsContainer.innerHTML="That wasn't your best effort - you didn't get a single answer correct.";
            }
            if(numCorrect===1){
                resultsContainer.innerHTML="There's room for improvement there! You only got one correct answer.";
            }
            if(numCorrect===2){
                resultsContainer.innerHTML="That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
            }
            if(numCorrect===3){
                resultsContainer.innerHTML="Congratulations! You got a good score of 3 out of 4 for your responses. You know Henry lamb pretty well!";
            }
            if(numCorrect===4){
                resultsContainer.innerHTML="Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Henry Lamb so well!";
            }}
        }
        buildQuiz();
            submitButton.onclick=function(){
                showResults();
            }
// explain pacakges here, a little bit about nodejs
const rs = require("readline-sync");

//Welcome your users!
console.log('Hey, Welcome to my Know more about me Game!');

let userName = rs.question('May I know your name?');

let userMsg = `Hey ${userName}, Good to see you here, Let's check how much you know about me.`

console.log(userMsg);

let questions =[
{
  ques:'What is my favourite food?',
  ans:'Dosa'},
  {ques:'What I like to do most in my free time?',
  ans:'Dance'},
  {ques:'Where do i put up?',
  ans:'Delhi'},
  {ques:'Where did i done my graduation from (place)?',
  ans:'Greater Noida'},
  {ques:'How many siblings do I have?',
  ans:'3'}
]

let score = 0;

function playthegame(ques,answer){
  let isAnswerCorrect = false;

  let userAnswer = rs.question(ques); 

  if(answer === userAnswer){
    isAnswerCorrect = true;
    score = score + 1;
    return isAnswerCorrect
  }else{
    isAnswerCorrect = false;
    score = score  - 1;
    return isAnswerCorrect
  }

}

let i =0;
while(questions.length > i){
  const isCorrect = playthegame(questions[i].ques,questions[i].ans);
  if(isCorrect){
    console.log('Hey, you are Correct!')
  }
  
  i++;

}

if(score > 2){
  console.log('Good Job!!, Your score is', score );
  }
  else{
    console.log('You need to know me better buddy!!, Your score is', score );
  }
  
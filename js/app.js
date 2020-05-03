'use strict';

var score = 0;

var name = prompt('Welcome to my site! What is your name?');

//first five questions in a function

function questionFirstFive() {
  var questionArray = [
    'Well hello there ' + name + '. Quiz time! Is my name Hinkle McKrinkle?',
    'Okay, next question. Am I an alpaca?',
    'Take a wild guess. Do you think I enjoy music?',
    'Do you think I need a haircut? I was trying to grow a sweet fashion mullet before this pandemic destroyed my stylist\'s career and now my mop is starting to get out of hand.',
    'What are your thoughts on my code? Do you think I might make a good developer someday?'
  ];
    
  var answerArray = [
    'no',
    'no',
    'yes',
    'no',
    'yes'
  ];
    
  var correctResponse = [
    'That\'s right. It is Steve.',
    'Correct. I\'m a close cousin of the alpaca, a human.',
    'You would be correct. In that respect, I am like just about everyone else in the world. So unique.',
    'I agree. Besides, I can always cut it myself if I get too desperate.',
    'Say, thanks. I appreciate the vote of confidence ' + name + '. I will be rooting for you too!',
  ];
    
    
  var incorrectResponse = [
    'Close! It is Steve. I can see how you would get the two confused.',
    'Very funny ' + name + '.',
    'Of course I do. And in fact, I have never met a person nor alpaca who does not enjoy listening to music.',
    'Hey, take it easy. Maybe you should look at yourself in the mirror ' + name + '.',
    'That\'s just like, you\'re opinion man.'
  ];

  for (var i = 0; i < questionArray.length; i++) {
    var answer = prompt(questionArray[i]);
    if (answer.toLowerCase()[0] === answerArray[i][0]) {
      alert(correctResponse[i]);
      score++;
      console.log('question ' + i + ' response is ' + answer);
    } else {
      alert(incorrectResponse[i]);
      console.log('question ' + i + ' response is ' + answer);
    }
  }
} 

// Question 6 

function questionSix() {
  alert('Let\'s play a guessing game.');
  var correctAnswer = Math.floor(Math.random() * 20 + 1);
  for(var i = 0; i < 4; i++){
    var numberGuess = prompt('What number am I thinking of?');
    if(i === 3){
      alert('Sorry. You\'re out of guesses!');
    } else if(parseInt(numberGuess) === correctAnswer){
      console.log(score ++);
      alert('Wow. How did you guess that?');
      break;
    } else if(parseInt(numberGuess) > correctAnswer){
      alert('Too high. Try again.');
      // break; Not sure if I need this break
    } else if(parseInt(numberGuess) < correctAnswer){
      alert('Too low. Try again.');
    }
  }
    if(i === 4){
      alert('The number was ' + correctAnswer + '!');
    }
}

// Question 7

function questionSeven() {
  alert('Okay, one more game.');
  var favBand = 'the beatles';
  var favBands = ['radiohead', 'big thief', 'beck', 'laura marling', 'the beatles', 'steely dan', 'joni mitchell', 'new order', 'tom petty', 'war on drugs'];
  
  for(var i = 0; i < 6; i++){
    var bandGuess = prompt('Which of these is my favorite band? The options are ' + favBands[0] + ', ' + favBands[1] + ', ' + favBands[2] + ', ' + favBands[3] + ', ' + favBands[4] + ', ' + favBands[5] + ', or ' + favBands[6] + '.');
    if((i === 5) && (bandGuess.toLowerCase() !== favBand)){
      alert('Sorry, you\'re out of guesses!.');
      break;
    } else if(bandGuess.toLowerCase() === favBand){
      alert('Great guess!');
      console.log(score++);
      break;
    } else if(bandGuess.toLowerCase() !== favBand){
      alert('A great artist. But not my favorite! You should check out the music anyway because it rules. Keep guessing.');
    } 
  }
    if(i === 6){
    } alert('It is the Beatles');
}

// questionFirstFive();
// questionSix();
// questionSeven();
      
// alert('You finished with ' + score + ' points!')
      
// console.log('This was their score:' + score );
      



      
      
  
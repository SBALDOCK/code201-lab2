'use strict';

var yourName = prompt('Welcome to my site! What is your name?');
// console.log('Their name is ' + name);


var score = 0;
function questionOne() {
  // Question - What is my name?
<<<<<<< HEAD
var myName = prompt('Well hello there ' + name + '. Quiz time! Is my name Hinkle McKrinkle?');
  if(myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'y'){
  alert('Close! It is Steve. I can see how you would get the two confused.');
  } else if(myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n'){
  console.log(score ++)
  alert('That\'s right. It is Steve. Your score is ' + score + ' .');
=======
  var myName = prompt('Well hello there ' + yourName + '. Quiz time! Is my name Hinkle McKrinkle?');
  if(myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'y'){
    alert('Close! It is Steve. I can see how you would get the two confused.');
  } else if(myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n'){
    console.log(score ++);
    alert('That\'s right. It is Steve. Your score is ' + score + ' .');
>>>>>>> d0d446e754be06411c4727f08b02b75e57ca5568
  } else {
  alert('Close enough! Let\'s move on!');
  }
  // console.log('Is my name Hinkle McKrinkle? ' + name + ' says ' + myName);  
}

function questionTwo() {
  // Question - Man or alpaca?
<<<<<<< HEAD
var humanOrAlpaca = prompt('Okay, next question. Am I an alpaca?')
  if(humanOrAlpaca.toLowerCase() === 'yes' || humanOrAlpaca.toLowerCase() === 'y'){
  alert('Very funny ' + name + '. Your score is ' + score + ' .'); 
  } else if(humanOrAlpaca.toLowerCase() === 'no' || humanOrAlpaca.toLowerCase() === 'n'){
  console.log(score ++)
  alert('Correct. I\'m a close cousin of the alpaca, a human. Your score is ' + score + ' .');
=======
  var humanOrAlpaca = prompt('Okay, next question. Am I an alpaca?');
  if(humanOrAlpaca.toLowerCase() === 'yes' || humanOrAlpaca.toLowerCase() === 'y'){
    alert('Very funny ' + name + '. Your score is ' + score + ' .');
  } else if(humanOrAlpaca.toLowerCase() === 'no' || humanOrAlpaca.toLowerCase() === 'n'){
    console.log(score ++);
    alert('Correct. I\'m a close cousin of the alpaca, a human. Your score is ' + score + ' .');
>>>>>>> d0d446e754be06411c4727f08b02b75e57ca5568
  } else {
  alert('I will take a wild guess and assume that you do not think I\'m a cute furry alpaca. Your score is ' + score + ' .');
  }
  // console.log('Am I an alpaca? ' + name + ' says ' + humanOrAlpaca);
}

function questionThree() {
  //  Question - Do I like music?
<<<<<<< HEAD
var likeMusic = prompt('Take a wild guess. Do you think I enjoy music?')
  if(likeMusic.toLowerCase() === 'yes' || likeMusic.toLowerCase() === 'y'){
  console.log(score ++)
  alert('You would be correct. In that respect, I am like just about everyone else in the world. So unique. Your score is ' + score + ' .');
  } else if(likeMusic.toLowerCase() === 'no' || likeMusic.toLowerCase() === 'n'){
  alert('Of course I do. And in fact, I have never met a person nor alpaca who does not enjoy listening to music. Your score is still ' + score + ' .')
  } else {
  alert('Have you seen the movie Lost In Translation? I think that just happened. Your score is still ' + score + ' .')
=======
  var likeMusic = prompt('Take a wild guess. Do you think I enjoy music?');
  if(likeMusic.toLowerCase() === 'yes' || likeMusic.toLowerCase() === 'y'){
    console.log(score ++);
    alert('You would be correct. In that respect, I am like just about everyone else in the world. So unique. Your score is ' + score + ' .');
  } else if(likeMusic.toLowerCase() === 'no' || likeMusic.toLowerCase() === 'n'){
    alert('Of course I do. And in fact, I have never met a person nor alpaca who does not enjoy listening to music. Your score is still ' + score + ' .');
  } else {
    alert('Have you seen the movie Lost In Translation? I think that just happened. Your score is still ' + score + ' .');
>>>>>>> d0d446e754be06411c4727f08b02b75e57ca5568
  }
  // console.log('Do I enjoy music? ' + name + ' says ' + likeMusic);
}

function questionFour() {
  // Question - Do I need a haircut?
  var needHaircut = prompt('Do you think I need a haircut? I was trying to grow a sweet fashion mullet before this pandemic destroyed my stylist\'s career and now my mop is starting to get out of hand.');
  if(needHaircut.toLowerCase() === 'yes' || needHaircut.toLowerCase() === 'y'){
    alert('Hey, take it easy. Maybe you should look at yourself in the mirror ' + name + '. Your score is  still ' + score + ' .');
  } else if(needHaircut.toLowerCase() === 'no' || needHaircut.toLowerCase() === 'n'){
<<<<<<< HEAD
    console.log(score ++)
    alert('I can always cut it myself if I get too desperate. Your score is ' + score + ' .');
=======
    console.log(score ++);
    alert('I can always cut it myself if I get too desperate. You have ' + score + ' points still.');
>>>>>>> d0d446e754be06411c4727f08b02b75e57ca5568
  } else {
    alert('Isn\'t hair weird? I mean, it just keeps growing and growing out of you. It never stops! Keep going! Your score is ' + score + ' .');
  }
<<<<<<< HEAD
  

  // Question - Good developer?
var goodDeveloper = prompt('What are your thoughts on my code? Do you think I might make a good developer someday?');
  if(goodDeveloper.toLowerCase() === 'yes' || goodDeveloper.toLowerCase() === 'y'){
  console.log(score ++)
  alert('Say, thanks. I appreciate the vote of confidence ' + name + '. I will be rooting for you too! You now have ' + score + ' points.');
=======
  // console.log('Do I need a haircut? ' + name + ' says ' + needHaircut);
}

function questionFive() {
  // Question - Good developer?
  var goodDeveloper = prompt('What are your thoughts on my code? Do you think I might make a good developer someday?');
  if(goodDeveloper.toLowerCase() === 'yes' || goodDeveloper.toLowerCase() === 'y'){
    console.log(score ++);
    alert('Say, thanks. I appreciate the vote of confidence ' + name + '. I will be rooting for you too! You now have ' + score + ' points.');
>>>>>>> d0d446e754be06411c4727f08b02b75e57ca5568
  } else if(goodDeveloper.toLowerCase() === 'no' || goodDeveloper.toLowerCase() ==='n'){
  alert('That\'s just like, you\'re opinion man. You are stuck at ' + score + ' points.');
  } else {
  alert('I hereby challenge you to a code-off! You have' + score + ' points.');
  }
  // console.log('Can I make a good developer? ' + name + ' says ' + goodDeveloper);
<<<<<<< HEAD


 // Here is a number guessing game
  alert('Let\'s play a guessing game.')
=======
}


function questionSix() {
// Here is a number guessing game
  alert('Let\'s play a guessing game.');
>>>>>>> d0d446e754be06411c4727f08b02b75e57ca5568

  var correctAnswer = Math.floor(Math.random() * 20 + 1);

<<<<<<< HEAD
for(var i = 0; i < 4; i++){
  var numberGuess = prompt('What number am I thinking of?');
  if(i === 3){
  alert('Sorry. You\'re out of guesses! Your score is ' + score + ' .');
  } else if(parseInt(numberGuess) === correctAnswer){
  console.log(score ++)
  alert('Wow. How did you guess that? You have ' + score + ' points.');
  break;
  } else if(parseInt(numberGuess) > correctAnswer){
  alert('Too high. Try again.');
  // break; Not sure if I need this break
  } else if(parseInt(numberGuess) < correctAnswer){
  alert('Too low. Try again.');
  } 
}
  if(i === 4){
  alert('The number was 8!')
  }
  alert('Okay, one more game')
=======
  for(var i = 0; i < 4; i++){
    var numberGuess = prompt('What number am I thinking of?');
    if(i === 3){
      alert('Sorry. You\'re out of guesses! Your score is ' + score + ' .');
    } else if(parseInt(numberGuess) === correctAnswer){
      console.log(score ++);
      alert('Wow. How did you guess that? You have ' + score + ' points.');
      break;
    } else if(parseInt(numberGuess) > correctAnswer){
      alert('Too high. Try again.');
    // break; Not sure if I need this break
    } else if(parseInt(numberGuess) < correctAnswer){
      alert('Too low. Try again.');
    }
  }
  if(i === 4){
    alert('The number was ' + correctAnswer + ' !');
  }
}
>>>>>>> d0d446e754be06411c4727f08b02b75e57ca5568

function questionSeven() {
  alert('Okay, one more game');
  // Here is a game where someone tries to guess my favorite musical artist
<<<<<<< HEAD
  var favBand = 'the beatles'
  var favBands = ['radiohead', 'big thief', 'beck', 'laura marling', 'the beatles', 'steely dan', 'joni mitchell', 'new order', 'tom petty', 'war on drugs'];

for(var i = 0; i < 5; i++){
  var bandGuess = prompt('Which of these is my favorite band? You have six guesses. The options are: ' + favBands);
  if(i === 4){
  prompt('Last guess! Which is it? ' + favBands);
  } else if(bandGuess.toLowerCase() == favBand){
  alert('Great guess. I love The Beatles. You have ' + score + ' points.');
  console.log(score ++)
  break;
  } else if(bandGuess != favBand){
  alert('A great artist. But not my favorite! You should check out the music anyway because it rules. Keep guessing, you have ' + score + ' points.');
  }
}
  if(i === 5){
  alert('My favorite band is the Beatles!');
  }
  alert('You finished with ' + score + ' points!')
=======
  var favBand = 'The Beatles'
  var favBands = ['Radiohead', 'Big Thief', 'Beck', 'Laura Marling', 'The Beatles', 'Steely Dan', 'Joni Mitchell', 'New Order', 'Tom Petty', 'War On Drugs'];

  for(var i = 0; i < 5; i++){
    var bandGuess = prompt('Which of these is my favorite band? You have six guesses. The options are: ' + favBands[0] + ' ' + favBands[1]);
    if(i === 4){
      prompt('Last guess! Which is it? ' + favBands);
    } else if(bandGuess.toLowerCase() === favBand){
      alert('Great guess. I love The Beatles. You have ' + score + ' points.');
      console.log(score ++);
      break;
    } else if(bandGuess.toLowerCase() !== favBand){
      alert('A great artist. But not my favorite! You should check out the music anyway because it rules. Keep guessing, you have ' + score + ' points.');
    }
  }
  if(i === 5){
    alert('My favorite band is the Beatles!');
  }
}
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

alert('You finished with ' + score + ' points!')
>>>>>>> d0d446e754be06411c4727f08b02b75e57ca5568

console.log('This was their score:' + score );


  
  


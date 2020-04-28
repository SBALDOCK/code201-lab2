'use strict';

  var name = prompt('Welcome to my site! What is your name?');
    console.log('Their name is ' + name);

  var myName = prompt('Well hello there ' + name + '. Quiz time! Is my name Hinkle McKrinkle?');
      if(myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'y'){
      alert('Close! It is Steve. I can see how you would get the two confused.');
      } else if(myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n'){
      alert('That\'s right. It is Steve.');
      } else {
      alert('Close enough! Let\'s move on!');
      }
      console.log('Is my name Hinkle McKrinkle? ' + name + ' says ' + myName);
   
  var humanOrAlpaca = prompt('Okay, next question. Am I an alpaca?')
      if(humanOrAlpaca.toLowerCase() === 'yes' || humanOrAlpaca.toLowerCase() === 'y'){
        alert('Very funny ' + name + '.'); 
      } else if(humanOrAlpaca.toLowerCase() === 'no' || humanOrAlpaca.toLowerCase() === 'n'){
        alert('Correct. I\'m a close cousin of the alpaca, a human.');
      } else {
        alert('I will take a wild guess and assume that you do not think I\'m a cute furry alpaca.');
      }
      console.log('Am I an alpaca? ' + name + ' says ' + humanOrAlpaca);

  var likeMusic = prompt('Take a wild guess. Do you think I enjoy music?')
      if(likeMusic.toLowerCase() === 'yes' || likeMusic.toLowerCase() === 'y'){
        alert('You would be correct. In that respect, I am like just about everyone else in the world. So unique.');
      } else if(likeMusic.toLowerCase() === 'no' || likeMusic.toLowerCase() === 'n'){
        alert('Of course I do. And in fact, I have never met a person nor alpaca who does not enjoy listening to music.')
      } else {
        alert('Have you seen the movie Lost In Translation? I think that just happened.')
      }
      console.log('Do I enjoy music? ' + name + ' says ' + likeMusic);

  var needHaircut = prompt('Do you think I need a haircut? I was trying to grow a sweet fashion mullet before this pandemic destroyed my stylist\'s career and now my mop is starting to get out of hand.');
      if(needHaircut.toLowerCase() === 'yes' || needHaircut.toLowerCase() === 'y'){
        alert('Hey, take it easy. Maybe you should look at yourself in the mirror ' + name + '.');
      } else if(needHaircut.toLowerCase() === 'no' || needHaircut.toLowerCase() === 'n'){
        alert('You are probably right. I can always cut it myself if I get too desperate.');
      } else {
        alert('Isn\'t hair weird? I mean, it just keeps growing and growing out of you. It never stops!');
      }
      console.log('Do I need a haircut? ' + name + ' says ' + needHaircut);
  
  var goodDeveloper = prompt('What are your thoughts on my code? Do you think I might make a good developer someday?');
      if(goodDeveloper.toLowerCase() === 'yes' || goodDeveloper.toLowerCase() === 'y'){
        alert('Say, thanks. I appreciate the vote of confidence ' + name + '. I will be rooting for you too!');
      } else if(goodDeveloper.toLowerCase() === 'no' || goodDeveloper.toLowerCase() ==='n'){
        alert('That\'s just like, you\'re opinion man.');
      } else {
        alert('I hereby challenge you to a code-off!');
      }
      console.log('Can I make a good developer? ' + name + ' says ' + goodDeveloper);

      alert('Once again, welcome to my page ' + name + '. You are quite a gem.');

      


  


  
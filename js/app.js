'use strict';

var name = prompt('Welcome to my site! What is your name?')
    console.log('User name is ' + name);
var firstTime = prompt('Well hello there ' + name + '. Is this your first time visiting my page?')
    if(firstTime.toLowerCase() === 'yes' || firstTime.toLowerCase() === 'y'){
      alert('I am glad you dropped by today ' + name + '. There is a first time for everything!')
    } else if(firstTime.toLowerCase() === 'no' || firstTime.toLowerCase() === 'n'){
      alert('Well that is interesting because I literally created this page a few minutes ago.')
    } else {
      alert('I asked a simply yes or no question. Do you mind accomodating me ' + name + '? Thanks! ')
    } 

    var favoriteGenre = prompt('Okay, let\'s talk about music. Do you have a favorite type?')
    if(favoriteGenre.toLowerCase() === 'yes' || favoriteGenre.toLowerCase() === 'y'){
     var country = prompt('Let me guess. Is it country?')
        if(country.toLowerCase() === 'yes' || country.toLowerCase() === 'y'){
          var classicCountry = prompt('Me too! Do you enjoy classic country ' + name + '?')
            if(classicCountry.toLowerCase() === 'yes' || classicCountry.toLowerCase() === 'y'){
              alert('Nice. It is my favorite kind of country.')
            } else { 
              alert('You might like Buck Owens. What a voice!')
            }
        } else {
          alert('Got it. You should check out some Buck Owens. You might like it.')
        }
   } else {
     var hipHop = prompt('Really? Come on, tell me your favorite genre. Do you like Hip Hop?')
    } if(hipHop.toLowerCase() === 'yes' || hipHop.toLowerCase() === 'y'){
     var digablePlanets = prompt('Dig that. I really love early 90\'s hip hop. Are you familiar with Digable Plants?')
     if(digablePlanets.toLowerCase() === 'yes' || digablePlanets.toLowerCase() === 'yes'){
       prompt('Ah, I see you have good taste!')
     } else if(digablePlanets.toLowerCase() === 'no' || digablePlanets.toLowerCase() === 'n'){
       prompt('I love them. Check out the song Art Of Easing for a good first listen.')
     } else {
       prompt('Sorry, I didn\'t catch that. No problem! Give Digable Planets a listen when you have a chance!')
     }
  }
     else {
     alert('I recommend checking out A Tribe Called Quest. They are one of my favorite groups.')
   }

    



  
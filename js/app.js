'use strict';

var watchTigerKing = prompt('Did you watch Tiger King?');

// if they did watch Tiger King, I want to say 'Did Carol Baskin kill her husband?'
// if they didn't watch Tiger King, I want to say 'Sorry'

if(watchTigerKing.toLowerCase() === 'yes'){
  alert('Did Carol Baskin kill her husband?');
} else if(watchTigerKing.toLowerCase() === 'no'){
  alert('Sorry');
} else {
  prompt('Please answer with a yes or a no');
  }

  // var likesCoffee = true;
  // if(likesCoffee){
  //   // do something
  // }

  
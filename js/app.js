'use strict';

alert ('Hello and welcome! I would like to test how much you know about me');
alert ('So let\'s begin');


var alejandro = true;
while(alejandro){
  var myName = prompt ('Is my name Alejandro? yes/no');
  myName.toLowerCase();
  if (myName[0] === 'y'){
    alejandro = false;
    console.log('correct');
    alert ('Correct! my middle name is Alejandro!');
  }
  else if (myName[0] === 'n'){
    alejandro = false;
    console.log('wrong');
    alert ('Wrong! my middle name is Alejandro!');
  }
  else {
    alert ('That is not a valid answer, please try again with yes or no');
  }
}

var pets = true;
while(pets){
  var cats = prompt ('Do i have any pets? yes/no');
  cats.toLowerCase();
  if (cats[0] === 'y'){
    pets = false;
    console.log('correct');
    alert ('Correct! I have 2 fat cats!');
  }
  else if (cats[0] === 'n'){
    pets = false;
    console.log('wrong');
    alert ('Wrong! I have 2 fat cats!');
  }
  else {
    alert ('That is not a valid answer, please try again with yes or no');
  }
}

var spain = true;
while(spain){
  var mexican = prompt ('Am i from Spain? yes/no');
  mexican.toLowerCase();
  if (mexican[0] === 'y'){
    spain = false;
    console.log('wrong');
    alert ('Wrong! I was born in Mexico!');
  }
  else if (mexican[0] === 'n'){
    spain = false;
    console.log('correct');
    alert ('Correct! I am actually from Mexico!');
  }
  else {
    alert ('That is not a valid answer, please try again with yes or no');
  }
}

var karate = true;
var atempts = 1;
while(karate){
  var years = prompt ('From 1 + 10, How many years did i train Karate for?');
  console.log(years);
  if (years === '11'){
    karate = false;
    alert ('Nice! that was a trick question, I did 11 years of training.');
  }
  else {
    alert ('Try again');
    console.log(atempts + 1);
  }

}
var pizza = true;
while(pizza){
  var yum = prompt ('Do i like pineapple pizza? yes/no');
  yum.toLowerCase();
  if (yum[0] === 'y'){
    pizza = false;
    console.log('correct');
    alert ('I love pineapple pizza!');
  }
  else if (yum[0] === 'n'){
    pizza = false;
    console.log('wrong');
    alert ('Correct! I don\'t like it, i effin love it!');
  }
  else {
    alert ('That is not a valid answer, please try again with yes or no');
  }
}






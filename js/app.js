'use strict';

alert ('Hello and welcome! I would like to test how much you know about me');
alert ('So let\'s begin');

var answers = [];
var alejandro = true;
while(alejandro){
  var myName = prompt ('Is my name Alejandro? yes/no');
  myName.toLowerCase();
  if (myName[0] === 'y'){
    alejandro = false;
    answers.push(1);
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
    answers.push(1);
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
    answers.push(1);
    console.log('correct');
    alert ('Correct! I am actually from Mexico!');
  }
  else {
    alert ('That is not a valid answer, please try again with yes or no');
  }
}
var seattle = true;
while(seattle){
  var mytime = prompt ('Have i lived in Seattle for 6 years? yes/no');
  mytime.toLowerCase();
  if (mytime[0] === 'y'){
    seattle = false;
    answers.push(1);
    console.log('correct');
    alert ('Correct! 6 years and loving it!');
  }
  else if (mytime[0] === 'n'){
    seattle = false;
    console.log('wrong');
    alert ('Wrong! I got here from Mexico in 2013!');
  }
  else {
    alert ('That is not a valid answer, please try again with yes or no');
  }
}
var pizza = true;
while(pizza){
  var yum = prompt ('Do i like pineapple pizza? yes/no');
  yum.toLowerCase();
  if (yum[0] === 'y'){
    pizza = false;
    answers.push(1);
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

var karate = true;
var yearatempt = 1;//this is the variable that keeps track of the amount of times it takes a user to get it right
while(karate){
  for (var atempts = 1; atempts < 5; atempts++){
    var years = prompt ('How many years did i train Karate for?');
    parseInt (years);
    if (years == 11){
      atempts = 6; //this 6 is just here to end the for loop when the answer is correct
      answers.push(1);
      alert ('Yes! I trained Karate for 11 years.');
      console.log('correct');
    }
    else if (years < 11) {
      alert ('Try a higher number! (atempt ' + atempts + '/4)');
      console.log(yearatempt++);
    }
    else if (years > 11) {
      alert ('How about you try a smaller number? (atempt ' + atempts + '/4)');
      console.log(yearatempt++);
    }
    karate = false;
  }
}

for (var caratempt = 1; caratempt < 7; caratempt++){
  var cars = ['nissan', 'pontiac', 'mitsubishi', 'saab', 'toyota'];
  var answer = prompt('Can you guess 1 brand of car i have owned?');
  answer.toLowerCase();
  if (answer == cars[0]){
    alert('Correct! I\'ve owned Nissan, Pontiac, Saab, Toyota and Mitsubishi!');
    answers.push(1);
    console.log(answer);
  }
  else if (answer == cars[1]){
    alert('Correct! I\'ve owned Pontiac, Nissan, Saab, Toyota and Mitsubishi!');
    answers.push(1);
    console.log(answer);
  }
  else if (answer == cars [2]){
    alert('Correct! I\'ve owned Mitsubishi, Pontiac, Saab, Toyota and Nissan!');
    answers.push(1);
    console.log(answer);
  }
  else if (answer == cars [3]){
    alert('Correct! I\'ve owned Saab, Pontiac, Nissan, Toyota and Mitsubishi!');
    answers.push(1);
    console.log(answer);
  }
  else if (answer == cars [4]){
    alert('Correct! I\'ve owned Toyota, Pontiac, Saab, Nissan and Mitsubishi!');
    answers.push(1);
    console.log(answer);
  }
  else {
    alert ('Wrong, but keep trying! (atempt ') + caratempt + ('/6)');
  }
  break;
}
alert ('Your correct answers: ' + answers.length);

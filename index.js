var randomNumber1 = Math.floor(Math.random()*6) +1; //1-6 random no
//use random number to select random dice image
var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

//change attributes of elements

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player one wins! 🚩"
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🚩 Player two wins! 🚩"
}
else{
  document.querySelector("h1").innerHTML = "🚩 Both win! 🚩"
}

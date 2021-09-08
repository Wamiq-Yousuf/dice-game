var randomNum1 = Math.floor((Math.random()*6)+1);
var randomimg1 = "images/dice" +randomNum1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg1);



var randomNum2 = Math.floor((Math.random()*6)+1);
var randomimg2 = "images/dice" +randomNum2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

if(randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player2 wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}

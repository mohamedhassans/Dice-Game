var x = Math.round(Math.random() * 7) + 1;
var y = Math.round(Math.random() * 6) + 1;

switch (x) {
  case 1  :
    document.querySelector(".img1").src = "images/dice1.png";break;
  case 2:
    document.querySelector(".img1").src = "images/dice2.png";break;
  case 3:
    document.querySelector(".img1").src = "images/dice3.png";break;
  case 4:
    document.querySelector(".img1").src = "images/dice4.png";break;
  case 5:
    document.querySelector(".img1").src = "images/dice5.png";break;
  case 6:
    document.querySelector(".img1").src = "images/dice6.png";break;

}
// if (x == 1) {
// document.querySelector(".img1").src = "images/dice1.png";
// }
// else if (x == 2) {
// document.querySelector(".img1").src = "images/dice2.png";
// }
// else if (x == 3) {
// document.querySelector(".img1").src = "images/dice3.png";
// }
// else if (x == 4) {
// document.querySelector(".img1").src = "images/dice4.png";
// }
// else if (x ==5) {
// document.querySelector(".img1").src = "images/dice5.png";
// }
// else{
//   document.querySelector(".img1").src = "images/dice6.png";
// }


switch (y) {
  case 1:
    document.querySelector(".img2").src = "images/dice1.png";break;
  case 2:
    document.querySelector(".img2").src = "images/dice2.png";break;
  case 3:
    document.querySelector(".img2").src = "images/dice3.png";break;
  case 4:
    document.querySelector(".img2").src = "images/dice4.png";break;
  case 5:
    document.querySelector(".img2").src = "images/dice5.png";break;
  case 6:
    document.querySelector(".img2").src = "images/dice6.png";break;

}
// if (y == 1) {
// document.querySelector(".img2").src = "images/dice1.png";
// }
// else if (y == 2) {
// document.querySelector(".img2").src = "images/dice2.png";
// }
// else if (y == 3) {
// document.querySelector(".img2").src = "images/dice3.png";
// }
// else if (y == 4) {
// document.querySelector(".img2").src = "images/dice4.png";
// }
// else if (y ==5) {
// document.querySelector(".img2").src = "images/dice5.png";
// }
// else{
//   document.querySelector(".img2").src = "images/dice6.png";
// }

if (x > y) {
  document.querySelector("h1").textContent = "🚩Player 1 wins";
} else if (y > x) {
  document.querySelector("h1").textContent = "Player 2 wins 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}

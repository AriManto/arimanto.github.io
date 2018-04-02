// Guessing game
var goal = 8;
var guess = Number(prompt("Input a number"));
if(guess===goal){
  console.log("Good job! The number is "+goal)
}
if(guess>goal){
  console.log("Too high. Try again.")
}
if(guess<goal){
  console.log("Too low. Try again.")
}

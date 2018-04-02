var age = Number(prompt("What is your age?"));
if(age < 0) {
  console.log("Usted no ha nacido aún")
}
if(age === 21) {
  console.log("Feliz 21 cumpleaños!!")
}
// %="modulo", es el resto de la division. La division es una barra
if(age % 2 !== 0) {
  console.log("Tu edad es impar!")
}
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}

window.setTimeout(function() {

var answer = prompt("Are we there yet??")
while(answer.indexOf("yes") === -1){
  var answer = prompt("Are we there yet??");
}
alert("YAY, WE MADE IT!!!");
  }, 500);

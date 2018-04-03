function isEven(num){
  if(num%2===0){
    return true;
  }
  else {
    return false;
  }
}
// Alternativa más corta:
// function isEven(num){
//  return num%2===0;
// }

function factorial(num){
  if(num === 0) {
    var result=1;
    return result;
  }
  for (i = num-1; i>=1; i--){
    num = num*i;
  }
return num
}
// Alternativa sin el fix para el caso de '0':
// function factorial(num){
//   var result=1;
//   for(var i=2; i<=num; i++){
//     result = result*i;
//   }
//   return result
// }


function kebabToSnake(str){
  var newStr = str.replace(/-/g , "_");
  return newStr;
}

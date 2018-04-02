console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19")
var count=-10
while(count>=-10&count<=19){
  console.log(count);
  count++;
}
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")
var count=10
while(count>=10&count<=40){
  if (count %2 === 0){
    console.log(count);
  }
  count++;
}
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")
var count=300
while(count>=300&count<=333){
  if (count%2 !== 0){
    console.log(count);
  }
  count++;
}
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3, BETWEEN 5 AND 50")
var count=5
while (count>=5&count<=50){
  if (count%3==0 && count%5==0){
    console.log(count);
  }
  count++;
}

let input = document.querySelector('input');
let output = document.querySelector('.output');
let boton = document.querySelector('button');

//Tabla resumida de ASCII encoding
let tabla = [
    {"codigo":"%3C", "simbolo":"<"},
    {"codigo":"%3E", "simbolo":">"},
    {"codigo":"%23", "simbolo":"#"},
    {"codigo":"%25", "simbolo":"%"},
    {"codigo":"%7B", "simbolo":"{"},
    {"codigo":"%7D", "simbolo":"}"},
    {"codigo":"%7C", "simbolo":"|"},
    {"codigo":"%5C", "simbolo":"\\"},
    {"codigo":"%5E", "simbolo":"^"},
    {"codigo":"%7E", "simbolo":"~"},
    {"codigo":"%5B", "simbolo":"["},
    {"codigo":"%5D", "simbolo":"]"},
    {"codigo":"%60", "simbolo":"`"},
    {"codigo":"%3B", "simbolo":";"},
    {"codigo":"%2F", "simbolo":"/"},
    {"codigo":"%3F", "simbolo":"?"},
    {"codigo":"%3A", "simbolo":":"},
    {"codigo":"%40", "simbolo":"@"},
    {"codigo":"%3D", "simbolo":"="},
    {"codigo":"%26", "simbolo":"&"},
    {"codigo":"%24", "simbolo":"$"},
    {"codigo":"%2B", "simbolo":"+"},
    {"codigo":"%22", "simbolo":"\""},
    {"codigo":"%20", "simbolo":" "}
];

//Carga la lista completa de ASCII encoding, previamente adquirida desde https://www.w3schools.com/tags/ref_urlencode.asp
let xhr = new XMLHttpRequest;
xhr.open('GET', 'URLEncode.json');
xhr.onload=function(){
    if(xhr.status==200) {
        tabla = JSON.parse(xhr.response);
    }
};
xhr.send();

boton.addEventListener('click', function(e){
    e.preventDefault();
    output.innerText = convertirURL(input);
    console.log(
        "Input: "+
        input.value+
        "\nOutput: "+
        output.innerText);
});

function convertirURL(input){
    let inputConvertido = input.value;
    //For en la tabla
    for (let i = 0; i<tabla.length; i++){
        if(inputConvertido.indexOf(tabla[i].codigo !=-1))
        do { 
        inputConvertido = inputConvertido.replace(tabla[i].codigo, tabla[i].simbolo)
        }
        while (inputConvertido.indexOf(tabla[i].codigo)!=-1)  //Osea hasta que no haya mas ocurrencias de ESE codigo
    }
    return inputConvertido;
}

/*
Ejemplo
sharer.php?u=https%3A%2F%2Fapi.alumni.education%2Fcourse%2Fcalendar%2Fdiploma%2Fget%3Fformat%3Dhtml%26code%3D35877T1HJ0A8U45WW10GE4J8Y782D4PV



https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fapi.alumni.education%2Fcourse%2Fcalendar%2Fdiploma%2Fget%3Fformat%3Dhtml%26code%3D35877T1HJ0A8U45WW10GE4J8Y782D4PV
*/
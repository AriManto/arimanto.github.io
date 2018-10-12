let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


function iniciar(){
    //Oyentes de los botones
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Fácil" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }

    //Oyentes de los colores
    for (var i=0; i<squares.length;i++){
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor===pickedColor){
                messageDisplay.textContent = "Correcto!";
                changeColors(pickedColor);
                console.log(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent="Jugar de nuevo?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Sigue intentando";
            }
        });
    }
    reset();
}
iniciar();

function reset(){
    //Generar colores nuevos
    colors = generateRandomColors(numSquares);
    //Elegir un color
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent="Colores nuevos";
    h1.style.backgroundColor = "steelblue";
    for (var i=0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];  
        } else {
            squares[i].style.display = "none";
        }
    }
}

resetButton.addEventListener("click", reset);

function changeColors(color){
    for (var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
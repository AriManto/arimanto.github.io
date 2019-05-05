//Código utilizado para recuperar la tabla desde https://www.w3schools.com/tags/ref_urlencode.asp
//Abrir la consola y ejecutar
let simbolo = document.querySelectorAll('table.w3-table-all.notranslate:first-of-type td:nth-child(1)');
let codigo = document.querySelectorAll('table.w3-table-all.notranslate:first-of-type td:nth-child(2)');

let combinado = []
for (let i=0; i<simbolo.length; i++){
    combinado[i] = {"codigo":codigo[i].innerText,
                    "simbolo":simbolo[i].innerText}
}

//Luego se usa JSON.stringify(combinado) y se guarda en URLEncode.json
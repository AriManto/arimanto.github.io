let xhr = new XMLHttpRequest;
let lista = document.querySelector('.lista');
xhr.open('get', 'paginas.json');
xhr.onload = function(){
    if (xhr.status == 200){
        let array = JSON.parse(xhr.response);
        array.forEach(item => {
          lista.innerHTML += 
            '<div class="card">'+
                '<a href="'+item.url+'">'+item.nombre+'</a>'+
            '</div>';
        });
    }
}
xhr.send();
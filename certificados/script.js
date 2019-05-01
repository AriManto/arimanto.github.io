let contenedor = document.querySelector('.container');
let xhr = new XMLHttpRequest;

xhr.open('GET','capturas/certificados.json');
xhr.onload = function(){
    if(xhr.status==200) {
        let res = JSON.parse(xhr.response);
        console.dir(res)
        for(let i = 0; i < res.length; i++){
            contenedor.innerHTML +=
            '<li class="toggle">'+
                '<div class="panel">'+
                    '<div class="texto">'+
                        '<a href="'+res[i].url+'" target="_blank">'+res[i].titulo+'</a>'+
                        '<p>'+res[i].institucion+'</p>'+
                    '</div>'+
                    '<div class="icono"><i class="material-icons">expand_more</i></div>'+
                '</div>'+
                '<img src="capturas'+res[i].imgsrc+'">'+
            '</li>';          
        }
    }
    let paneles = document.querySelectorAll('.toggle');
    paneles.forEach(panel => {
        panel.addEventListener('click', function(){
            panel.classList.toggle('active');
            //Toggle del icono
            let icono = panel.children[0].children[1];
            if (icono.innerHTML == '<i class="material-icons">expand_more</i>'){
                icono.innerHTML = '<i class="material-icons">expand_less</i>';
            } else {
                icono.innerHTML = '<i class="material-icons">expand_more</i>';
            }
        });
    });
    //Para evitar que al apretar un link se realice el toggle
    let links = document.querySelectorAll('.container a');
    links.forEach(link => {
        link.addEventListener('click', function(event){
            event.stopPropagation();
        });
    });
}
xhr.send();
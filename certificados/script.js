let contenedor = document.querySelector('.container');
let xhr = new XMLHttpRequest;
let panelesActivos = false;

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
                '<img src="capturas/'+res[i].imgsrc+'">'+
            '</li>';          
        }
    }
    let paneles = document.querySelectorAll('.toggle');

    function resetearPaneles(){
        paneles.forEach(panel => {
            panel.classList.remove('active');
            //ResetearIconos
            let icono = panel.children[0].children[1];
            icono.innerHTML = '<i class="material-icons">expand_more</i>';
        })
        panelesActivos = false;
    }
    function checkearPanelesActivos(){
        paneles.forEach(panel => {
            if(panel.classList.value.includes('active')){
                panelesActivos = true;
            }
        })
    }
    function checkearPanelActivo(panel){
        return(panel.classList.value.includes('active'))
    }
    function activarPanel(panel){
        panel.classList.toggle('active');
        activarIcono(panel);
        checkearPanelesActivos();
    }
    function activarPanelDemorado(panel){
        setTimeout(function(){
            activarPanel(panel);
        }, 280);
    }

    function activarIcono(panel){
        if(checkearPanelActivo(panel)){
            let icono = panel.children[0].children[1];
            icono.innerHTML = '<i class="material-icons">expand_less</i>';
        }
    }

    paneles.forEach(panel => {
        panel.addEventListener('click', function(){
            if (panelesActivos){ //Si alguno está activo
                if(checkearPanelActivo(panel)){ // Si el panel clickeado está activo, cerrarlo
                    resetearPaneles();
                    // activarPanelDemorado(panel);
                } else {
                    resetearPaneles(); //Si el panel clickeado no está activo, resetear todos y activarlo
                    activarPanelDemorado(panel);
                }
            //Ninguno activo
            } else if (checkearPanelActivo(panel)){ //Si ninguno está activo, activar el clickeado
                resetearPaneles();
            } else {
                activarPanel(panel);
            }
            checkearPanelesActivos();
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
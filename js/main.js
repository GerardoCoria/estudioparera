let anchoViewport = window.innerHeight/6


function irAConsulta (){
    let contacto = document.getElementById("contacto")
    window.scrollTo({ top: contacto.offsetTop-(anchoViewport), behavior: 'smooth' });
}

function irAServicios(){
    let servicios = document.getElementById("servicios")
    window.scrollTo({ top: servicios.offsetTop-(anchoViewport), behavior: 'smooth' });
}

function irALinks(){
    let links = document.getElementById("links")
    window.scrollTo({ top: links.offsetTop-(anchoViewport), behavior: 'smooth' });
}

function volverArriba(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}   
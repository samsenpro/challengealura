/*
e "enter"
i "imes"
a "ai"
o "ober"
u "ufat"
*/

function Itm(obj){
    return document.getElementById(obj);
}

function ocultar_munieco(){
   let valor = Itm('txtTexto').value;

   let divVacio = '';
    if (Itm('munieco')) {
        divVacio = Itm('munieco');
    } else if (Itm('texto-vacio')){
        divVacio = Itm('texto-vacio');
    }


   if (valor !== '') {
    divVacio.style.display= 'none';
    Itm('mensajes-vacio').style.display = 'none';
    
    Itm('respuesta-encriptada').style.display = 'block';
    Itm('btnCopiar').style.display = 'block';



   } else{
    divVacio.style.display = 'block';
    Itm('mensajes-vacio').style.display = 'block';
    Itm('respuesta-encriptada').style.display = 'none';
    Itm('respuesta-encriptada').innerHTML = '';
    Itm('btnCopiar').style.display = 'none';
   }
}


function encriptar() {
    let texto = document.getElementById('txtTexto').value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
        .replace(/E/g, "Enter")
        .replace(/I/g, "Imes")
        .replace(/A/g, "Ai")
        .replace(/O/g, "Ober")
        .replace(/U/g, "Ufat");

    document.getElementById('respuesta-encriptada').innerHTML = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById('txtTexto').value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
        .replace(/Enter/g, "E")
        .replace(/Imes/g, "I")
        .replace(/Ai/g, "A")
        .replace(/Ober/g, "O")
        .replace(/Ufat/g, "U");

    document.getElementById('respuesta-encriptada').innerHTML = textoDesencriptado;
}




function copiarTexto() {
    var texto = document.getElementById("respuesta-encriptada").innerText;

    var areaTemporal = document.createElement("textarea");
    areaTemporal.value = texto;

    document.body.appendChild(areaTemporal);

    areaTemporal.select();
    areaTemporal.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(areaTemporal);
}

function filtrarTexto() {
    const textarea = document.getElementById('txtTexto');
    const texto = textarea.value;
    
    const textoFiltrado = texto
        .replace(/[A-ZÁÉÍÓÚÑáéíóúñ]/g, '')  
        .replace(/[áéíóú]/g, '') 
        .replace(/[ÁÉÍÓÚÑ]/g, '') 
    textarea.value = textoFiltrado;
}
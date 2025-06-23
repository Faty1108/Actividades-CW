/* Clase que se encarga del manejo de eventos y la creación de cookies de acuerdo a los campos en ../../index.html */

/* Constantes que refieren a los elementos del DOM */
const aviso = document.getElementById('aviso');
const crear = document.getElementById('crear');
const mostrar = document.getElementById('mostrar');
const eliminar = document.getElementById('eliminar');
const resultado = document.getElementById('resultado');


/**
 * Maneja el evento click para el botón "crear".
 * Valida los campos de entrada y si son correctos, crea una cookie
 * e imprime en pantalla la leyenda 'Cookie creada: {document.cookie}'.
 *
 * @param {MouseEvent} e - Objeto del evento click.
 */
crear.addEventListener("click", function(e){
    aviso.textContent = '';
    resultado.textContent = '';
    let nombre = document.getElementById('nombre').value;
    let valor = document.getElementById('valor').value;
    let dias =  document.getElementById('dias').value;
    if(valor === '' || nombre === '' || dias === ''){
        e.preventDefault();
        aviso.textContent = "Por favor llena correctamente todos los campos.";
    } else {
        setCookie(nombre, valor, dias);
        resultado.innerHTML = "Cookie creada: <br>" + document.cookie;
    }
});


    /**
 * Maneja el evento click para el botón "mostrar".
 * Valida el campo de entrada 'nombre', si la cookie existe imprime
 * en pantalla la leyenda 'El valor es: {valorCookie}', 'La cookie no existe' en otro caso.
 *
 * @param {MouseEvent} e - Objeto del evento click.
 */
mostrar.addEventListener("click", function(e){
    aviso.textContent = '';
    resultado.textContent = '';
    let nombre = document.getElementById('nombre').value;
    if(nombre === ''){
        e.preventDefault();
        aviso.textContent = "Por favor coloca el nombre de la cookie a mostrar.";
    } else
        resultado.innerHTML = getCookie(nombre) == null ? "La cookie no existe" : "El valor es: " + getCookie(nombre);
});


    /**
 * Maneja el evento click para el botón "eliminar".
 * Valida el campo de entrada 'nombre' y elimina la cookie.
 * Muestra en pantalla la leyenda: 'La cookie fue eliminada, las cookies restantes son: {document.cookie}'.
 *
 * @param {MouseEvent} e - Objeto del evento click.
 */
eliminar.addEventListener("click", function(e){
    aviso.textContent = '';
    resultado.textContent = '';
    let nombre = document.getElementById('nombre').value;
    if(nombre === ''){
        e.preventDefault();
        aviso.textContent = "Por favor coloca el nombre de la cookie a eliminar.";
    } else {
        deleteCookie(nombre);
        resultado.innerHTML = "La cookie fue eliminada, las cookies restantes son: <br>" + document.cookie;
    }
    
});


/**
* Crea una cookie nueva con expiración en formato GMT.
* @param {string} nombre - Nombre de la cookie a crear
* @param {string} valor - Valor de la cookie
* @param {number} dias - Tiempo de vida de la cookie en días
*/ 
console.log("nada 1");
function setCookie(nombre, valor, dias){
    let date=new Date();
    
    date.setTime(date.getTime() + (dias*24*60*60*1000));
    expiracion=date.toGMTString();
    document.cookie= `${nombre}=${valor}; expires=${expiracion}`;
}

/**
* Regresa el valor de la cookie dada. Si no la encuentra regresa <null>.
* @param nombre: nombre de la cookie a regresar
* @return valor de la cookie
*/ 
function getCookie(nombre){
    //Aquí va su código.
}

/**
* Elimina una cookie.
* @param nombre: nombre de la cookie a eliminar
*/ 
function deleteCookie(nombre){
    setCookie(nombre, "", -1);
}

setCookie("hola",54,1);




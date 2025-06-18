let mainForm = document.getElementById("mainForm");
let inputNombre = document.getElementById("nombreCompleto");
let inputEdad = document.getElementById("edad");
let inputCodigoP = document.getElementById("cP");

mainForm.addEventListener('submit', e=>{
    e.preventDefault();
    alert("¿Estás seguro de querer enviar el formulario?");
    
    //Verificación nombre
    if(isNaN(inputNombre.value)==false){
        console.log("El nombre es: " + inputNombre.value);
    }
    else{
        console.log("El nombre es inválido");
    }
    /*if(inputNombre.value==""){
        let pH=("Este campo es obligatorio");
        return pH;
    }*/

    //Verificación CP
    if(inputCodigoP.value.length==5){
        console.log("Tu código es válido "+ inputCodigoP.value);
    }
    else{
        console.log("El código es inválido");
    }

    //Verificación edad
    if(isNaN(inputEdad.value) == true)
    {
        console.log("La edad no es numérica");
    }
    else{
        console.log("La edad es numérica");
    }

    //Verificación género
    let inputGenero = document.querySelector("input[name='genero']:checked");
    let optionGenero =["masculino","femenino","otro"];

    if(optionGenero.indexOf(inputGenero.value) !=-1)
        console.log("El género está dentro de las opciones");
    else
        console.log("El género no está dentro de las opciones");
    
    //Verificación intereses
    let selecInt = document.querySelector("input[name='intereses']:checked");
    let optionInt = ["tecnologia","deporte","music","art"];

    if(optionInt.indexOf(selecInt.value) !=-1)
        console.log("Excelente interés");
    else
        console.log("No se encuentra dentro de las opciones");

    //V. país
    let selecPais = document.querySelector("select[name='pais']");
    let optionPais = ["mex","spain","arg","colom","peru","chile","ven","otros"];

    if(optionPais.indexOf(selecPais.value) !=-1)
        console.log("El país seleccionado está dentro de las opciones");
    else
        console.log("Seleccione una opción válida");

    //V. comentarios
    let inputCom = document.getElementById("comentario");

    if(inputCom ==""){
        console.log("El campo está vacío, favor de rellenar y reenviar el formulario");
    }
    else{
        console.log("Gracias por el comentario");
    }
    //V. sub. image
    let inputImage = document.getElementById("subImg");

    if(inputImage==""){
        console.log("Favor de seleccionar una imágen");
    }
    else{
        console.log("Imágen seleccionada");
    }
});
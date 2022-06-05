function validaNombre() {
    let nombre = document.forms["registro"]["nombre"].value;
    const patron = /^([a-zA-Záéíóú']+ [a-zA-Záéíóú' ]+)$/gm;
    //esta expresion regular selecciona cualquier cadena de letras de la a a la z (minusculas o mayusculas), de cualquier longitud, separada por 1 espacio, y de al menos una letra antes y despues del espacio). Porque se supone que nombre y apellidos solo tienen letras y se escriben separados por un espacio. Tambien permite apostrofes.
    //la g (global) es para que tome todas las coincidencias, no devolverla despues de la primera. La m es para que distinga entre lineas.
    const patronNumeros = /[0-9]+/gm;
    const patronSoloLetras = /^([a-zA-Záéíóú' ]+)$/gm;
    let enviar = false;

    if (nombre == "") {

        document.getElementById("nombreMal").innerHTML = "Error. El nombre es obligatorio";

    //el metodo "test" da true si la variable coincide con la expresion regular
    } else if (patronNumeros.test(String(nombre))) {

        document.getElementById("nombreMal").innerHTML = "Error. No se permiten numeros.";
    
    } else if (!patronSoloLetras.test(String(nombre))) {
        
        document.getElementById("nombreMal").innerHTML = "Error. Solo se permiten letras, espacios y apostrofes.";

    } else if (!patron.test(String(nombre)) ) {
                
        document.getElementById("nombreMal").innerHTML = "Error. Introduce al menos 1 apellido, separado por un espacio.";
     
    } else {
          document.getElementById("nombreMal").innerHTML = "";
          enviar = true;
    }

    cambiarBorde(enviar, "nombre");

    return enviar;
}


function validaTelefono() {

    let telefono = document.forms["registro"]["telefono"].value;
    let elTele = "El teléfono ";
    let enviar = false;

    if (telefono == "") {
        document.getElementById("telefonoMal").innerHTML = elTele+"es obligatorio";
        
    } else if (telefono.length != 9) {
        document.getElementById("telefonoMal").innerHTML = elTele+"debe ser de 9 dígitos";
        
    } else {
        document.getElementById("telefonoMal").innerHTML ="";
        enviar = true;
    }

    cambiarBorde(enviar, "telefono");

    return enviar;
}

function validaEmail() {
    let email = document.forms["registro"]["email"].value;
    const patron = /^([a-zA-Z0-9\-_][a-zA-Z0-9\-_\.]{0,252}[a-zA-Z0-9\-_]@[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?)$/gm;
                                    //^ para dominios de 2º nivel
    const caracPermitidos = /^([a-zA-Z0-9\-_\.@]+)$/gm;
    let enviar = false;

    if (email == "") {
        document.getElementById("emailMal").innerHTML = "El email es obligatorio";
    
    } else if (!caracPermitidos.test(String(email))){
        document.getElementById("emailMal").innerHTML = "Error. Solo se permiten letras, numeros, -, _, y puntos";
    
    } else if (!patron.test(String(email))){
        document.getElementById("emailMal").innerHTML = "Error. El correo no tiene el formato permitido.";
        
    } else {
        document.getElementById("emailMal").innerHTML = "";
        enviar = true;
    }

    cambiarBorde(enviar, "email");

    return enviar;
}

function validaPassword() {
    let password = document.forms["registro"]["password"].value;
    const caracteres = /[!@#\$%\^&\*]+/gm;
    const minusculas = /[a-z]+/gm;
    const mayusculas = /[A-Z]+/gm;
    const numeros = /[0-9]+/gm;

    //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/gm
    let enviar = false;

    //if (!caracPermitidos.test(String(password))){

    if (password == "") {
        document.getElementById("contraseñaMal").innerHTML = "La contraseña es obligatoria";
        
    } else if (password.length > 16 || password.length < 8) {
        document.getElementById("contraseñaMal").innerHTML = "La contraseña debe ser de entre 8 y 16 caracteres";

    } else if (!caracteres.test(String(password))){
        document.getElementById("contraseñaMal").innerHTML = "La contraseña debe tener al menos un caracter especial (!,@,#,$,%,^,&,*)";
    } else if (!minusculas.test(String(password))){
        document.getElementById("contraseñaMal").innerHTML = "La contraseña debe tener al menos una letra minúscula";
    } else if (!mayusculas.test(String(password))){
        document.getElementById("contraseñaMal").innerHTML = "La contraseña debe tener al menos una letra mayúscula";
    } else if (!numeros.test(String(password))){
        document.getElementById("contraseñaMal").innerHTML = "La contraseña debe tener al menos un número";
  
    } else {
        document.getElementById("contraseñaMal").innerHTML = "";
        enviar = true;
        
    }

    cambiarBorde(enviar, "password");
    cambiarBorde(enviar, "password2");

    return enviar;
}

function validaPassword2() {
    let password = document.forms["registro"]["password"].value;
    let password2 = document.forms["registro"]["password2"].value;
    let enviar = false;

    if (password2 == "") {
        document.getElementById("contraseña2Mal").innerHTML = "Debes escribir la contraseña 2 veces";
        
    
    } else if (!(password.valueOf() === password2.valueOf())) {
        //document.getElementById("contraseñaMal").innerHTML = "";
        document.getElementById("contraseña2Mal").innerHTML = "Las contraseñas no coinciden";
        
 
    } else {
        //document.getElementById("contraseñaMal").innerHTML = "";
        document.getElementById("contraseña2Mal").innerHTML = "";
        enviar = true;
    }

    cambiarBorde(enviar, "password");
    cambiarBorde(enviar, "password2");

    return enviar;
}

function validaSexo() {
    let enviar = false;
    
    if (
    document.getElementById("hombre").checked == true ||
    document.getElementById("mujer").checked == true ||
    document.getElementById("otro").checked == true
    ) {
        document.getElementById("sexoMal").innerHTML = "";
        enviar = true;
    } else {
        document.getElementById("sexoMal").innerHTML = "Debes marcar el sexo";
    }

    cambiarBorde(enviar, "izq");

    return enviar;
}




function cambiarBorde(enviar, elemento) {
    if (!enviar) {
        if (elemento != "izq" && elemento != "der") {
            document.getElementById(elemento).style.border="2px solid #cb2e35";
            //document.getElementById(elemento).style["boxShadow"]="inset 0px 0px 9px red";
            document.getElementById(elemento).style["boxShadow"]="0px 0px 9px #cb2e35";
        } else {
            document.getElementById(elemento).style.border="2px solid #cb2e35";
            document.getElementById(elemento).style.width="49%";
            document.getElementById(elemento).style["boxShadow"]="0px 0px 9px #cb2e35";
        }
    } else {
        if (elemento != "izq" && elemento != "der") {
            document.getElementById(elemento).style.border="1px solid black";
            document.getElementById(elemento).style["boxShadow"]="inset 0px 0px 0px red";
        } else {
            document.getElementById(elemento).style.border="none";
            document.getElementById(elemento).style["boxShadow"]="none";
        }
    }
}

//si esta funcion devuelve false, la informacion no será enviada al pulsar el boton enviar
function validarTodo() {
    let enviar=false;

    /* if (validaNombre() && validaFecha() && validaTelefono() && validaEmail() && validaPassword() && validaPassword2() && validaSexo() && validaActividades()) { */
    if (validaNombre() && validaTelefono() && validaEmail() && validaPassword() && validaPassword2() && validaSexo()) {
        enviar = true;
    }
    return enviar;
}

function validarAntes() {

    validaNombre();
    //validaFecha();
    validaTelefono();
    validaEmail();
    validaPassword();
    validaPassword2();
    validaSexo();
    //validaActividades();
    
    if (validarTodo()) {
        alert("Todo parece correcto");
    }
}

function limpiarErrores() {

    /* let ids = ["nombreMal", "fechaMal", "telefonoMal","emailMal","contraseñaMal","contraseña2Mal", "sexoMal", "actividadesMal"]; */
    let ids = ["nombreMal", "telefonoMal","emailMal","contraseñaMal","contraseña2Mal", "sexoMal"];

    for (let index = 0; index < ids.length; index++) {
        document.getElementById(ids[index]).innerHTML = "";
    }

    /* ids = ["nombre", "fecha_nac", "telefono","email","password","password2", "izq", "der"]; */
    ids = ["nombre", "fecha_nac", "telefono","email","password","password2", "izq"];

    for (let index = 0; index < ids.length; index++) {
        cambiarBorde(true, ids[index]);
    }

}


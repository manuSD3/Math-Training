document.getElementById("texto1").style.display = 'none';
document.getElementById("introducido").style.display = 'none';
document.getElementById("mensaje-final").style.display = 'none';

let numOperaciones = 20;
var operaciones = new Array(22);
let introducido;
let aciertos = 0;
let fallos = 0;

let records = [3];
let tiempoTotal;

var i = 1;

var _self = this;



function jugar() {
    
    document.getElementById("texto1").style.display = '';
    document.getElementById("introducido").style.display = '';
    document.getElementById("introducido").focus();
    document.getElementById("boton-jugar").style.display = 'none';
    
    operaciones[0] = [' ',' ',' ',' ',' '];
    //generar operaciones
     for (let j = 1; j <= numOperaciones; j++) {
        
        operaciones[j] = generarUnaOperacion();
        
    }

    operaciones[21] = [' ',' ',' ',' ',' '];

/////    
    crearListaHTML(operaciones);
    //document.getElementById("carousel").style.visibility = "visible";
/////

        
    
    document.getElementById("correctoOno").innerHTML = "  ";
    let campoTexto = document.getElementById("introducido").value = null;
    
    


    //tomar hora inicial
    var fechaHoraInicial = new Date();

    

    // Get the input field
    campoTexto = document.getElementById("introducido");

    // Execute a function when the user releases a key on the keyboard
    //campoTexto.addEventListener("keyup", function (event) {
        
    //event.stopPropagation();

    
    $("#introducido").keypress(function(event) {
        if (event.keyCode === 13) {
            
                //recoger numero introducido
                _self.introducido = document.getElementById("introducido").value;

                //document.write( introducido );
                _self.operaciones[i][4] = _self.introducido;

                //si no se han introducido las cifras suficientes, no hacer nada
                //if(_self.introducido.toString().length === operaciones[i][3].toString().length) {

                    //comprobar si la respuesta es correcta:
                    if (_self.introducido == operaciones[i][3]) {
                        
                            //mostar tick
                            document.getElementById("correctoOno").innerHTML = "<img src='./img/accept.png'  class='feedback'/>";
                            aciertos++;
                        
                    //si la respuesta no es correcta:
                    } else {

                        //if (_self.introducido != null) {

                            //para que el contador de fallos solo aumente cuando se ha pulsado una tecla numérica
                            //const isNumber = /^[0-9]$/i.test(event.key)
                            //if (isNumber) {
                                
                                //mostrar equis
                                document.getElementById("correctoOno").innerHTML = "<img src='./img/delete-button.png'  class='feedback'/>";
                                //document.write( "❌" );
                                fallos++;
                                
                                //esperar unos segundos y limpiar el input
                                //document.getElementById("correctoOno").innerHTML = "  ";
                                            
                            //}
                        //}
                    }
                //}

            if(_self.i < numOperaciones) {
                
                siguienteOperacion();

            } else {
                //si el contador ha llegado a 20, el juego termina

                var fechaHoraFinal = new Date();
                //La diferencia se da en milisegundos así que se divide entre 1000
                var resultSegundos = Number(((fechaHoraFinal-fechaHoraInicial)/1000));
                resultSegundos = Number(resultSegundos.toFixed(2));
                let resultFinalSegundos = resultSegundos+(fallos*20);

                document.getElementById("operacion").style.display = 'none';
                document.getElementById("texto1").style.display = 'none';
                document.getElementById("introducido").style.display = 'none';
                document.getElementById("correctoOno").style.display = 'none';
                document.getElementById("mensaje-final").style.display = '';
                
                document.getElementById("mensaje-final").innerHTML= (
                "La partida ha terminado. <br><br> Numero de fallos: "
                +fallos
                +"<br> Numero de aciertos: "
                +aciertos
                +"<br><br>Tiempo empleado: <br>"
                +resultSegundos
                +" segundo(s) <br>"
                +"<br>Resultado final<br>(penalización de 20 segundos por cada fallo): <br><br>"
                +resultFinalSegundos
                +"<br><br><br>"
                +"<form action='insertarPuntuacion.php' method='post'>"
                    +"<input type='hidden' id='puntuacion' name='puntuacion' value="+resultFinalSegundos+">"
                    +"<input type='submit' class='boton' style='font-size:1em' value='Guardar y volver'>"
                +"</form>"
                

                
                );
                

            }
    
        }
    });

//});





}

///////////////////////FUNCIONES NO PRINCIPALES//////////////////////

function crearListaHTML(operaciones) {

    let listaDivs=
    "<div class='slider'>"
    +"<div class='view'>"
    +"<div class='container' style='margin-left:0px;'>";

    for (z = 0; z <= numOperaciones; z++) {
        
        // Add the item text
        listaDivs = listaDivs +"<div class='box'>"+ operaciones[z][0]+" "+operaciones[z][1]+" "+operaciones[z][2]+"</div>";
        
    }

    listaDivs=listaDivs+"</div></div></div>";

    //document.getElementById('carousel').innerHTML = listaDivs;
    document.getElementById('operacion').innerHTML = listaDivs;
}


function avanzar(direction) {
    var shifted = document.querySelector(".container").style.marginLeft;
    shifted = shifted.slice(0, -2);
    shifted = Number(shifted);
    if ( (direction > 0 && shifted > -4800)  ) {
        document.querySelector(".container").style.marginLeft = (shifted - 102.39 * direction) + "px";
    }
  }




//pasar a la siguiente operación
function siguienteOperacion() {

   //document.getElementById("correctoOno").innerHTML = "  ";
    let campoTexto = document.getElementById("introducido").value = null;

    _self.i++;
    

    //"pulsar el botón"
    avanzar(+1);
   

}

function numAleat(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

function generarUnaOperacion() {

    let operador = numAleat(1, 4);
    let a;
    let caractOperador;
    let b;
    let result;
    let operacion = new Array(5);

    switch (operador) {
        //suma
        case 1:
            a=numAleat(0,9);
            b=numAleat(0,9);
            result = a+b;
            caractOperador = '+';
            break;
        //resta
        case 2:
            a=numAleat(1,9);
            b=numAleat(0,a);
            result = a-b;
            caractOperador = '-';
            break;
        //multiplicacion
        case 3:
            a=numAleat(0,9);
            b=numAleat(0,9);
            result = a*b;
            caractOperador = 'x';
            break;
        //division
        case 4:
            a=numAleat(0,9);
            do {
                b=numAleat(1,a);
            } while ((a % b) != 0);
            result = a/b;
            caractOperador = '/';
            break;
    }
    operacion[0] = a;
    operacion[1] = caractOperador;
    operacion[2] = b;
    operacion[3] = result;
    //este es el hueco para numero introducido por el usuario posteriormente
    operacion[4] = 0;

    return operacion;
}





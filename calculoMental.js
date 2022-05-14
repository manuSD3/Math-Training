document.getElementById("introducido").style.display = 'none';

//let operaciones = [22][5];
var operaciones = new Array(22);
let introducido;
let aciertos = 0;
let fallos = 0;
//fecha horaInicial
//fecha horaFinal
let records = [3];
let tiempoTotal;
//let operacion

var i = 1;

var _self = this;

var tiempoDeEspera;

function delay(callback, ms) {
    var timer = 0;
    return function() {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  }
  
/* $('#introducido').keyup(delay(function (e) {
    console.log('Time elapsed!', this.value);
}, 500)); */


function jugar() {
    
    document.getElementById("introducido").style.display = '';
    document.getElementById("boton-jugar").style.display = 'none';
    
    operaciones[0] = [' ',' ',' ',' ',' '];
    //generar 20 operaciones
    /* for (let i = 1; i < 5; i++) {
        
        operaciones[i] = generarUnaOperacion();
        
    } */
    operaciones[21] = [' ',' ',' ',' ',' '];
    
    //horaInicial = hora actual
    
    /////    
    
    document.getElementById("correctoOno").innerHTML = "  ";
    let campoTexto = document.getElementById("introducido").value = null;
    
    //generar operacion y almacenarla en array
    operaciones[1] = generarUnaOperacion();
    
    //mostar operacion
    document.getElementById("operacion").innerHTML = operaciones[1][0]+" "+operaciones[1][1]+" "+operaciones[1][2];
    
    /////
    
    /*
    //for (let i = 1; i < operaciones.length; i++) {
        for (let i = 1; i <= 10; i++) {
            
            console.log(i);
            
            
            //aumentar indice de las operaciones que se muestran
            
            
        }
        */

    // Example usage:

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
                if(_self.introducido.toString().length == operaciones[i][3].toString().length) {

                    //comprobar si la respuesta es correcta:
                    if (_self.introducido == operaciones[i][3]) {
                        
                            //mostar tick
                            document.getElementById("correctoOno").innerHTML = "<img src='./img/accept.png'  class='feedback'/>";
                            aciertos++;
                        
                    //si la respuesta no es correcta:
                    } else {

                        if (_self.introducido != null) {

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
                        }
                    }
                }

            if(_self.i < 10) {
                
                siguienteOperacion();

            } else {
                //si el contador ha llegado a 10, el juego termina
                document.write("el juego ha terminado <br> Numero de fallos: "+fallos+"<br> Numero de aciertos: "+aciertos);
            }
    
        }
    });

//});

///////////////////////////   temporizador y mostrar resultados /////////////
//horaFinal = hora actual
/* 
    //mostrar resultados
horaFinal - horaInicial;
//mostrar tiempo
//mostrar fallos
//tiempoTotal = tiempo + (fallos * 20sec)
for (let i = 0; i < records.length; i++) {
    if (tiempoTotal > records[i]) {
        records[i] = tiempoTotal;
        break;
    }
}
//mostrar mensaje: "Records:"
for (let i = 0; i < records.length; i++) {
    
    
} */

}

///////////////////////FUNCIONES NO PRINCIPALES//////////////////////

//pasar a la siguiente operación
function siguienteOperacion() {
    //document.getElementById("correctoOno").innerHTML = "  ";
    let campoTexto = document.getElementById("introducido").value = null;

    document.getElementById("aciertos").innerHTML = "aciertos: "+aciertos;
    document.getElementById("fallos").innerHTML = "fallos: "+fallos;

    _self.i++;

    operaciones[i] = generarUnaOperacion();
    //mostar operacion
    document.getElementById("operacion").innerHTML = operaciones[i][0]+" "+operaciones[i][1]+" "+operaciones[i][2];
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
            caractOperador = '*';
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
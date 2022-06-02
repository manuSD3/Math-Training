document.getElementById("texto1").style.display = 'none';
document.getElementById("introducido").style.display = 'none';
document.getElementById("mensaje-final").style.display = 'none';

/* document.getElementById("operacion").style.display = '';
document.getElementById("texto1").style.display = '';
document.getElementById("introducido").style.display = 'none';
document.getElementById("correctoOno").style.display = 'none';
document.getElementById("mensaje-final").style.display = ''; */


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
/*
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
*/
/* $('#introducido').keyup(delay(function (e) {
    console.log('Time elapsed!', this.value);
}, 500)); */


function jugar() {
    
    

    

    document.getElementById("texto1").style.display = '';
    document.getElementById("introducido").style.display = '';
    document.getElementById("boton-jugar").style.display = 'none';
    
    operaciones[0] = ['A','A','A','A','A'];
    //generar 20 operaciones
     for (let j = 1; j <= 10; j++) {
        
        operaciones[j] = generarUnaOperacion();
        
    }

    operaciones[21] = [' ',' ',' ',' ',' '];

/////    
    //crearListaHTML();
/////


////////////////////////////////////////script carousel

var Carousel = {
    width: 100,     // Images are forced into a width of this many pixels.
    numVisible: 2,  // The number of images visible at once.
    duration: 600,  // Animation duration in milliseconds.
    padding: 2      // Vertical padding around each image, in pixels.
};

function rotateForward() {
    var carousel = Carousel.carousel,
        children = carousel.children,
        firstChild = children[0],
        lastChild = children[children.length - 1];
    carousel.insertBefore(lastChild, firstChild);
}
function rotateBackward() {
    var carousel = Carousel.carousel,
        children = carousel.children,
        firstChild = children[0],
        lastChild = children[children.length - 1];
    carousel.insertBefore(firstChild, lastChild.nextSibling);
}

function animate(begin, end, finalTask) {
    var wrapper = Carousel.wrapper,
        carousel = Carousel.carousel,
        change = end - begin,
        duration = Carousel.duration,
        startTime = Date.now();
    carousel.style.top = begin + 'px';
    var animateInterval = window.setInterval(function () {
    var t = Date.now() - startTime;
    if (t >= duration) {
        window.clearInterval(animateInterval);
        finalTask();
        return;
    }
    t /= (duration / 2);
    var top = begin + (t < 1 ? change / 2 * Math.pow(t, 3) :
                                change / 2 * (Math.pow(t - 2, 3) + 2));
    carousel.style.top = top + 'px';
    }, 1000 / 60);
}

window.onload = function () {
    document.getElementById('spinner').style.display = 'none';
    //declarar variables
    var carousel = Carousel.carousel = document.getElementById('carousel'),
        operaciones = carousel.getElementsByClassName('operacion'),
        numOperaciones = operaciones.length,
        imageWidth = Carousel.width,
        aspectRatio = operaciones[0].width / operaciones[0].height,
        imageHeight = imageWidth / aspectRatio,
        padding = Carousel.padding,
        rowHeight = Carousel.rowHeight = imageHeight + 2 * padding;
    carousel.style.width = imageWidth + 'px';
    for (var i = 0; i < numOperaciones; ++i) {
    var image = operaciones[i],
        frame = document.createElement('div');
    frame.className = 'pictureFrame';
    var aspectRatio = image.offsetWidth / image.offsetHeight;
    image.style.width = frame.style.width = imageWidth + 'px';
    image.style.height = imageHeight + 'px';
    image.style.paddingTop = padding + 'px';
    image.style.paddingBottom = padding + 'px';
    frame.style.height = rowHeight + 'px';
    carousel.insertBefore(frame, image);
    frame.appendChild(image);
    }
    Carousel.rowHeight = carousel.getElementsByTagName('div')[0].offsetHeight;
    carousel.style.height = Carousel.numVisible * Carousel.rowHeight + 'px';
    carousel.style.visibility = 'visible';
    var wrapper = Carousel.wrapper = document.createElement('div');
    wrapper.id = 'carouselWrapper';
    wrapper.style.width = carousel.offsetWidth + 'px';
    wrapper.style.height = carousel.offsetHeight + 'px';
    carousel.parentNode.insertBefore(wrapper, carousel);
    wrapper.appendChild(carousel);
    var prevButton = document.getElementById('prev'),
        nextButton = document.getElementById('next');
    prevButton.onclick = function () {
    prevButton.disabled = nextButton.disabled = true;
    rotateForward();
    animate(-Carousel.rowHeight, 0, function () {
        carousel.style.top = '0';
        prevButton.disabled = nextButton.disabled = false;
    });
    };
    nextButton.onclick = function () {
    prevButton.disabled = nextButton.disabled = true;
    animate(0, -Carousel.rowHeight, function () {
        rotateBackward();
        carousel.style.top = '0';
        prevButton.disabled = nextButton.disabled = false;
    });
    };
};


////////////////////////////////////////FIN script carousel




    //horaInicial = hora actual
    
    /////    
    
    document.getElementById("correctoOno").innerHTML = "  ";
    let campoTexto = document.getElementById("introducido").value = null;
    
    //generar operacion y almacenarla en array
    //operaciones[1] = generarUnaOperacion();
    
    //mostar operacion
    document.getElementById("operacion").innerHTML = operaciones[1][0]+" "+operaciones[1][1]+" "+operaciones[1][2];
    
    /////

 /*    //tomar hora inicial
    var fechaHora = new Date();
    var minutosI = fechaHora.getMinutes();
    var segundosI = fechaHora.getSeconds(); */

    //tomar hora inicial
    var fechaHoraInicial = new Date();



    
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

            if(_self.i < 10) {
                
                siguienteOperacion();

            } else {
                //si el contador ha llegado a 10, el juego termina

                //tomar hora final
                /* var fechaHora2 = new Date();
                var minutosF = fechaHora2.getMinutes();
                var segundosF = fechaHora2.getSeconds();

                let resultMinutos = minutosF - minutosI;
                let resultSegundos = segundosF - segundosI;
                 */

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
                "La partida ha terminado <br> Numero de fallos: "
                +fallos
                +"<br> Numero de aciertos: "
                +aciertos
                +"<br><br>Tiempo empleado: "
                +resultSegundos
                +" segundo(s) <br>"
                +"<br>Resultado final (penalización de 20 segundos por cada fallo): <br>"
                +resultFinalSegundos
                
                +"<form action='insertarPuntuacion.php' method='post'>"
                    +"<input type='hidden' id='puntuacion' name='puntuacion' value="+resultFinalSegundos+">"
                    +"<input type='submit' value='Guardar puntuación y volver'>"
                +"</form>"

                
                );
                

            }
    
        }
    });

//});



//////////////// temporizador y mostrar resultados /////////////
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

function crearListaHTML() {
    let listData = [
        'Blue',
        'Red',
        'White',
        'Green',
        'Black',
        'Orange'
    ],
    
    // Make a container element for the list
    listContainer = document.getElementById('carousel'),

    // Make the list
    listElement = document.createElement('div'),

    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = operaciones.length,
    listItem,
    i;

    // Add it to the page
    //document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // Create an item for each one
        listItem = document.createElement('div');

        // Add the item text
        listItem.innerHTML = operaciones[i][0]+" "+operaciones[i][1]+" "+operaciones[i][2];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}


//pasar a la siguiente operación
function siguienteOperacion() {
    //document.getElementById("correctoOno").innerHTML = "  ";
    let campoTexto = document.getElementById("introducido").value = null;

    _self.i++;

    //operaciones[i] = generarUnaOperacion();

    //mostar operacion
    document.getElementById("operacion").innerHTML = operaciones[i][0]+" "+operaciones[i][1]+" "+operaciones[i][2];

    //"pulsar el botón"

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





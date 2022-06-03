<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="./estilos/estilo.css">




<!-- <script type="text/javascript" src="./scriptCarousel.js"></script> -->

<style>
  
</style>
</head>
<body>
    <!-- Top Navigation Menu -->
    <div class="topnav">
      <a href="#home" class="active">logotipo</a>
      <!-- <a href="#home" class="active"><img class="icono" src="./img/logotipo.png"></a> -->
      <div id="myLinks">
        <a href="#news" class="icono2"><img class="icono" src="./img/estadisticas.svg"></a>
       <a href="#contact"><img class="icono" src="./img/ajustes.svg"></a>
        <a href="#about"><img class="icono" src="./img/usuario.svg"></a>
        <a href="cerrarSesion.php"><img class="icono" src="./img/cruzar.svg"></a>
      </div>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>

<!-- Simulate a smartphone / tablet look -->
<div class="mobile-container">


<div class="contenedor-juego">

<!-- /////////////////////////////////////////// -->

  

    <div id="operacion">

        <!-- <div class="slider">
        <div class="view">
          <div class="container" style="margin-left:0px;">
            <p class="box">Aenean risus est, porttitor vel placerat.</p>
            <p class="box">>Morbi pellentesque, mauris interdum porta tincidunt.</p>
            <p class="box">Donec viverra tortor sed nulla. Phasellus nec magna.</p>
            <p class="box">Nunc gravida nonummy felis.</p>
            <p class="box">Vestibulum fringilla, lectus id viverra malesuada.</p>
          </div>
        </div>
      </div> -->

    </div>
      
     


    <div id="carousel">
  <!-- ///////////////////////////////////////////
      <div class="operacion">⬇️</div>
      <div class="operacion">21</div>
      <div class="operacion">3</div>
      <div class="operacion">5</div>
      <div class="operacion">6</div>
      <div class="operacion">7</div>
      <div class="operacion">8</div>
      <div class="operacion">11</div>
    ///////////////////////////////////////////-->
    </div>
<!--
    <div class="buttons">
      <button id="prev">&uarr; Prev</button>
      <button id="next">&darr; Next</button>
    </div>
-->
 
    <label id="texto1" for="introducido" style="display:none">
        <input id="introducido" type="number" placeholder="escribe aquí la respuesta" style="display:none" autofocus/>
    </label>

    <!-- <input type="number" id="introducido" id="introducido" /> -->
    <!-- <input type="button" id="boton-enviar" value="Enviar" /> -->
    
    <div id="correctoOno"></div>
    <div id="aciertos"></div>
    <div id="fallos"></div>

    <div id="mensaje-final" style="display:none"></div>

    </br>
    </br>

    <input type="button" id="boton-jugar" class="boton" value="Jugar" onclick="setTimeout(function(){return jugar();}, 100);" />
    
    <br>
    <br>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="./calculoMental.js"></script>
    

<!-- /////////////////////////////////////////// -->


</div>

<!-- End smartphone / tablet look -->
</div>

<script>
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
</script>

</body>
</html>

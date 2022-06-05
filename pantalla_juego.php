<?php
$conexion = new mysqli('localhost', 'root', '','mathtraining');

if ($conexion -> connect_errno){
  echo "Error al conectarse a la bd";
   header('Location: index.php');
   
}else {
    
    session_start();
    $usuario =  $_SESSION['usuario'];
   
    if (empty($usuario)){
      echo "no hay sesion abierta";
        header('Location: index.php');

    }else {
            try {
                $stmt = $conexion->prepare("SELECT * FROM usuarios WHERE email = ?");
                $stmt->bind_param('s',$usuario);
                $stmt->execute();
                $result = $stmt->get_result();
                $user = $result->fetch_assoc();

              //<?php  echo $user['nombre'];

              //echo "sesion abierta de ".$user['nombre'];

            }catch (PDOException $e){
            echo "Error: ".$e->getMessage();
        }
    }
}

?>

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
      <a href="pantalla_juego.php" class="active">Math Training</a>
      <!-- <a href="#home" class="active"><img class="icono" src="./img/Math Training.png"></a> -->
      <div id="myLinks">
        <a href="estadisticas.php" class="icono2"><img class="icono" src="./img/estadisticas.svg"></a>
       <!-- <a href="#contact"><img class="icono" src="./img/ajustes.svg"></a>
        <a href="#about"><img class="icono" src="./img/usuario.svg"></a> -->
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

    </div>
      

    <div class="group2">
    <!-- <svg class="icon2" aria-hidden="true" viewBox="0 0 24 24">
        <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
    </svg> -->
    <!-- <input placeholder="escribe aquí la respuesta" type="number" class="input2"> -->
    </div>
  
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

<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div id="menu">
        <ul>
            <li>Home</li>
            <li class="cerrar-sesion">
                <a href="includes/logout.php">Cerrar sesión</a>
            </li>
        </ul>
    </div>

    <section>
        <h1>Bienvenido <?php //echo $user->getNombre(); ?> </h1>
    </section>
    
</body>
</html>
-->

<!--

    Página principal a la que se redirige cuando se inicia sesión satisfactoriamente

-->

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="estilo.css">
<style>
  
</style>
</head>
<body>
    <!-- Top Navigation Menu -->
    <div class="topnav">
      <a href="#home" class="active">Logo</a>
      <div id="myLinks">
        <a href="#news"><img class="icono" src="img/estadisticas.svg"></a>
        <a href="#contact"><img class="icono" src="img/ajustes.svg"></a>
        <a href="#about"><img class="icono" src="img/usuario.svg"></a>
        <a href="includes/logout.php"><img class="icono" src="img/cruzar.svg"></a>
      </div>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>

<!-- Simulate a smartphone / tablet look -->
<div class="mobile-container">


<div class="contenedor-juego">
  
    <div id="operacion"></div>
        
    <label id="texto1" for="introducido">
        <input id="introducido" type="number" placeholder="escribe aquí la respuesta"/>
    </label>

    <!-- <input type="number" id="introducido" id="introducido" /> -->
    <!-- <input type="button" id="boton-enviar" value="Enviar" /> -->
    
    <div id="correctoOno"></div>
    <div id="aciertos"></div>
    <div id="fallos"></div>

    <div id="mensaje-final"></div>

    </br>
    </br>

    <input type="button" id="boton-jugar" value="Jugar" onclick="return jugar()" />
    
    <br>
    <br>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="calculoMental.js"></script>

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
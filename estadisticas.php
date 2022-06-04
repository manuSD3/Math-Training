<?php
//Recoger los datos del formulario
//$puntuacion = $_POST['puntuacion'];

$conexion = new mysqli('localhost', 'root', '','mathtraining');

if ($conexion -> connect_errno){

header('Location: index.html');
}else {

session_start();
$usuario =  $_SESSION['usuario'];

if (empty($usuario)){
    header('Location: index.html');

}else {
        try {
            $stmt = $conexion->prepare("SELECT email FROM usuarios WHERE email = ?");
            $stmt->bind_param('s',$usuario);
            $stmt->execute();
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();

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

<style>
  
</style>
</head>
<body>
    <!-- Top Navigation Menu -->
    <div class="topnav">
      <a href="pantalla_juego.php" class="active">logotipo</a>
      <!-- <a href="#home" class="active"><img class="icono" src="./img/logotipo.png"></a> -->
      <div id="myLinks">
        <a href="pantalla_juego.php" class="icono2"><img class="icono" src="./img/casa.svg"></a>
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

<form action="mostrarGrafica.php" method="post">
    <label for="bdaymonth">Selecciona el mes y año:</label>
    <br><br>
    <input type="month" id="mesGrafica" name="mesGrafica">
    <br><br>
    <input type="submit" value="Ver gráfica">
</form>

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
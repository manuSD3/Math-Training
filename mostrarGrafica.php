<?php

$conexion = new mysqli('localhost', 'root', '','mathtraining');

$conexion -> set_charset('utf8');


//tomar el email de la sesion actual
$email = "";


//procesar la fecha obtenida por parametros para separar mes del año en 2 variables
$fecha = $_POST['mesGrafica'];

$fechaSeparada = explode("-", $fecha);
$anno = $fechaSeparada[0]; 
$mes = $fechaSeparada[1]; 

if ($conexion -> connect_errno){
  echo "Error al conectarse a la bd";
   header('Location: index.html');
   
}else {
    
    session_start();
    $email =  $_SESSION['usuario'];
   
    if (empty($email)){
      echo "no hay sesion abierta";
        header('Location: index.html');

    }else {
            try {
              $stmt = $conexion->prepare("SELECT DATE(fecha) as fecha1, tiempoEmpleado FROM puntuaciones WHERE emailUsuario = ? AND MONTH(fecha) = ? AND YEAR(fecha) = ?  GROUP BY fecha1 ORDER BY fecha ASC");

              //$stmt = $conexion->prepare("SELECT email, contraseña FROM usuarios WHERE email = ? AND contraseña = ?");
              $stmt->bind_param('sss',$email,$mes,$anno);
              $stmt->execute();
              ////////
              $result = $stmt->get_result();

              /* foreach ($result as $a) {
                  $dias[] = $a['fecha'];
                  $tiempos[] = $a['tiempoEmpleado'];
              } */

              while ($fila = $result->fetch_assoc()) {

                  //2022-06-02 01:56:54
                  //2022-06-02 
                  $separacion1 = explode("-", $fila['fecha1']);
                  //$separacion2 = explode("-", $separacion1[0]);

                  $dias[] = $separacion1[2];
                  $tiempos[] = $fila['tiempoEmpleado'];

              }

              //$fila = $result->fetch_assoc();
              ////////

              if (empty($dias)){
                  echo "Esa fecha no tiene datos";

              }else {
                  
                  //muestra la tabla
                  //echo "ha funcionado";
                  /* echo $anno; 
                  echo $mes;
                  echo $fila['tiempoEmpleado'];
                  echo $fila['tiempoEmpleado'];
                  echo $fila['fecha']; */

              }
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


<script src="chart.js"></script>


<!-- <script type="text/javascript" src="./scriptCarousel.js"></script> -->

<style>
  .contenedor-juego {
    
    width: 90% !important; 
    
}
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
    <input type="submit" class="boton" value="Ver gráfica">
</form>


    <!-- GRAFICA -->

<div STYLE="width:100%">
  <canvas id="myChart"></canvas>
</div>


<script>
    //eje horizontal
  const labels = <?php echo json_encode($dias) ?>;

  const data = {
    labels: labels,
    datasets: [{
      label: 'Menos es mejor',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      //eje vertical
      data: <?php echo json_encode($tiempos) ?>,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };
</script>

<script>
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
</script>

    <!-- GRAFICA -->


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
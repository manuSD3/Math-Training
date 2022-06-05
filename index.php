<?php
$conexion = new mysqli('localhost', 'root', '','mathtraining');

if ($conexion -> connect_errno){
  echo "Error al conectarse a la bd";
   header('Location: index.php');
   
}else {
    session_start();
    if (!empty($_SESSION['usuario'])){
      header('Location: pantalla_juego.php');
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
<script type="text/javascript" src="validacion_login.js"></script>
<style>
  
</style>
</head>
<body>
 
    <div class="topnav">
      <a class="active">Math Training</a>
    </div>


<div class="mobile-container">


<div class="contenedor-juego">



<!--=============FORMULARIO===========================-->
    <form id="formulario" name="login" action="login.php" method="post" onsubmit="return validarTodo();">
        <h1>LOGIN:</h1>
       
        <div class="fila">
            <div class="izquierda">
                <label for="email">Email:</label>
            </div>
            <div class="derecha">
                <input type="email" id="email" name="email" placeholder="Introduce tu email..." onblur="validaEmail()" required />
                <p id="emailMal" class="error"></p>
            </div>
        </div>
        
        <div class="fila">
            <div class="izquierda">
                <label for="password">Contraseña:</label>
            </div>
            <div class="derecha">
                <input type="password" id="password" name="pass" placeholder="Introduce tu contraseña..." onblur="validaPassword(); validaPassword2()" required />
                <p id="contraseñaMal" class="error"></p>
            </div>
        </div>       
        
        <input class="boton" type="submit" value="Enviar" />       
      </form> 

      

<!--=============FIN FORMULARIO===========================-->

     
</form> 



<a href="formulario_registro.html">¿No tienes cuenta? Regístrate aquí</a>




</div>




</body>
</html>
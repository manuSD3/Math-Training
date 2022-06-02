<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../estilos/estilo.css">
<!-- <script type="text/javascript" src="validacion_registro.js"></script> -->
<style>
  
</style>
</head>
<body>

<!-- Top Navigation Menu -->
<div class="topnav">
      <a href="#home" class="active">Logo</a>
      <div id="myLinks">
        <a href="#news" class="icono2"><img class="icono" src="../img/estadisticas.svg"></a>
       <a href="#contact"><img class="icono" src="../img/ajustes.svg"></a>
        <a href="#about"><img class="icono" src="../img/usuario.svg"></a>
      </div>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
</div>


<!-- Simulate a smartphone / tablet look -->
<div class="mobile-container">


<div class="contenedor-juego">
  
    <!-- //////////////FORMULARIO//////////////////////// -->
    <!-- <form action="" method="POST">
       <?php
            //esto es para mostrar el error del nombre usuario y/o password incorrecto de index.php
            if(isset($errorLogin)){
                echo $errorLogin;
            }

       ?>
        <h2>Iniciar sesión</h2>
        <p>Nombre de usuario: <br>
        <input type="text" name="nombre"></p>
        <p>Password: <br>
        <input type="password" name="contrasena"></p>
        <p class="center"><input type="submit" value="Iniciar Sesión"></p>
    </form> -->



<form id="formulario" name="registro" action="" method="post" onsubmit="return validarTodo();">
       <?php
            //esto es para mostrar el error del nombre usuario y/o password incorrecto de index.php
            if(isset($errorLogin)){
                echo $errorLogin;
            }

       ?>
        <h1>LOGIN:</h1>
       
       <div class="fila">
           <div class="izquierda">
               <label for="email">Email (Usuario):</label>
           </div>
           <div class="derecha">
               <input type="text" id="email" name="usuario" placeholder="Introduce tu email(Usuario)..." onblur="validaEmail()" required />
              <!--  <input type="email" id="email" name="usuario" placeholder="Introduce tu email(Usuario)..." onblur="validaEmail()" required /> -->
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
       
       <input type="submit" value="Iniciar Sesión">
       <!-- <input class="boton" type="submit" value="Enviar" /> -->
    </form>

<!-- ///////////////////////////////////////////// -->  


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
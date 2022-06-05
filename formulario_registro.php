<?php

    # Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    //$fechaNacimiento = $_POST['fecha_nac'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $sexo = $_POST['genero'];
    //$actividades = $_POST['actividades'];
    //$horario = $_POST['horario'];
    $pass2 = $_POST['pass2'];
      
    $pass = hash('sha512', $pass);
    $pass2 = hash('sha512', $pass2);
     
  if ($pass !== $pass2){
    header('Location: formulario_registro.html');
 
  }

  
    # Comprueba los datos, si falta alguno te dirige a la misma página
    if (empty($nombre) || empty($telefono)
    || empty($email) || empty($pass)|| empty($sexo) ){

        header('Location: formulario_registro.html');

        echo print_r($_POST);
    } else {
try {
    $conexion = new PDO('mysql:host=localhost;dbname=mathtraining', 'root',''); 

    $statement = $conexion->prepare('INSERT INTO usuarios (email, nombre, telefono, contraseña, sexo) VALUES (:email, :nombre, :telefono, :pass, :sexo)');
    $statement-> execute(array(':email' => $email, ':nombre' => $nombre, ':telefono' => $telefono,':pass'=>$pass, 'sexo'=> $sexo));
   
    // enviarCorreo($email, $pass);

    header('Location: index.php');
}catch (PDOException $e){
     echo "Error: ".$e->getMessage();
    # Error te manda de nuevo al formulario
    header('Location: formulario_registro.html');
}
    }


?>





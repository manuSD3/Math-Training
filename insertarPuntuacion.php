<?php
    //Recoger los datos del formulario
    $puntuacion = $_POST['puntuacion'];

    $conexion = new mysqli('localhost', 'root', '','mathtraining');

if ($conexion -> connect_errno){
  
   header('Location: index.php');
}else {
    
    session_start();
    $usuario =  $_SESSION['usuario'];
   
    if (empty($usuario)){
        header('Location: index.php');

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

     

try {
    $conexion = new PDO('mysql:host=localhost;dbname=mathtraining', 'root',''); 

    $statement = $conexion->prepare('INSERT INTO puntuaciones (tiempoEmpleado, emailUsuario) VALUES (:tiempoEmpleado, :emailUsuario)');
    $statement-> execute(array(':tiempoEmpleado' => $puntuacion, ':emailUsuario' => $user['email']));

    header('Location: pantalla_juego.php');
}catch (PDOException $e){
    echo "Error: ".$e->getMessage();
    # Error te manda de nuevo al formulario
    header('Location: index.php');
}
    //}

?>
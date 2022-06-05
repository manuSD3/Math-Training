<?php
$conexion = new mysqli('localhost', 'root', '','mathtraining');

$conexion -> set_charset('utf8');

// Determinar si la base de datos está conectada
if ($conexion -> connect_errno){
   header('Location: index.php');
   
}else {
    $usuario = $_POST['email'];
    $pass = $_POST['pass'];
    
    $pass = hash('sha512', $pass);

    if (empty($usuario) || empty($pass)){
        header('Location: index.php');
    }else {
            try {
                $stmt = $conexion->prepare("SELECT email, contraseña FROM usuarios WHERE email = ? AND contraseña = ?");
                $stmt->bind_param('ss',$usuario,$pass);
                $stmt->execute();
                ////////
                $result = $stmt->get_result();
                $fila = $result->fetch_assoc();
                ////////
          
                if ($fila['email']  !=  $usuario  || $fila['contraseña'] !=  $pass){
                    echo "No has ingresado los datos correctamente";
                    echo $fila['email']." | ".$usuario." | ".$fila['contraseña']." | ".$pass;

                }else {
                    session_start();
                    $_SESSION['usuario'] = $usuario; 
                    header('Location: pantalla_juego.php');
                }

            }catch (PDOException $e){
            echo "Error: ".$e->getMessage();
        }
    }
}
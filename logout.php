<?php
//clase que se encarga de cerrar la sesión

    //importar la clase user session
    include_once 'user_session.php';

    //instanciamos un nuevo objeto user sesion, que se inicializa en el ambiente de sesiones (si hay una sesión iniciada, tomará sus datos)
    $userSession = new UserSession();
    //por lo tanto se puede llamar al método para cerrar la sesión
    $userSession->closeSession();

    //reenviar al index
    header("location: ../index.php");

?>
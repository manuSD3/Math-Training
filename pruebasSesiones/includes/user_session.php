<?php

class UserSession{

    public function __construct(){
        //iniciar la sesión. Se inicializa el ambiente de sesiones
        session_start();
    }

    //ayuda a ponerle un valor a la sesión actual.
    public function setCurrentUser($user){
                //aqui se pone el nombre de la sesion
                            //aqui se guarda el username del usuario
        $_SESSION['sesion1'] = $user;
    }

    //devolver el valor de la sesion
    public function getCurrentUser(){
        return $_SESSION['sesion1'];
    }

    //cerrar la sesion
    public function closeSession(){
        session_unset();
        session_destroy();
    }
}


?>
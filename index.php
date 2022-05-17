<?php

//fichero al que dirige por defecto el navegador
//se encarga de redirigir a los otros ficheros, dependiendo de si la sesión está iniciada o no

//incluir librerias
include_once 'includes/user.php';
include_once 'includes/user_session.php';

//crear objeto de tipo UserSession. Para poder inicializar el ambiente de sesiones y dependiendo de eso, redirigir al usuario
$userSession = new UserSession();
//objeto user con el que manejaremos el usuario actual
$user = new User();

//validaciones
//si existe una sesion que se llame user,
if(isset($_SESSION['sesion1'])){
    //echo "Hay sesión";
    //esto es para cuando se vuelve a entrar sin haber cerrado la sesión. Obtiene el nombre de usuario de la sesión abierta, y rellena las variables, por lo tanto todo sigue funcionando
    $user->setUser($userSession->getCurrentUser());
    //envía a la pagina a la que queramos dirigir una vez se haya iniciado la sesión.
    include_once 'vistas/home.php';
//si no, comprobar que se le ha dado sesion al usuario
//los valores 'nombre' y 'contrasena' son los que se ponen en el formulario, en el atributo name
}else if(isset($_POST['nombre']) && isset($_POST['contrasena'])){
    //echo "Validación de login";
    
    //mapear la información
    $userForm = $_POST['nombre'];
    $passForm = $_POST['contrasena'];

    //validación. Si el usuario existe, si es verdadero:
    //(userExists entra en la base de datos y devuelve true o false, si existe o no)
    if($user->userExists($userForm, $passForm)){
        //echo "usuario validado";
        //manejar la sesión.
        //para indicar que esta sesión corresponde a ese usuario
        $userSession->setCurrentUser($userForm);
        //llenar los datos de nombre y username del objeto user
        $user->setUser($userForm);
        //web a la que redirige una vez se ha logueado correctamente.
        include_once 'vistas/home.php';
    }else{
        //echo "nombre de usuario y/o password incorrecto";
        //si son incorrectos
        $errorLogin = "Nombre de usuario y/o password es incorrecto";
        //lleva a la pantalla de login de nuevo
        include_once 'vistas/login.php';
    }
//si ninguna de esas dos condiciones se cumple se va a la pantalla de login.
}else{
    //echo "Login";
    include_once 'vistas/login.php';
}


?>
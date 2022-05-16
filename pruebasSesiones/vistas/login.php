<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sesiones</title>

    <link rel="stylesheet" href="main.css">
</head>
<body>
    <form action="" method="POST">
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
    </form>
</body>
</html>
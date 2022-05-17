<?php
//objeto usuario
//importar la clase db
include_once 'db.php';

class User extends DB{

    private $nombre;
    //private $username;

    //comprobar que el usuario existe
    public function userExists($nombre, $contrasena){
        //hacerle un hash a la contraseña
        //$md5pass = md5($contrasena);
        
        //consulta para extraer el nombre de usuario
        $query = $this->connect()->prepare('SELECT * FROM usuarios WHERE nombre = :nombre AND contrasena = :contrasena');

        //ejecutar la consulta
        $query->execute(['nombre' => $nombre, 'contrasena' => $contrasena]);

        //si devuelve alguna fila significa que existe, así que devuelve true.
        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    
    public function setUser($user){
        //buscar el usuario en la bd
        $query = $this->connect()->prepare('SELECT * FROM usuarios WHERE nombre = :user');
        $query->execute(['user' => $user]);

        foreach ($query as $currentUser) {
                                        //obtener la columna del nombre
            $this->nombre = $currentUser['nombre'];
                                            //obtener la columna del username
            //$this->username = $currentUser['username'];
        }
    }

    //obtener el nombre (devuelve el atributo $nombre de la clase)
    public function getNombre(){
        return $this->nombre;
    }
}

?>
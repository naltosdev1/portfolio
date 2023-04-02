<?php

$dbname = "project_api";
$host = "localhost";
$username = "Naltos";
$password = "Lr*_HdhB9tKp3p].";

$con = mysqli_connect($host, $username, $password, $dbname);

if(!$con) {
    echo 'Erreur connexion';
    exit;
}
?>
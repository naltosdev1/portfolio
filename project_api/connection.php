<?php

$dbname = "project_api";
$host = "localhost";
$username = "Naltos";

$con = mysqli_connect($host, $username, $password, $dbname);

if(!$con) {
    echo 'Erreur connexion';
    exit;
}
?>
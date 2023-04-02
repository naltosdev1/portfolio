<?php
require_once('connection.php');

$query = $con->prepare("SELECT * FROM apiproject");
$query->execute();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$response = [];

if($query->execute()) {
    $project = [];
    $result = $query->get_result();
    while($element = $result->fetch_array(MYSQLI_ASSOC)){
        $project[] = $element;
    }
    $response['error'] = false;
    $response['project'] = $project;
    $response['message'] = 'La commande a été exécutée avec succès !';
    $query->close();
} else {
    $response['error'] = true;
    $response['message'] = "Impossible d'exécuter cette requête !";
}

echo json_encode($response);

?>
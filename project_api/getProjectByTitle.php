<?php
require_once('connection.php');
header('Content-Type: application/json');

$response = array();

if(isset($_GET['project_name'])) {

    $project_name = $_GET['project_name'];

    $query = $con->prepare("SELECT id, project_name, project_description, langage, createdAt from project where project_name = ?");
    $query->bind_param("s", $project_name);

    if($query->execute()) {
        $query->bind_result($id, $project_name, $project_description, $langage, $createdAt);
        $query->fetch();

        $projects = array(
            'id' => $id,
            'project_name' => $project_name,
            'project_description' => $project_description,
            'langage' => $langage,
            'createdAt' => $createdAt,
        );

        $response['error'] = false;
        $response['projects'] = $projects;
        $response['message'] = "Le projet recherché existe dans la BDD";
    } else {
        $response['error'] = true;
        $response['message'] = "Le projet recherché n'existe pas dans la BDD";
    }
} else {
    $response['error'] = true;
    $response['message'] = "Aucun titre de projet n'a été renseigné";
}


echo json_encode($response);
print_r($response);

?>
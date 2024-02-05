<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "text_editor";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT text_content FROM saved_texts ORDER BY timestamp DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo $row["text_content"];
} else {
    echo "No text found";
}

$conn->close();
?>

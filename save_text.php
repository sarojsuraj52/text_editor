<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "text_editor";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get text content from POST request
$text_content = $_POST['text_content'];

// Insert text content into the database
$sql = "INSERT INTO saved_texts (text_content) VALUES ('$text_content')";
if ($conn->query($sql) === TRUE) {
    echo "Text saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

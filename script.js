// Function to execute a command on the document's editable content
function execCmd(command) {
    document.execCommand(command, false, null);
}

// Function to undo the last action performed in the editable content
function undo() {
    document.execCommand("undo", false, null);
}

// Function to redo the last undone action in the editable content
function redo() {
    document.execCommand("redo", false, null);
}

// Function to add a hyperlink to the selected text in the editable content
function addLink() {
    // Prompt the user to enter a URL
    var url = prompt("Enter the URL:");
    // Execute the command to create a link with the provided URL
    document.execCommand("createLink", false, url);
}

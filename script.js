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



// Function to select font color
function selectFontColor(color) {
    document.execCommand("foreColor", false, color);
}

// Function to select background color
function selectBgColor(color) {
    document.execCommand("backColor", false, color);
}


$(document).ready(function() {
    // Fetch saved text content on page load
    $.ajax({
        url: "fetch_text.php",
        success: function(response) {
            document.getElementById('editor').innerHTML = response;
        }
    });

    // Autosave function
    setInterval(function() {
        var textContent = document.getElementById('editor').innerHTML;
        $.ajax({
            type: "POST",
            url: "save_text.php",
            data: {text_content: textContent},
            success: function(response) {
                showToast("Text saved successfully", 2000);
            }
        });
    }, 20000); // Autosave every 20 seconds

    // Function to show toast message
    function showToast(message, duration) {
        var toast = document.getElementById("toast");
        toast.innerHTML = message;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, duration);
    }
});


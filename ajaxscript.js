document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let formData = new FormData(this);

    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text()) // Convert response to text
    .then(data => {
        if (data.includes("success")) {
            document.getElementById("success-message").style.display = "block";
            document.getElementById("error-message").style.display = "none";
        } else {
            document.getElementById("error-message").style.display = "block";
            document.getElementById("success-message").style.display = "none";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("error-message").style.display = "block";
    });

    // Optionally clear form fields after submission
    this.reset();
});
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple login validation
    if (username === "praveen" && password === "1234") {
        document.getElementById("login-container").classList.add("d-none");
        document.getElementById("logged-in").classList.remove("d-none");
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }

    return false; // Prevent form submission
}

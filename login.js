document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
    loginButton.addEventListener("click", function(event) {

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const username = usernameInput.value;
        const password = passwordInput.value;


        const login = {
            username: username,
            password: password,
        };


        if (login.username === "admin" && login.password === "123") {
            displayMessage("Welcome");
        } else {
            displayMessage("Not registered");
        }

        usernameInput.value = "";
        passwordInput.value = "";
    });

    function displayMessage(message) {
        const loginMessage = document.getElementById("login-message");
        loginMessage.textContent = message;
    }
});
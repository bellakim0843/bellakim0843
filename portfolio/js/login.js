const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login-input");
const loginUser = document.querySelector("#user");
const loginButton = document.querySelector("#loginbutton");

const greeting = document.querySelector("#greeting");

const USER_NAME = "inputValue";

function userLogin(event) {
    event.preventDefault();
    const inputValue = loginInput.value;
    localStorage.setItem("USER_NAME", inputValue);
    greeting.innerText = "Hi! " + inputValue;
    loginInput.classList.add("hidden");
    location.reload()
}
const savedUsername = localStorage.getItem("USER_NAME");

if (savedUsername === null) {
    loginInput.classList.remove("hidden");
    loginForm.addEventListener("submit", userLogin);
} else {
    greeting.innerText = "Hi! " + savedUsername;
    loginInput.classList.add("hidden");
}

function logOut(onClick) {
    if (savedUsername !== null) {
        localStorage.removeItem("USER_NAME");
        greeting.innerText = "Hi! ";
        loginInput.classList.remove("hidden");
        alert("Log-out is completed.");
        location.reload()
    } else {
        loginForm.addEventListener("submit", userLogin);
    }
}

loginForm.addEventListener("submit", userLogin);
loginButton.addEventListener("click", logOut);





// Get modal elements
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Get buttons that open the modals
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");

// Get <span> elements that close the modals
var closeLogin = document.getElementById("closeLogin");
var closeRegister = document.getElementById("closeRegister");

// Open login modal
loginBtn.onclick = function() {
    loginModal.classList.remove("hidden");
}

// Open register modal
registerBtn.onclick = function() {
    registerModal.classList.remove("hidden");
}

// Close login modal
closeLogin.onclick = function() {
    loginModal.classList.add("hidden");
}

// Close register modal
closeRegister.onclick = function() {
    registerModal.classList.add("hidden");
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.classList.add("hidden");
    } else if (event.target == registerModal) {
        registerModal.classList.add("hidden");
    }
}
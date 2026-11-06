// This only controls the contact form
var form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();          // stop the page reloading

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();

        var ok = true;

        // Name: at least 2 characters
        if (name.length < 2) {
            showError("nameError", "Please enter your name (at least 2 characters).");
            ok = false;
        } else {
            showError("nameError", "");
        }

        // Email: must look like a conventional email address
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError("emailError", "Please enter a valid email address.");
            ok = false;
        } else {
            showError("emailError", "");
        }

        // Message: at least 10 characters
        if (message.length < 10) {
            showError("messageError", "Your message should be at least 10 characters.");
            ok = false;
        } else {
            showError("messageError", "");
        }

        if (!ok) {
            document.getElementById("formStatus").textContent = "";
            return;
        }

        // A static site has no server, so we open the visitor's email app with the message filled in.
        var subject = encodeURIComponent("EasyFarm message from " + name);
        var body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
        window.location.href = "mailto:rtjituka5907940@mysundance.ca?subject=" + subject + "&body=" + body;

        document.getElementById("formStatus").textContent = "Thank you! Your email app should open with the message ready to send.";
        form.reset();
    });
}

function showError(id, text) {
    document.getElementById(id).textContent = text;
}

// 1. Interactive Navigation Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.setAttribute("aria-expanded", "false");
    }

});


// Close menu when a navigation link is clicked

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });

});


// 2. Dynamic Content Button

const messageButton = document.getElementById("message-btn");
const dynamicMessage = document.getElementById("dynamic-message");

messageButton.addEventListener("click", function() {

    if (dynamicMessage.textContent === "") {

        dynamicMessage.textContent =
            "I am Michael, an IT student passionate about technology and innovation!";

    } else {

        dynamicMessage.textContent = "";

    }

});


// 3. Contact Form Validation

const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if fields are empty

    if (name === "" || email === "" || message === "") {

        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "red";

    }

    // Check email format

    else if (!email.includes("@") || !email.includes(".")) {

        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";

    }

    else {

        feedback.textContent =
            "Thank you, " + name + "! Your message has been validated.";

        feedback.style.color = "lightgreen";

        contactForm.reset();

    }

});


// 4. Automatically Update Footer Year

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// ====================
// Mobile Menu Toggle
// ====================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// ====================
// Contact Form Validation (contact.html)
// ====================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        formMessage.textContent = "";
        formMessage.style.color = "";

        if (!name || !email || !message) {
            formMessage.textContent = "⚠️ Please fill out all fields.";
            formMessage.style.color = "red";
            return;
        }

        if (!emailRegex.test(email)) {
            formMessage.textContent = "⚠️ Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "✅ Message sent successfully!";
        formMessage.style.color = "green";
        contactForm.reset();
    });
}

// ====================
// Appointment Form Validation (appointments.html)
// ====================
const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const department = document.getElementById("department").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const appointmentMessage = document.getElementById("appointmentMessage");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        appointmentMessage.textContent = "";
        appointmentMessage.style.color = "";

        if (!fullName || !email || !phone || !department || !date || !time) {
            appointmentMessage.textContent = "⚠️ Please fill out all fields.";
            appointmentMessage.style.color = "red";
            return;
        }

        if (!emailRegex.test(email)) {
            appointmentMessage.textContent = "⚠️ Please enter a valid email address.";
            appointmentMessage.style.color = "red";
            return;
        }

        appointmentMessage.textContent = "✅ Appointment booked successfully!";
        appointmentMessage.style.color = "green";
        appointmentForm.reset();
    });
}

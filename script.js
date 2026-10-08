// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
let form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        if (name == "") {
            alert("Please enter your name");
        } else {
            alert("Thank you, " + name + "! Your message has been sent.");
            form.reset();
        }
    });
}
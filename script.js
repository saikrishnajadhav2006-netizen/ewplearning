// Get form element
const form = document.getElementById('reg-form');

// Add submit event listener
form.addEventListener('submit', function (event) {
    // Read input values
    const name = document.getElementById('first-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const genderSelected = document.querySelector('input[name="gender"]:checked');

    // 1. Validate Full Name
    if (name === "") {
        alert("Please enter your Full Name.");
        event.preventDefault(); // Stop form submission
        return;
    }

    // 2. Validate Gender
    if (!genderSelected) {
        alert("Please select a Gender.");
        event.preventDefault(); // Stop form submission
        return;
    }

    // 3. Validate Email
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid Email address.");
        event.preventDefault(); // Stop form submission
        return;
    }

    // Form passes basic checks
    alert("Registration successful!");
});
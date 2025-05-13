// Show Sign Up Form when "Sign Up / Log In" button is clicked
document.getElementById("show-signup-btn").addEventListener("click", function () {
  document.getElementById("signup-form-container").style.display = "block"; // Show the form
});

// Close the Sign Up Form when exit button is clicked
document.getElementById("exit-btn").addEventListener("click", function () {
  document.getElementById("signup-form-container").style.display = "none"; // Hide the form
});

// Handle the sign-up form submission
document.getElementById("signup-btn").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const feedback = document.getElementById("feedback");

  feedback.textContent = ""; // Clear previous feedback

  if (!username || !email || !password || !confirmPassword) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    feedback.textContent = "Passwords do not match!";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = `Account created for ${username} with email ${email}!`;
  feedback.style.color = "green";

  // Redirect to another page after successful signup
  setTimeout(function () {
    window.location.href = "home.html";
  }, 2000);
});

// Redirect to home.html when "Get Started" button is clicked
document.getElementById("get-started-btn").addEventListener("click", function () {
  window.location.href = "home.html";
});
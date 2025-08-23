

//log details
let name = "Mufeek";
let skills = ["HTML","CSS","PHP","React"];
console.log("Name:,name");
console.log("Skills:",skills);

//Button action
document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("message").innerText = "Thanks for visiting my portfolio 🚀";
});
//skills
document.getElementById("toggleSkills").addEventListener("click", function() {
  let skills = document.getElementById("skillsList");
  if (skills.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
});
//footer
document.getElementById("year").innerText = new Date().getFullYear();

//theme
document.getElementById("themeBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "⚠️ Please fill out all fields.";
      formMessage.style.color = "red";
    } else if (!email.includes("@")) {
      formMessage.textContent = "⚠️ Please enter a valid email.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "✅ Message sent successfully!";
      formMessage.style.color = "green";

      // Clear form fields
      form.reset();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('alertBanner');
  const closeBtn = document.getElementById('alertClose');
  const textEl = document.getElementById('alertText');

  // Show the banner with a message
  function showAlert(message, autoHideMs = 0) {
    if (message) textEl.textContent = message;
    banner.style.display = 'flex';
    if (autoHideMs > 0) {
      setTimeout(() => { hideAlert(); }, autoHideMs);
    }
  }

  // Hide the banner
  function hideAlert() {
    banner.style.display = 'none';
  }

  // Close on ×
  closeBtn.addEventListener('click', hideAlert);

  // Show on page load (change text if you want)
  showAlert("👋 Welcome to Mufeek's Portfolio", 5000); // auto-hide after 5s
});


//wellcome massege
alert("Welcome to Mufeek's Profile");

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

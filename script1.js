// Navbar active link
let navLinks = document.querySelectorAll("nav a");
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

// Form validation
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  let error = "";

  if (name === "") {
    error += "Name is required. ";
  }
  if (email === "") {
    error += "Email is required. ";
  }
  if (message === "") {
    error += "Message is required.";
  }

  if (error !== "") {
    alert(error);
  } else {
    form.submit();
  }
});
// Get the sign-in button
var signinBtn = document.getElementById("signin-btn");

// Get the sign-up button
var signupBtn = document.getElementById("signup-btn");

// Get the sign-in page
var signinPage = document.getElementById("signin");

// Get the sign-up page
var signupPage = document.getElementById("signup");

// Add an event listener to the sign-in button
signinBtn.addEventListener("click", function() {
  // Hide the other sections
  document.querySelector("main").style.display = "none";
  document.querySelector("footer").style.display = "none";
  
  // Show the sign-in page
  signinPage.style.display = "block";
});

// Add an event listener to the sign-up button
signupBtn.addEventListener("click", function() {
  // Hide the other sections
  document.querySelector("main").style.display = "none";
  document.querySelector("footer").style.display = "none";

  // Show the sign-up page
  signupPage.style.display = "block";
});
// Get the sign-in button
var signinBtn = document.getElementById("signin-btn");

// Get the sign-up button
var signupBtn = document.getElementById("signup-btn");

// Get the sign-in page
var signinPage = document.getElementById("signin");

// Get the sign-up page
var signupPage = document.getElementById("signup");

// Add an event listener to the sign-in button
signinBtn.addEventListener("click", function() {
    // Hide the other sections
    document.querySelector("main").style.display = "none";
    document.querySelector("footer").style.display = "none";

    // Show the sign-in page
    signinPage.classList.remove("hidden");
});

// Add an event listener to the sign-
// Add an event listener to the sign-up button
signupBtn.addEventListener("click", function() {
    // Hide the other sections
    document.querySelector("main").style.display = "none";
    document.querySelector("footer").style.display = "none";

    // Show the sign-up page
    signupPage.classList.remove("hidden");
});

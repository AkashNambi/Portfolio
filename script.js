const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const anchor = document.querySelectorAll(".nav-links li a");
const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const homeSection = document.getElementById("homeSection");
const aboutSection = document.getElementById("aboutSection");
const projectsSection = document.getElementById("projectsSection");
const contactSection = document.getElementById("contactSection");

const submitform = function (e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  console.log(name, email, message);
  sendEmail(name, email, message);
};

const sendEmail = function (name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "akashnambitkr2000@gmail.com",
    Password: "qfhjxgczrzyqohej",
    To: "tkr.akash.nambi@gmail.com",
    From: "akashnambitkr2000@gmail.com",
    Subject: `${name} sent you a message`,
    Body: `Name : ${name} <br> Email : ${email} <br> Message : ${message}`,
  }).then((message) => alert("Mail sent successfully"));
};

document.querySelector(".contactForm").addEventListener("submit", submitform);
home.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
});

about.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

skills.addEventListener("click", () => {
  skillsSection.scrollIntoView({ behavior: "smooth" });
});

projects.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

contact.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    links[i].classList.remove("active");
    links[i].classList.add("active");
    let a = links[i];
    for (let i = 0; i < links.length; i++) {
      if (links[i] !== a) links[i].classList.remove("active");
    }
  });
}

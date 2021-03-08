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

// const homecoord = homeSection.getBoundingClientRect();
// const aboutcoord = aboutSection.getBoundingClientRect();
// const skillscoord = skillsSection.getBoundingClientRect();
// const projetcscoord = projectsSection.getBoundingClientRect();
// const contactcoord = contactSection.getBoundingClientRect();

const sectionArray = [
  homeSection,
  aboutSection,
  skillsSection,
  projectsSection,
  contactSection,
];

const sectionCallBack = function (entries, observer) {
  const [entry] = entries;
  let c = 0;
  if (entry.isIntersecting) {
    switch (entry.target.id) {
      case "homeSection":
        c = 1;
        break;
      case "aboutSection":
        c = 2;
        break;
      case "skillsSection":
        c = 3;
        break;
      case "projectsSection":
        c = 4;
        break;
      case "contactSection":
        c = 5;
        break;
    }
    const actLink = links[c - 1];
    console.log(actLink);
    if (!links[c - 1].classList.contains("active"))
      links[c - 1].classList.add("active");
    links.forEach((link) => {
      if (link !== actLink) link.classList.remove("active");
    });
  }
};
const secOps = {
  root: null,
  threshold: 0.35,
};
const sectionObserver = new IntersectionObserver(sectionCallBack, secOps);

sectionArray.forEach((section) => {
  sectionObserver.observe(section);
});

// const loader = function (entries, observer) {
//   const [entry] = entries;
//   entry.target.classList.remove("sectionHidden");
// };
// const loadops = {
//   root: null,
//   threshold: 0.2,
// };
// const sectionLoader = new IntersectionObserver(loader, loadops);

// for (let i = 1; i < sectionArray.length; i++) {
//   sectionArray[i].classList.add("sectionHidden");
//   sectionLoader.observe(sectionArray[i]);
// }
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

const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu.querySelectorAll("a");
const projectsContent = document.getElementById("ptojects-content");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  navMenu.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

const projectEl = ({ image, title, tech, description, preview, github }) =>
  `
  <div class="project">
    <img src="${image}" alt="" />
    <h4 class="title">${title}</h4>
    <div class="tech">
      ${tech.map((item) => `<span>${item}</span>`).join("")}
    </div>
    <p class="description">
      ${description}
    </p>
    <div class="project-links">
      <a href="${preview}" id="btn"
        ><i class="fa-solid fa-arrow-up-right-from-square"></i>
        Preview</a
      >
      <a href="${github}" id="btn"><i class="fa-brands fa-github"></i> Code</a>
    </div>
  </div>
  `;

fetch("projects.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    data.map((project) => (projectsContent.innerHTML += projectEl(project)));
  })
  .catch((error) => console.error("Fetch error: ", error));

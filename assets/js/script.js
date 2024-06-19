const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const dateDOM = document.querySelector("#date");
const playBtn = document.querySelector(".play-btn");
const video = document.querySelector(".video");

menu.addEventListener("click", () => {
  links.classList.toggle("hide-menu");
});

const date = new Date();

dateDOM.innerHTML = date.getFullYear();

playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playBtn.classList.toggle("play");
  if (playBtn.classList.contains("play")) {
    video.play();

    playBtn.textContent = "=";
  } else {
    video.pause();
    playBtn.textContent = "▶";
  }
});

const navbar = document.getElementById("nav");
const linksContainer = document.querySelector(".links-container");
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollLinks.forEach((l) => {
      l.classList.remove("active");
    });
    link.classList.add("active");

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
    // linksContainer.style.height = 0;
  });
});

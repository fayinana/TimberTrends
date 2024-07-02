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

    playBtn.innerHTML = "<i class='fas fa-pause'></i>";
  } else {
    video.pause();

    playBtn.innerHTML = "<i class='fas fa-play'></i>";
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
  });
});

const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  observe.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

const loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

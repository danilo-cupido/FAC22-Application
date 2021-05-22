const intro = document.querySelector("h1");
const titles = Array.from(document.querySelectorAll("h2"));
const lightDark = document.querySelector("#light_dark");
const main = document.querySelector("main");
const links = Array.from(document.getElementsByTagName("a"));
const header = document.getElementById("header");
const footer = document.getElementsByTagName("footer");
const fixed = Array.from(document.querySelectorAll(".fixed"));
const sideList = Array.from(document.getElementsByTagName("li"));
const captions = Array.from(document.querySelectorAll("figcaption"));

intro.addEventListener("click", () => {
  intro.textContent = "Welcome!";
}); //this is an easter egg!

// Dark Mode:

lightDark.addEventListener("click", () => {
  links.forEach((link) => link.classList.toggle("lightText"));
  sideList.forEach((list) => list.classList.toggle("lightText"));
  header.classList.toggle("darkHeaderBackground");
  intro.classList.toggle("lightText");
  titles.forEach((title) => title.classList.toggle("lightText"));
  captions.forEach((caption) => caption.classList.toggle("lightCaption"));

  main.classList.toggle("mainDarkBackground");
  fixed.forEach((cont) => cont.classList.toggle("darkBackground"));
  if (lightDark.textContent === "Light to Dark") {
    lightDark.textContent = "Dark to Light";
  } else {
    lightDark.textContent = "Light to Dark";
  }
});

// Carousel:
const photosCarousel = Array.from(document.querySelectorAll(".carouselPhoto"));
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("prev");

let currentPhotoIndex = 0;

function incresePhotoIndex() {
  let upperLimit = photosCarousel.length - 1;

  if (currentPhotoIndex === upperLimit) {
    currentPhotoIndex = 0;
  } else {
    currentPhotoIndex++;
  }
}

function nextPhoto() {
  incresePhotoIndex();

  photosCarousel.forEach((el, index) => {
    if (index === currentPhotoIndex) {
      el.classList.remove("hidden");
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
      el.classList.add("hidden");
    }
  });
}

function decresePhotoIndex() {
  let lowerLimit = 0;

  if (currentPhotoIndex === lowerLimit) {
    currentPhotoIndex = photosCarousel.length - 1;
  } else {
    currentPhotoIndex--;
  }
}

function previousPhoto() {
  decresePhotoIndex();

  photosCarousel.forEach((el, index) => {
    if (index === currentPhotoIndex) {
      el.classList.remove("hidden");
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
      el.classList.add("hidden");
    }
  });
}

nextBtn.addEventListener("click", nextPhoto);
previousBtn.addEventListener("click", previousPhoto);

// Navigate through the sections

const slideshowLink = document.querySelector("#home");
const journeyLink = document.querySelector("#journey");
const facLink = document.querySelector("#fac");
const contactsLink = document.querySelector("#contacts");

const slideshow = document.querySelector(".slideshow-container ");
const journey = document.querySelector(".journey");
const fac = document.querySelector(".fac");
const contacts = document.querySelector(".contacts");

function display(e) {
  const obj = {
    home: slideshow,
    journey: journey,
    fac: fac,
    contacts: contacts,
  };
  for (let id in obj) {
    if (id === e.target.id) {
      obj[e.target.id].classList.remove("hidden");
      obj[e.target.id].classList.add("visible");
    } else {
      obj[id].classList.add("hidden");
      obj[id].classList.remove("visible");
    }
  }
}

slideshowLink.addEventListener("click", display);
journeyLink.addEventListener("click", display);
facLink.addEventListener("click", display);
contactsLink.addEventListener("click", display);

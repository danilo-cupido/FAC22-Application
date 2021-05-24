const intro = document.querySelector("h1");
const titles = Array.from(document.querySelectorAll("h2"));
const lightDark = document.querySelector("#light_dark");
const main = document.querySelector("main");
const links = Array.from(document.getElementsByTagName("a"));
const header = document.getElementById("header");
const footer = document.getElementsByTagName("footer");
const fixed = Array.from(document.querySelectorAll(".fixed"));
const sideList = Array.from(document.getElementsByClassName("sideList"));
const footerList = Array.from(document.getElementsByClassName("footerList"));
const captions = Array.from(document.querySelectorAll("figcaption"));
const prev = document.getElementById("prev");
const next = document.getElementById("next");

intro.addEventListener("click", () => {
  intro.textContent = "Welcome!";
}); //this is an easter egg!

// Dark Mode:

let darkMode = false;
lightDark.addEventListener("click", () => {
  sideList.forEach((list) => {
    list.classList.toggle("lightText");
    list.classList.toggle("darkHover");
    if (list.classList.contains("darkClicked")) {
      list.classList.remove("darkClicked");
      list.classList.add("clicked");
    } else if (list.classList.contains("clicked")) {
      list.classList.remove("clicked");
      list.classList.add("darkClicked");
    }
  });
  footerList.forEach((fList) => fList.classList.toggle("lightText"));
  header.classList.toggle("darkHeaderBackground");
  intro.classList.toggle("lightText");
  prev.classList.toggle("darkPrev");
  next.classList.toggle("darkNext");
  titles.forEach((title) => title.classList.toggle("lightText"));
  captions.forEach((caption) => caption.classList.toggle("lightCaption"));

  main.classList.toggle("mainDarkBackground");
  fixed.forEach((cont) => cont.classList.toggle("darkBackground"));
  if (darkMode === false) {
    lightDark.innerHTML =
      '<i class="fas fa-moon"></i> <i class="fas fa-long-arrow-alt-right"></i> <i class="fas fa-sun">';
    lightDark.style.backgroundColor = "#5b89ab";
    darkMode = true;
  } else {
    lightDark.innerHTML =
      '<i class="fas fa-sun"></i> <i class="fas fa-long-arrow-alt-right"></i> <i class="fas fa-moon"></i>';
    lightDark.style.backgroundColor = "rgb(254, 228, 149)";
    darkMode = false;
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
    home: [slideshow, slideshowLink],
    journey: [journey, journeyLink],
    fac: [fac, facLink],
    contacts: [contacts, contactsLink],
  };
  for (let id in obj) {
    if (id === e.target.id) {
      obj[e.target.id][0].classList.remove("hidden");
      obj[e.target.id][0].classList.add("visible");
      if (darkMode === true) {
        obj[e.target.id][1].classList.add("darkClicked");
      } else {
        obj[e.target.id][1].classList.add("clicked");
      }
    } else {
      obj[id][0].classList.add("hidden");
      obj[id][0].classList.remove("visible");
      if (darkMode === true) {
        obj[id][1].classList.remove("darkClicked");
      } else {
        obj[id][1].classList.remove("clicked");
      }
    }
  }
}

slideshowLink.addEventListener("click", display);
journeyLink.addEventListener("click", display);
facLink.addEventListener("click", display);
contactsLink.addEventListener("click", display);

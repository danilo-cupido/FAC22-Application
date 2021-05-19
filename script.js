const intro = document.querySelector("h1");
const ligthDark = document.querySelector("#ligth_dark");
const main = document.querySelector("main");
const links = Array.from(document.getElementsByTagName("a"));

intro.addEventListener("click", () => {
  intro.textContent = "Welcome!";
}); //this is an easter egg!

// Dark Mode:

ligthDark.addEventListener("click", () => {
  links.forEach((link) => link.classList.toggle("ligthText"));

  main.classList.toggle("darkBackground");
  if (ligthDark.textContent === "Ligth to Dark") {
    ligthDark.textContent = "Dark to Ligth";
  } else {
    ligthDark.textContent = "Ligth to Dark";
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

const intro = document.querySelector("h1");
const ligthDark = document.querySelector("#ligth_dark");
const main = document.querySelector("main");

intro.addEventListener("click", () => {
  intro.textContent = "Welcome!";
}); //this is an easter egg!

ligthDark.addEventListener("click", () => {
  main.classList.toggle("darkBackground");
  if (ligthDark.textContent === "Ligth to Dark") {
    ligthDark.textContent = "Dark to Ligth";
  } else {
    ligthDark.textContent = "Ligth to Dark";
  }
});

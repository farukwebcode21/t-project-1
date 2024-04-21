const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

menu.addEventListener("click", (event) => {
  if (event.target.matches("#link")) {
    menu.classList.add("hidden");
    hamburger.classList.remove("fa-xmark");
  }
});

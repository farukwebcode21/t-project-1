const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const faSolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

menu.addEventListener("click", (event) => {
  if (event.target.matches("#link")) {
    menu.classList.add("hidden");
    hamburger.classList.remove("fa-xmark");
    if (faSolid) {
      faSolid.classList.remove("fa-xmark");
    }
  }
});

const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

const showReview = () => {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
};

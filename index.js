const toggleCss = document.querySelector(".burger-menu");
const button = document.querySelector(".btn");
active = 0;

button.addEventListener("click", () => {
  if (active == 0) {
    toggleCss.style.display = "flex";
    active = 1;
  } else {
    toggleCss.style.display = "none";
    active = 0;
  }
});

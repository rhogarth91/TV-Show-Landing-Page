function changebackgroundTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
}
let themeButton = document.querySelector(".dark-theme-button");
themeButton.addEventListener("click", changebackgroundTheme);

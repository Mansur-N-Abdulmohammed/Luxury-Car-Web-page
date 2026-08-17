const dark_light_btn = document.querySelector(".dark-light-container");

dark_light_btn.addEventListener("click", function () {
  const html = document.documentElement;
  const light_icon = document.querySelector(".light-icon");
  const dark_icon = document.querySelector(".dark-icon");
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
  console.log(light_icon, dark_icon);
  light_icon.classList.toggle("hide-icon");
  dark_icon.classList.toggle("hide-icon");
});

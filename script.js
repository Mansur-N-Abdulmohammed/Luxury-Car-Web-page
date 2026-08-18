const DLM_btn = document.querySelector(".dark-light-container");

const darkLightMode = function (btn) {
  btn.addEventListener("click", function () {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
    document.querySelector(".light-icon").classList.toggle("hide-icon");
    document.querySelector(".dark-icon").classList.toggle("hide-icon");
  });
};

darkLightMode(DLM_btn);
console.log(`hello`);
console.log(`hello`);
console.log(`hello`);
console.log(`hello`);

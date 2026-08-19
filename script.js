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

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("fade-in");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.4,
  },
);

sections.forEach((section) => observer.observe(section));

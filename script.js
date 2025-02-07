const goToTopButton = document.getElementById("goToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
});

goToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

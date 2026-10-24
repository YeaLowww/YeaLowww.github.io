const scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (scrollToTopBtn) {
  scrollToTopBtn.style.display = "none";
}

function scrollFunction() {
  if (!scrollToTopBtn) return;
  if (window.scrollY > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

window.addEventListener("scroll", scrollFunction);

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

scrollFunction();
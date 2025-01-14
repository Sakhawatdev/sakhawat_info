document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.querySelector(".read-more-btn");
  const readMoreContent = document.querySelector(".read-more-content");

  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {
      if (readMoreContent.style.display === "none" || readMoreContent.style.display === "") {
        readMoreContent.style.display = "inline";
        readMoreBtn.textContent = "Read Less";
      } else {
        readMoreContent.style.display = "none";
        readMoreBtn.textContent = "Read More";
      }
    });
  }
});

let currentIndex = 0;
const slides = document.querySelector(".slides"); // Use querySelector for single element
const totalSlides = slides.children.length; // Get number of slides
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function move(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateCarousel();
}

function jumpTo(index) {
  currentIndex = index;
  updateCarousel();
}

// Initialize the carousel on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCarousel();
});

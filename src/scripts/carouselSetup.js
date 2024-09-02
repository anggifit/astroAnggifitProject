// src/scripts/carousel.js

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.getElementById("carousel");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  
  let currentIndex = 0;
  const totalItems = carousel.children.length;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  });

  nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  });

  // Initialize the carousel
  updateCarousel();
});

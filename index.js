var images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlkaBK7dfubDDSWUx1YGMGPZS3iv8GTYvSg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsIWpffrrUcIuyEcgCc0sj9hnXYd9KdRyMg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEVVz0QcesA87k0Bbw51D3vRzNb4aG0Teew&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXEXh5v6oVxbg7COkMv9soZebfGiFBTySKg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvODSy_tbgYfsX8igUoj-sObEPLhYMlJ5Ppg&s",
];

var currentIndex = 0;
var imageElement = document.getElementById("current-image");

// Function to display the current image
function showImage(index) {
  if (index < 0 || index >= images.length) {
    return; // Index out of bounds
  }
  imageElement.src = images[index];
  currentIndex = index;
}

// Function to show the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Function to show the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Show the initial image
showImage(currentIndex);

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-btn");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const parent = this.parentElement;
      const content = parent.querySelector(".accordion-content");
      parent.classList.toggle("active");
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
});

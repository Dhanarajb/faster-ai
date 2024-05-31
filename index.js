var images = [
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

function updateDateTime() {
  const now = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateString = now.toLocaleDateString(undefined, options);
  const timeString = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  document.getElementById("date").textContent = `Date: ${dateString}`;
  document.getElementById("time").textContent = `Time: ${timeString}`;
}

function rescheduleMeeting() {
  updateDateTime();
}

// Initial update
updateDateTime();

// Optional: update every minute
setInterval(updateDateTime, 60000);

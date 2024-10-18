const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(n) {
  slides[currentIndex].style.display = "none";
  currentIndex = (n + slides.length) % slides.length;
  slides[currentIndex].style.display = "block";
}

// Contoh untuk mengganti slide secara otomatis setiap 3 detik
setInterval(function () {
  showSlide(currentIndex + 1);
}, 3000);

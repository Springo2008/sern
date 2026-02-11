// Toggle between showing and hiding the navigation menu links when user clicks hamburger icon
function functionBurger() {
  const x = document.getElementById("myLinks");
  if (x.classList.contains("show")) {
    x.classList.remove("show");
  } else {
    x.classList.add("show");
  }
}
const homeLink = document.getElementById('homeButton');
homeLink.addEventListener('click', function() {
    
    window.location.href = "index.html"; 
})
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
            
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

// Lightbox for gallery images
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');

  if (galleryImages.length > 0 && lightbox) {
    galleryImages.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        const caption = this.parentElement.querySelector('figcaption');
        if (caption) {
          lightboxCaption.textContent = caption.textContent;
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
      });
    }

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
      }
    });
  }
});
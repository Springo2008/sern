function functionBurger() {
  const x = document.getElementById("myLinks");
  x.classList.toggle("show");
}

const homeLink = document.getElementById('homeButton');
if (homeLink) {
  homeLink.addEventListener('click', function() {
    const inSrcFolder = window.location.pathname.includes('/src/');
    window.location.href = inSrcFolder ? '../index.html' : 'index.html';
  });
}

// Mission-style status readout: elapsed time since page load
const statusStart = Date.now();
function updateClock() {
  const elapsed = Math.floor((Date.now() - statusStart) / 1000);
  const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
  const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
  const s = String(elapsed % 60).padStart(2, '0');
  const clock = document.getElementById('clock');
  if (clock) {
    clock.textContent = `SYS: ONLINE // T+ ${h}:${m}:${s}`;
  }
}
updateClock();
setInterval(updateClock, 1000);

// Scroll-triggered fade-up
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Lightbox for gallery images
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
// Select elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('#lightbox .close');
const galleryImages = document.querySelectorAll('.gallery-images img');

// Open lightbox on image click
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside image
lightbox.addEventListener('click', e => {
  if (e.target !== lightboxImg && e.target !== closeBtn) {
    lightbox.style.display = 'none';
  }
});

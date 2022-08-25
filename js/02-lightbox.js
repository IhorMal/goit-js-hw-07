import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function creationGalleryElements({ preview, original, description }) {
   
    return `<li>
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`; 
}

const createdGallery = galleryItems.map(creationGalleryElements).join('');
gallery.innerHTML = createdGallery;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
    captionDelay: 250,
    navText: ['&#10913', '&#10914'],
});


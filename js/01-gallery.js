import {galleryItems} from './gallery-items.js';
// Change code below this line

console.log(galleryItems)

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', modal);

function creationGalleryElements({ preview, original, description }) {
   
    return `<div class="gallery__list">
        <a class="gallery__link" href="${original}" >
        <img class="gallery__image"  src="${preview}" alt="${description}" data-source="${original}"/>
        </a>
        </div>`; 
   
}

const createdGallery = galleryItems.map(creationGalleryElements).join('');
gallery.innerHTML = createdGallery;

function modal(e) {
    e.preventDefault()
    
    const link = e.target.dataset.source;
    if (e.target.localName !== 'img') return;

    const instance = basicLightbox.create(`
    <img class="gallery__acitiv-img" src="${link}" width="1280" height="600">`);

    instance.show();
};




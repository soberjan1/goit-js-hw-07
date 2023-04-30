import { galleryItems } from "./gallery-items.js";
// Change code below this line

// РАЗМЕТКА
const galleryItemsEl = document.querySelector(".gallery");
const addGalleryItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
galleryItemsEl.insertAdjacentHTML("afterbegin", addGalleryItems);

// БИБЛИОТЕКА SimpleLightbox
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

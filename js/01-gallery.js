import { galleryItems } from "./gallery-items.js";
// Change code below this line

// РАМЗЕТКА
const galleryItemsEl = document.querySelector(".gallery");
const addGalleryItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
galleryItemsEl.insertAdjacentHTML("afterbegin", addGalleryItems);

// ДИЛЕГИРОВАНИЕ
galleryItemsEl.addEventListener("click", bigImg);
function bigImg(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains(".gallery__image")) {
    return evt.tagret.dataset.source;
  }
}

// БИБЛИОТЕКА basiclightbox
const instance = basicLightbox.create(`
    <img src="${evt.tagret.dataset.source}" width="800" height="600">
`);

instance.show();

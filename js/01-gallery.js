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

// ДИЛЕГИРОВАНИЕ // БИБЛИОТЕКА basiclightbox
galleryItemsEl.addEventListener("click", onGalleryItemClick);
function onGalleryItemClick(evt) {
  evt.preventDefault();
  const imgSrc = evt.target.parentNode.href;
  const imgAlt = evt.target.alt;

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${imgSrc}" alt="${imgAlt}">`,

    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModal);
      },

      onClose: (instance) => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  function closeModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}

// ЗАКРЫТИЕ ПО ESCP

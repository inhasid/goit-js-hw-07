import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
           />
        </a>
      </li>
  `
    )
    .join("");
}

function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
    event.preventDefault();
    const originalImg = event.target.dataset.source;
    const instance = basicLightbox.create(`  
    <img src="${originalImg}"/>
  `);
  instance.show();
  document.addEventListener("keydown", onEscKeyPress);
  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener(
        "keydown",
        onEscKeyPress
      );
    }
  }
}



console.log(galleryItems);

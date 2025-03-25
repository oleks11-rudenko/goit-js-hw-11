import { requestData } from "./js/pixabay-api";
import { renderMarkup, clearGallery } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  form: document.querySelector(".form"),
  gallery: document.querySelector(".gallery"),
  loader: document.querySelector(".loader"),
};

refs.form.addEventListener("submit", onSumbit);

function onSumbit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  if (!form.elements[0].value.trim()) {
    iziToast.warning({
      message: "Sorry, there are no keywords. Please enter them.",
      position: "topRight",
    });
    return;
  }

  refs.loader.classList.remove("hidden");
  clearGallery(refs.gallery);

  requestData(form.elements[0].value)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.show({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          messageColor: "#FAFAFB",
          backgroundColor: "#EF4040",
          iconColor: "#FAFAFB",
          iconUrl: "./img/octagon.svg",
          position: "topRight",
          close: false,
          buttons: [
            [
              "<button>✕</button>",
              function (instance, toast) {
                instance.hide({}, toast);
              },
            ],
          ],
        });
        return;
      }
      renderMarkup(refs.gallery, images.hits);
    })
    .catch(error => console.error(error.message))
    .finally(() => refs.loader.classList.add("hidden"));
  form.reset();
}

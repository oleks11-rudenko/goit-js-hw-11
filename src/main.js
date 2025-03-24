import { refs } from "./js/render-functions";
import { requestMarkup } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

refs.form.addEventListener("submit", onSumbit);

function onSumbit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  refs.gallery.innerHTML = "";
  debugger;
  console.log(form.elements[0].value.trim().length === 0);
  if (form.elements[0].value.trim().length === 0) {
    iziToast.warning({
      message: "Sorry, there are no keywords. Please enter them.",
      position: "topRight",
    });
  } else {
    fetchPictures(form.elements[0].value);
  }
  form.reset();
}

function fetchPictures(query) {
  refs.loader.classList.remove("hidden");
  const params = {
    key: "49503501-671f9af9932bd9ea1fe97a1a7",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  };

  requestMarkup(params);
  refs.loader.classList.add("hidden");
}

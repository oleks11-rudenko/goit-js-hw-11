import { generateMarkup } from "./render-functions";
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

axios.defaults.baseURL = "https://pixabay.com/api";

export function requestMarkup(params) {
  axios
    .get("/", { params })
    .then(response => response.data)
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
      } else {
        6;
        generateMarkup(images.hits);
      }
    })
    .catch(error => {
      console.error(error.message);
    });
}

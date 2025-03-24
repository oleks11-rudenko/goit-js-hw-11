import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

export function requestData(query) {
  const params = {
    key: "49503501-671f9af9932bd9ea1fe97a1a7",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  };
  return axios
    .get("/", { params })
    .then(response => response.data)
    .catch(error => {
      console.error(error.message);
    });
}

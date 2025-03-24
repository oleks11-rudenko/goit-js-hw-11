import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const refs = {
  form: document.querySelector(".form"),
  gallery: document.querySelector(".gallery"),
  loader: document.querySelector(".loader"),
};

export function generateMarkup(pictures) {
  const markup = pictures
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
	              <a class="gallery-link" href="${largeImageURL}">
		            <img 
		              class="gallery-image" 
		              src="${webformatURL}" 
		              alt="${tags}" 
		            />
	              </a>
                    <ul class="gallery-list">
                        <li class="gallery-data">
                            Likes
                            <span class="datatext">${likes}</span>
                        </li>
                        <li class="gallery-data">
                            Views
                            <span class="datatext">${views}</span>
                        </li>
                        <li class="gallery-data">
                            Comments
                            <span class="datatext">${comments}</span>
                        </li>
                        <li class="gallery-data">
                            Downloads
                            <span class="datatext">${downloads}</span>
                        </li>
                    </ul>
              </li>`;
      }
    )
    .join("");

  refs.gallery.insertAdjacentHTML("beforeend", markup);

  let lightbox = new SimpleLightbox(".gallery-link", {
    captionsData: "alt",
    captionDelay: 250,
  });
  lightbox.refresh();
}

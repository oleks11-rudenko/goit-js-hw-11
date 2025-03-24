import{S as g,a as i,i as c}from"./assets/vendor-mj6yH6lW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function m(a){const e=a.map(({webformatURL:s,largeImageURL:t,tags:r,likes:o,views:u,comments:d,downloads:f})=>`<li class="gallery-item">
	              <a class="gallery-link" href="${t}">
		            <img 
		              class="gallery-image" 
		              src="${s}" 
		              alt="${r}" 
		            />
	              </a>
                    <ul class="gallery-list">
                        <li class="gallery-data">
                            Likes
                            <span class="datatext">${o}</span>
                        </li>
                        <li class="gallery-data">
                            Views
                            <span class="datatext">${u}</span>
                        </li>
                        <li class="gallery-data">
                            Comments
                            <span class="datatext">${d}</span>
                        </li>
                        <li class="gallery-data">
                            Downloads
                            <span class="datatext">${f}</span>
                        </li>
                    </ul>
              </li>`).join("");l.gallery.insertAdjacentHTML("beforeend",e),new g(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}i.defaults.baseURL="https://pixabay.com/api";function p(a){i.get("/",{params:a}).then(e=>e.data).then(e=>{e.hits.length===0?c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",iconUrl:"./img/octagon.svg",position:"topRight",close:!1,buttons:[["<button>✕</button>",function(n,s){n.hide({},s)}]]}):m(e.hits)}).catch(e=>{console.error(e.message)})}l.form.addEventListener("submit",h);function h(a){a.preventDefault();const e=a.currentTarget;l.gallery.innerHTML="";debugger;console.log(e.elements[0].value.trim().length===0),e.elements[0].value.trim().length===0?c.warning({message:"Sorry, there are no keywords. Please enter them.",position:"topRight"}):y(e.elements[0].value),e.reset()}function y(a){l.loader.classList.remove("hidden"),p({key:"49503501-671f9af9932bd9ea1fe97a1a7",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),l.loader.classList.add("hidden")}
//# sourceMappingURL=index.js.map

import{a as u,S as g,i}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api";function p(s){const a={key:"49503501-671f9af9932bd9ea1fe97a1a7",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return u.get("/",{params:a}).then(r=>r.data).catch(r=>{console.error(r.message)})}let c;function y(s,a){s=document.querySelector(".gallery");const r=a.map(({webformatURL:o,largeImageURL:e,tags:t,likes:l,views:d,comments:f,downloads:m})=>`<li class="gallery-item">
	                <a class="gallery-link" href="${e}">
		                <img  
		                class="gallery-image" 
		                src="${o}" 
		                alt="${t}" =
		                />
	                </a>
                    <ul class="gallery-list">
                      <li class="gallery-data">
                        Likes
                        <span class="datatext">${l}</span>
                      </li>
                      <li class="gallery-data">
                        Views
                        <span class="datatext">${d}</span>
                      </li>
                      <li class="gallery-data">
                        Comments
                        <span class="datatext">${f}</span>
                      </li>
                      <li class="gallery-data">
                        Downloads
                        <span class="datatext">${m}</span>
                      </li>
                    </ul>
                </li>`).join("");s.insertAdjacentHTML("beforeend",r),c=new g(".gallery-link",{captionsData:"alt",captionDelay:250}),c.refresh()}const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",h);function h(s){s.preventDefault();const a=s.currentTarget;if(a.elements[0].value.trim().length===0){i.warning({message:"Sorry, there are no keywords. Please enter them.",position:"topRight"});return}n.loader.classList.remove("hidden"),n.gallery.innerHTML="",p(a.elements[0].value).then(r=>{if(r.hits.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",iconUrl:"./img/octagon.svg",position:"topRight",close:!1,buttons:[["<button>✕</button>",function(o,e){o.hide({},e)}]]});return}y(n.gallery,r.hits)}).catch(r=>console.error(r.message)).finally(()=>n.loader.classList.add("hidden")),a.reset()}
//# sourceMappingURL=index.js.map

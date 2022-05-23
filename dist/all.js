customElements.define("my-article",class extends HTMLElement{connectedCallback(){var t=this.getAttribute("content"),e=this.getAttribute("image"),i=(this.getAttribute("image-small"),console.log(window.innerWidth),this.getAttribute("title"));this.innerHTML=`
        <div class="article">
          <div class="article-section-image">
            <img src="${e}" alt="picture"></img>
          </div>

          <div class="article-section-text">
            <p class="title">${i}</p>
            <p class="content">${t}</p>
            <my-button title="Button"></my-button>
          </div>
        </div
      `}}),customElements.define("my-button",class extends HTMLElement{connectedCallback(){var t=this.getAttribute("title");let e=document.createElement("button");e.innerHTML=t,e.classList.add("my-button-style"),this.appendChild(e)}});
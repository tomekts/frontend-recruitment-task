customElements.define(
  "my-article",
  class extends HTMLElement {
    connectedCallback() {
      const content = this.getAttribute("content");
      const image = this.getAttribute("image");
      const name = this.getAttribute("name");
      const imegeSmall = this.getAttribute("image-small");
      const imageUrl = "s";
      let countLocal = window.localStorage.getItem(name);
      if (!countLocal) {
        window.localStorage.setItem(name, 0);
      }
      const title = this.getAttribute("title");
      const article = `
        <div class="article">
          <div class="article-section-image">
            <img src="${image}" alt="picture"></img>
          </div>
          <div class="article-section-text">
            <p class="title">${title}</p>
            <p class="content">${content}</p>
            <my-button    
            click='
            let doc= document.getElementById("${"count-" + name}")   
            let count = parseInt(window.localStorage.getItem("${name}"))         
            doc.innerHTML = count+1;            
            window.localStorage.setItem("${name}",count+1)
            document.getElementById("${name}").style.display = "flex";
            '         
            title="Button">
            </my-button>
          </div>
        </div
      `;
      this.innerHTML = article;
    }
  }
);

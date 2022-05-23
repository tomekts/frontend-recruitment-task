customElements.define(
  "my-article",
  class extends HTMLElement {
    connectedCallback() {
      const content = this.getAttribute("content");
      const image = this.getAttribute("image");
      const imegeSmall = this.getAttribute("image-small");
      console.log(window.innerWidth);
      const imageUrl = "s";
      const title = this.getAttribute("title");
      const article = `
        <div class="article">
          <div class="article-section-image">
            <img src="${image}" alt="picture"></img>
          </div>

          <div class="article-section-text">
            <p class="title">${title}</p>
            <p class="content">${content}</p>
            <my-button title="Button"></my-button>
          </div>
        </div
      `;
      this.innerHTML = article;
    }
  }
);

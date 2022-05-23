customElements.define(
  "my-button",
  class extends HTMLElement {
    connectedCallback() {
      const title = this.getAttribute("title");
      let button = document.createElement("button");
      button.innerHTML = title;
      button.classList.add("my-button-style");
      this.appendChild(button);
    }
  }
);

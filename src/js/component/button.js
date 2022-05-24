customElements.define(
  "my-button",
  class extends HTMLElement {
    connectedCallback() {
      const title = this.getAttribute("title");
      const click = this.getAttribute("click");
      let button = document.createElement("button");
      button.innerHTML = title;
      button.onclick = function () {
        eval(click);
      };
      button.classList.add("my-button-style");
      this.appendChild(button);
    }
  }
);

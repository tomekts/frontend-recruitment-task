customElements.define(
  "my-popup",
  class extends HTMLElement {
    connectedCallback() {
      this.classList.add("popup-container");
      const title = this.getAttribute("title");
      this.firstChild.classList.add("content");
      let iconClosed = document.createElement("img");
      iconClosed.setAttribute("alt", "na");
      iconClosed.setAttribute("src", "images/icon/icon_closed.svg");
      iconClosed.classList.add("button-closed");
      this.firstChild.appendChild(iconClosed);

      //   button.innerHTML = "test";
      //   button.classList.add("my-button-style");
    }
  }
);

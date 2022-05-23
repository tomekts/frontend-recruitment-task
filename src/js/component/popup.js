customElements.define(
  "my-popup",
  class extends HTMLElement {
    connectedCallback() {
      this.classList.add("popup-container");
      this.firstChild.classList.add("content");
      this.setAttribute("id", "popup");
      let iconClosed = document.createElement("img");
      iconClosed.setAttribute("alt", "na");
      iconClosed.setAttribute("src", "images/icon/icon_closed.svg");
      iconClosed.classList.add("button-closed");
      iconClosed.onclick = function () {
        document.getElementById("popup").style.display = "none";
      };
      this.firstChild.appendChild(iconClosed);      
    }
  }
);

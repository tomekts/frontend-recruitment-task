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
              if(doc){
                doc.innerHTML= count+1;
                window.localStorage.setItem("${name}",count+1)
                document.getElementById("${name}").style.display = "flex";
                if(doc.innerHTML>4){
                  document.getElementById("${name}-reset-button").style.display = "block";
                }else{
                  document.getElementById("${name}-reset-button").style.display = "none";
                }
              }'         
              title="Button">
            </my-button>
          </div>
          
          <my-popup name="${name}"
            ><div>
              <p class="popup-alert">Alert!</p>
              <div class="popup-info">
                <p>
                  You have clicked <span id="count-${name}">0</span> <b>times</b> to
                  related button.
                </p>
                <my-button
                  class="button-reset"
                  id="${name}-reset-button"              
                  title="Reset voice"
                  click='
                    console.log("tes")
                    window.localStorage.setItem("${name}",0)
                    document.getElementById("${"count-" + name}").innerHTML=0
                    document.getElementById("${name}-reset-button").style.display = "none";
                  '
                ></my-button>
              </div>
            </div>
          </my-popup> 



        </div
      `;
      this.innerHTML = article;
    }
  }
);

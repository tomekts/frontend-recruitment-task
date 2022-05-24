customElements.define("my-article",class extends HTMLElement{connectedCallback(){var t=this.getAttribute("content"),e=this.getAttribute("image"),i=this.getAttribute("name"),n=(this.getAttribute("image-small"),window.localStorage.getItem(i)||window.localStorage.setItem(i,0),this.getAttribute("title"));this.innerHTML=`
        <div class="article">
          <div class="article-section-image">
            <img src="${e}" alt="picture"></img>
          </div>
          <div class="article-section-text">
            <p class="title">${n}</p>
            <p class="content">${t}</p>
            <my-button    
            click='
            let doc= document.getElementById("${"count-"+i}")   
            let count = parseInt(window.localStorage.getItem("${i}"))         
            doc.innerHTML = count+1;            
            window.localStorage.setItem("${i}",count+1)
            document.getElementById("${i}").style.display = "flex";
            '         
            title="Button">
            </my-button>
          </div>
        </div
      `}}),customElements.define("my-button",class extends HTMLElement{connectedCallback(){const title=this.getAttribute("title"),click=this.getAttribute("click");let button=document.createElement("button");button.innerHTML=title,button.onclick=function(){eval(click)},button.classList.add("my-button-style"),this.appendChild(button)}}),customElements.define("my-popup",class extends HTMLElement{connectedCallback(){this.classList.add("popup-container"),this.firstChild.classList.add("content");const t=this.getAttribute("name");this.setAttribute("id",t);let e=document.createElement("img");e.setAttribute("alt","na"),e.setAttribute("src","images/icon/icon_closed.svg"),e.classList.add("button-closed"),e.onclick=function(){document.getElementById(t).style.display="none"},this.firstChild.appendChild(e)}});
customElements.define("my-article",class extends HTMLElement{connectedCallback(){var t=this.getAttribute("content"),e=this.getAttribute("image"),n=this.getAttribute("name"),i=(window.localStorage.getItem(n)||window.localStorage.setItem(n,0),this.getAttribute("title"));this.innerHTML=`
        <div class="article">
          <div class="article-section-image">
            <img src="${e}" alt="picture"></img>
          </div>
          <div class="article-section-text">
            <p class="title">${i}</p>
            <p class="content">${t}</p>
            <my-button    
              click='
              let doc= document.getElementById("${"count-"+n}")   
              let count = parseInt(window.localStorage.getItem("${n}")) 
              if(doc){
                doc.innerHTML= count+1;
                window.localStorage.setItem("${n}",count+1)
                document.getElementById("${n}").style.display = "flex";
                if(doc.innerHTML>4){
                  document.getElementById("${n}-reset-button").style.display = "block";
                }else{
                  document.getElementById("${n}-reset-button").style.display = "none";
                }
              }'         
              title="Button">
            </my-button>
          </div>
          
          <my-popup name="${n}"
            ><div>
              <p class="popup-alert">Alert!</p>
              <div class="popup-info">
                <p>
                  You have clicked <span id="count-${n}">0</span> <b>times</b> to
                  related button.
                </p>
                <my-button
                  class="button-reset"
                  id="${n}-reset-button"              
                  title="Reset voice"
                  click='
                    console.log("tes")
                    window.localStorage.setItem("${n}",0)
                    document.getElementById("${"count-"+n}").innerHTML=0
                    document.getElementById("${n}-reset-button").style.display = "none";
                  '
                ></my-button>
              </div>
            </div>
          </my-popup> 



        </div
      `}}),customElements.define("my-button",class extends HTMLElement{connectedCallback(){const title=this.getAttribute("title"),click=this.getAttribute("click");let button=document.createElement("button");button.innerHTML=title,button.onclick=function(){eval(click)},button.classList.add("my-button-style"),this.appendChild(button)}}),customElements.define("my-popup",class extends HTMLElement{connectedCallback(){this.classList.add("popup-container"),this.firstChild.classList.add("content");const t=this.getAttribute("name");this.setAttribute("id",t);let e=document.createElement("img"),n=(e.setAttribute("alt","na"),e.setAttribute("src","images/icon/icon_closed.svg"),e.classList.add("button-closed"),e.onclick=function(){document.getElementById(t).style.display="none"},document.createElement("div"));n.classList.add("overlay"),this.appendChild(n),n.onclick=function(){document.getElementById(t).style.display="none"},this.firstChild.appendChild(e)}});
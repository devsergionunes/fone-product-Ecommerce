(()=>{"use strict";!function(){const t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="nav"]'),n=["click","touchstart"];function o(){t.classList.toggle("active"),e.classList.toggle("active"),function(n,o,c,a){const r=document.documentElement,i="data-outside";function s(a){n.contains(a.target)||o.contains(a.target)||(c.forEach((t=>{r.removeEventListener(t,s)})),o.removeAttribute(i),t.classList.remove("active"),e.classList.remove("active"))}o.hasAttribute(i)||setTimeout((()=>{c.forEach((t=>{r.addEventListener(t,s)}))})),o.setAttribute(i,"")}(e,t,n)}n.forEach((e=>{t.addEventListener(e,o)}))}(),function(){const t=document.querySelector('[data-shipping="input"]'),e=document.querySelector('[data-shipping="button"]'),n=document.querySelector('[data-shipping="preco"]'),o=document.querySelector('[data-shipping="localidade"]');e.addEventListener("click",(function(e){e.preventDefault();const c=t.value.replace(/\D/g,"");fetch(`https://viacep.com.br/ws/${c}/json/`).then((t=>t.json())).then((t=>{var e;(e=t).localidade?(n.style.display="block",n.innerText=`$${Math.floor(51*Math.random()+30)}`,o.style.display="block",o.innerText=`Cidade: ${e.localidade}, ${e.uf}\n          Bairro: ${e.bairro}\n          ${e.logradouro}`):(n.style.display="none",o.style.display="block",o.innerText="Verifique o cep e tente novamente")})).catch((t=>{console.log(Error(t)),n.style.display="none",o.style.display="block",o.innerText="Verifique o cep e tente novamente"}))}))}(),function(){const t=document.querySelector('[data-product="imagens"]'),e=document.querySelector('[data-product="imagem"]');function n(t,e){const n=document.createElement("img");return n.setAttribute("src",t),n.setAttribute("alt",e),n}fetch("assets/api-product/product.json").then((t=>t.json())).then((o=>{o.forEach((o=>{o.imagens.forEach(((o,c)=>{t.appendChild(n(o.src,o.alt)),0===c&&e.append(n(o.src,o.alt))}))}))})).catch((t=>{console.log(Error(t))}))}(),function(){const t=document.querySelector('[data-product="imagem"]');document.querySelector('[data-product="imagens"]').addEventListener("click",(function(e){e.preventDefault();const n=e.target.getAttribute("src"),o=e.target.getAttribute("alt");t.querySelector("img").alt=o,t.querySelector("img").src=n}))}()})();
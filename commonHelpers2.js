/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const u=document.body,b=document.querySelector(".header-open-btn"),f=document.querySelector(".header-mob-menu"),y=document.querySelector(".header-close-btn"),g=document.querySelector(".header-backdrop"),x=document.querySelectorAll(".header-link"),k=document.querySelector(".header");b.addEventListener("click",()=>{f.classList.add("is-open"),g.classList.add("is-visible"),u.classList.add("no-scroll")});y.addEventListener("click",d);g.addEventListener("click",d);x.forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const i=r.getAttribute("href").substring(1),c=document.getElementById(i);if(c){const s=window.innerWidth<=1199?k.offsetHeight:0,o=c.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:o,behavior:"smooth"})}d()})});function d(){f.classList.remove("is-open"),g.classList.remove("is-visible"),u.classList.remove("no-scroll")}function L(r,t){const i=r.querySelector("img"),c=()=>window.innerWidth>=1200;let e=c()?"desktop":"mobile",s=0,o=null;const n={desktop:[{src:`../img/features/desktop/${t}/image-1.jpg`,src2x:`../img/features/desktop/${t}/image-1@2x.jpg`},{src:`../img/features/desktop/${t}/image-2.jpg`,src2x:`../img/features/desktop/${t}/image-2@2x.jpg`},{src:`../img/features/desktop/${t}/image-3.jpg`,src2x:`../img/features/desktop/${t}/image-3@2x.jpg`}],mobile:[{src:`../img/features/mobile/${t}/image-1.jpg`,src2x:`../img/features/mobile/${t}/image-1@2x.jpg`},{src:`../img/features/mobile/${t}/image-2.jpg`,src2x:`../img/features/mobile/${t}/image-2@2x.jpg`},{src:`../img/features/mobile/${t}/image-3.jpg`,src2x:`../img/features/mobile/${t}/image-3@2x.jpg`}]};function a(l){const{src:p,src2x:v}=n[e][l];i.classList.remove("active"),setTimeout(()=>{i.src=p,i.srcset=`${p} 1x, ${v} 2x`,i.onload=()=>{requestAnimationFrame(()=>{i.classList.add("active")})}},400)}function m(){o||(o=setInterval(()=>{s=(s+1)%n[e].length,a(s)},2e3))}window.addEventListener("resize",()=>{const l=c()?"desktop":"mobile";l!==e&&(e=l,s=0,a(s))}),a(s),m()}document.querySelectorAll(".image-rotator").forEach(r=>{const t=r.dataset.id;L(r,t)});const w={"cityscape-dash-mob":[{src:"./img/game-levels/cityscape-dash-mob-1.png",retina:"./img/game-levels/cityscape-dash-mob-1@2x.png"},{src:"./img/game-levels/cityscape-dash-mob-2.png",retina:"./img/game-levels/cityscape-dash-mob-2@2x.png"},{src:"./img/game-levels/cityscape-dash-mob-3.png",retina:"./img/game-levels/cityscape-dash-mob-3@2x.png"}],"cityscape-dash-desk":[{src:"./img/game-levels/cityscape-dash-desk-1.png",retina:"./img/game-levels/cityscape-dash-desk-1@2x.png"},{src:"./img/game-levels/cityscape-dash-desk-2.png",retina:"./img/game-levels/cityscape-dash-desk-2@2x.png"},{src:"./img/game-levels/cityscape-dash-desk-3.png",retina:"./img/game-levels/cityscape-dash-desk-3@2x.png"}],"space-rush-mob":[{src:"./img/game-levels/space-rush-mob-1.png",retina:"./img/game-levels/space-rush-mob-1@2x.png"},{src:"./img/game-levels/space-rush-mob-2.png",retina:"./img/game-levels/space-rush-mob-2@2x.png"},{src:"./img/game-levels/space-rush-mob-3.png",retina:"./img/game-levels/space-rush-mob-3@2x.png"}],"space-rush-desk":[{src:"./img/game-levels/space-rush-desk-1.png",retina:"./img/game-levels/space-rush-desk-1@2x.png"},{src:"./img/game-levels/space-rush-desk-2.png",retina:"./img/game-levels/space-rush-desk-2@2x.png"},{src:"./img/game-levels/space-rush-desk-3.png",retina:"./img/game-levels/space-rush-desk-3@2x.png"}]},h=r=>{document.querySelectorAll(r).forEach(i=>{const c=i.dataset.name,e=w[c];if(!e)return;let s=0;setInterval(()=>{s=(s+1)%e.length;const o=window.devicePixelRatio>1?e[s].retina:e[s].src;let n=i.querySelector("img");n||(n=document.createElement("img"),i.appendChild(n)),n.src=o,i.querySelectorAll("img").forEach(m=>{m.classList.remove("active")}),n.classList.add("active")},1e3)})};h(".gl-item-img-mob");h(".gl-item-img-desk");
//# sourceMappingURL=commonHelpers2.js.map

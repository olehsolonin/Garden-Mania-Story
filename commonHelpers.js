/* empty css                      */import{S as v,N as h,M as E,K as w}from"./assets/vendor-CawdlR98.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function f(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=f(t);fetch(t.href,o)}})();const g=new v(".swiper",{modules:[h,E,w],updateOnWindowResize:!0,spaceBetween:20,mousewheel:{invert:!1},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:10},1200:{slidesPerView:3,spaceBetween:10}}});document.addEventListener("keydown",function(e){e.key==="Tab"&&(e.preventDefault(),e.shiftKey?g.slidePrev():g.slideNext())});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".gallery-section"),s=document.querySelectorAll(".swiper-slide"),f={root:null,threshold:.5},d=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(s.forEach((i,m)=>{i.classList.contains("animated")||(m%3===0?i.classList.add("tilt-in-fwd-left"):m%3===1?i.classList.add("tilt-in-fwd-top"):m%3===2&&i.classList.add("tilt-in-fwd-right"),i.style.opacity="1",i.classList.add("animated"))}),d.unobserve(e))})},f);d.observe(e)});const k=document.getElementById("toggleBtn"),b=document.getElementById("toggleModal"),B=document.getElementById("closeBtn"),S=document.getElementById("homeLink"),I=document.getElementById("featureLink"),q=document.getElementById("aboutLink"),x=document.getElementById("galleryLink"),C=document.getElementById("userLink"),c=e=>{console.log(e.currentTarget),b.classList.toggle("is-active")};k.addEventListener("click",c);B.addEventListener("click",c);S.addEventListener("click",c);I.addEventListener("click",c);q.addEventListener("click",c);x.addEventListener("click",c);C.addEventListener("click",c);const r=document.querySelector(".slider-wrapper"),a=document.querySelectorAll(".slide"),N=document.querySelector(".next"),O=document.querySelector(".prev"),p=document.querySelectorAll(".pagination-number");let n=0;const l=a.length,P=a[0].cloneNode(!0),X=a[l-1].cloneNode(!0);r.appendChild(P);r.insertBefore(X,a[0]);const A=document.querySelectorAll(".slide");A.length;r.style.transform="translateX(-100%)";function u(){const e=document.querySelector(".slider-container").clientWidth;r.style.transition="transform 0.4s ease-in-out",r.style.transform=`translateX(-${(n+1)*e}px)`,n===l&&setTimeout(()=>{r.style.transition="none",n=0,r.style.transform=`translateX(-${e}px)`},400),n===-1&&setTimeout(()=>{r.style.transition="none",n=l-1,r.style.transform=`translateX(-${l*e}px)`},400),L()}N.addEventListener("click",()=>{n<l-1?n++:n=0,u()});O.addEventListener("click",()=>{n>0?n--:n=l-1,u()});function L(){p.forEach(s=>s.classList.remove("active")),p[n===l?0:n].classList.add("active")}p.forEach((e,s)=>{e.addEventListener("click",()=>{n=s,u()})});let y=0;r.addEventListener("touchstart",e=>{y=e.touches[0].clientX});r.addEventListener("touchend",e=>{const s=e.changedTouches[0].clientX;y>s+50?n++:y<s-50&&n--,u()});L();
//# sourceMappingURL=commonHelpers.js.map

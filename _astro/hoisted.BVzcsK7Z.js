const o=document.querySelector(".navbar");let c=window.scrollY;window.onscroll=function(){const t=window.scrollY;c>t?o?.classList.remove("opacity-0"):o?.classList.add("opacity-0"),c=t};const e=document.querySelectorAll(".nav-link"),s=window.location.pathname;e.forEach(t=>{t.getAttribute("href")===s?t.classList.add("active"):t.classList.remove("active")});
(()=>{"use strict";const n=992;var e=document.getElementById("menu"),t=document.getElementById("settings"),s=document.getElementById("database"),o=document.getElementById("logs"),d=document.getElementById("system"),i=document.getElementById("dashboard"),a=document.getElementById("ota"),c=document.getElementById("settings_btn"),l=document.getElementById("database_btn"),m=document.getElementById("logs_btn"),u=document.getElementById("system_btn"),L=document.getElementById("dashboard_btn"),r=document.getElementById("ota_btn");function h(){t.classList.add("d-none"),s.classList.add("d-none"),o.classList.add("d-none"),d.classList.add("d-none"),i.classList.add("d-none"),a.classList.add("d-none")}c.onclick=function(){window.innerWidth>n?e.classList.remove("d-none"):e.classList.add("d-none"),h(),t.classList.remove("d-none")},l.onclick=function(){window.innerWidth>n?e.classList.remove("d-none"):e.classList.add("d-none"),h(),s.classList.remove("d-none")},m.onclick=function(){window.innerWidth>n?e.classList.remove("d-none"):e.classList.add("d-none"),h(),o.classList.remove("d-none")},u.onclick=function(){window.innerWidth>n?e.classList.remove("d-none"):e.classList.add("d-none"),h(),d.classList.remove("d-none")},L.onclick=function(){window.innerWidth>n?e.classList.remove("d-none"):e.classList.add("d-none"),h(),i.classList.remove("d-none")},r.onclick=function(){window.innerWidth>n?e.classList.remove("d-none"):e.classList.add("d-none"),h(),a.classList.remove("d-none")},window.onload=function(){document.getElementsByTagName("html")[0].style.visibility="visible",history.replaceState(null,null,location.pathname+"#myhash"),history.pushState(null,null,location.pathname)},window.addEventListener("popstate",(function(){console.log("hash:",location.hash),"#myhash"===location.hash&&(history.replaceState(null,null,location.pathname),setTimeout((function(){location.replace("main.html")}),0))})),window.addEventListener("resize",(function(){window.innerWidth>n?e.classList.remove("d-none"):!1===(t.classList.contains("d-none")&&d.classList.contains("d-none")&&s.classList.contains("d-none")&&i.classList.contains("d-none")&&o.classList.contains("d-none")&&a.classList.contains("d-none"))&&e.classList.add("d-none")}))})();
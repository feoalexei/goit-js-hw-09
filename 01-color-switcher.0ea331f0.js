!function(){document.querySelectorAll('button[type="button"]');var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0,t.addEventListener("click",(function(n){timerId=setInterval((function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(n){clearInterval(timerId),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.0ea331f0.js.map

!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=(document.getElementsByTagName("body"),null);e.disabled=!0,t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.46f7ebc1.js.map

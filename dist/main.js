(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const a=r},426:(n,e,t)=>{t.d(e,{Z:()=>E});var o=t(645),r=t.n(o),a=t(667),l=t.n(a),i=t(925),c=t(198),d=t(843),s=t(773),u=t(436),f=t(592),m=t(225),p=r()((function(n){return n[1]})),h=l()(i),g=l()(c),v=l()(d),b=l()(s),y=l()(u),w=l()(f),x=l()(m);p.push([n.id,'/* epilogue-200 - latin */\n@font-face {\n  font-family: "Epilogue";\n  font-style: normal;\n  font-weight: 200;\n  src: local(""), url('+h+') format("woff2"),\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\n      url('+g+') format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* epilogue-regular - latin */\n@font-face {\n  font-family: "Epilogue";\n  font-style: normal;\n  font-weight: 400;\n  src: local(""), url('+v+') format("woff2"),\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\n      url('+b+') format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* epilogue-800 - latin */\n@font-face {\n  font-family: "Epilogue";\n  font-style: normal;\n  font-weight: 800;\n  src: local(""), url('+y+') format("woff2"),\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\n      url('+w+') format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n:root {\n  --main-color1: #394910;\n  --main-color2: #928e45;\n  --main-color3: #f5dc85;\n  --dark-color1: #1f1f1f;\n  --dark-color2: #272727;\n  --ligh-color1: #f7f7f7;\n\n  --small-l1: 6px;\n  --small-l2: 10px;\n  --small-l3: 14px;\n\n  --med-l1: 16px;\n  --med-l2: 22px;\n  --med-l3: 28px;\n\n  --large-l1: 40px;\n  --large-l2: 56px;\n  --large-l3: 72px;\n}\n\nbody {\n  background-image: url('+x+');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  overflow: auto; /*If problem happens try: scroll.*/\n}\n\n.nav-bar {\n  position: fixed;\n  width: 100vw;\n  top: 0%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  /*padding: var(--med-l3) var(--med-l3);*/\n  align-items: center;\n  height: var(--large-l3);\n  background-color: var(--main-color1);\n}\n\n#content {\n  padding-top: var(--large-l3);\n}\n\n.nav-item {\n  color: var(--ligh-color1);\n  font-family: "Epilogue";\n  font-weight: 800;\n  font-size: var(--small-l3);\n}\n\n.nav-item:hover {\n  color: var(--main-color3);\n}\n\n.home {\n  margin: var(--large-l3) auto 0 auto;\n  width: 80%;\n  max-width: 400px;\n  text-align: center;\n}\n\n.home-main-title {\n  color: var(--ligh-color1);\n  font-family: "Epilogue";\n  font-weight: 800;\n  font-size: var(--large-l1);\n  margin-bottom: var(--med-l1);\n}\n\n.home-secundary-title {\n  color: var(--main-color3);\n  font-family: "Epilogue";\n  font-weight: 400;\n  font-size: var(--med-l1);\n  margin-bottom: var(--large-l2);\n}\n\n.home-btn {\n  padding: var(--small-l2) var(--small-l2);\n  margin: 0 var(--med-l1);\n  font-family: "Epilogue";\n  font-weight: 800;\n  font-size: var(--small-l3);\n  text-align: center;\n  border-radius: calc((var(--small-l2) * 2 + var(--small-l3) + 6px) / 2);\n  outline: none;\n  border: none;\n}\n\n#book-now {\n  background-color: transparent;\n  border: 2px solid var(--main-color2);\n  color: var(--main-color3);\n}\n\n#view-menu {\n  background-color: var(--main-color2);\n  border: 2px solid var(--main-color2);\n  color: var(--ligh-color1);\n}\n\n#book-now:hover {\n  background-color: var(--main-color2);\n  border: 2px solid var(--main-color2);\n  color: var(--ligh-color1);\n}\n\n#view-menu:hover {\n  background-color: transparent;\n  border: 2px solid var(--main-color2);\n  color: var(--main-color3);\n}\n',""]);const E=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(r[l]=!0)}for(var i=0;i<n.length;i++){var c=[].concat(n[i]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function l(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function i(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],c=e.base?i[0]+e.base:i[0],d=t[c]||0,s="".concat(c," ").concat(d);t[c]=d+1;var u=l(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:s,updater:h(f,e),references:1}),o.push(s)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var l=r(n.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(e)}return e}var d,s=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=s(e,r);else{var a=document.createTextNode(r),l=n.childNodes;l[e]&&n.removeChild(l[e]),l.length?n.insertBefore(a,l[e]):n.appendChild(a)}}function f(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,p=0;function h(n,e){var t,o,r;if(e.singleton){var a=p++;t=m||(m=c(e)),o=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=c(e),o=f.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=i(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=l(t[o]);a[r].references--}for(var c=i(n,e),d=0;d<t.length;d++){var s=l(t[d]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=c}}}},198:(n,e,t)=>{n.exports=t.p+"12090e399832bcb8e688.woff"},925:(n,e,t)=>{n.exports=t.p+"7042176f60b752e12967.woff2"},592:(n,e,t)=>{n.exports=t.p+"7583ddf38607ebeec1e8.woff"},436:(n,e,t)=>{n.exports=t.p+"d6eeb98527e5f29258f5.woff2"},773:(n,e,t)=>{n.exports=t.p+"1cb931358b2e359736e1.woff"},843:(n,e,t)=>{n.exports=t.p+"ea112f242734f7b1ef5d.woff2"},225:(n,e,t)=>{n.exports=t.p+"90e601cee4babde4e6e1.jpg"}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),o=t(917);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=t(426);function a(n,e=[],t){let o=document.createElement("div"),r=document.createElement("span");return r.textContent=n,o.appendChild(r),0!==e.length&&o.classList.add(...e),o.id=t,o}function l(){let n=document.getElementById("content"),e=function(){let n=document.createElement("div"),e=document.createElement("p");e.textContent="ENJOY YOUR MEAL",e.classList.add("home-main-title");let t=document.createElement("p");t.textContent="Only the most fresh ingredients.",t.classList.add("home-secundary-title");let o=document.createElement("div");o.classList.add("home-btns-container");let r=document.createElement("button");r.textContent="BOOK NOW",r.classList.add("home-btn"),r.id="book-now";let a=document.createElement("button");return a.textContent="VIEW MENU",a.classList.add("home-btn"),a.id="view-menu",o.appendChild(r),o.appendChild(a),n.appendChild(e),n.appendChild(t),n.appendChild(o),n.id="pageContainer",n.classList.add("home"),n}();n.appendChild(e)}function i(){const n=document.getElementById("book-now"),e=document.getElementById("view-menu");n.addEventListener("click",(function(){c("contacts")})),e.addEventListener("click",(function(){c("menu")}))}function c(n){let e=document.getElementById("pageContainer");null!==e&&e.remove(),"home"===n?(l(),i()):"about"===n?alert("About"):"contacts"===n?alert("Contacts"):"gallery"===n?alert("Gallery"):"menu"===n&&alert("Menu")}e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,function(){let n=document.getElementById("content"),e=function(){let n=document.createElement("nav"),e=a("Joao Steak House",["nav-item"],"homeTab"),t=a("Contacts",["nav-item"],"contactsTab"),o=a("About",["nav-item"],"aboutTab"),r=a("Menu",["nav-item"],"menuTab"),l=a("Gallery",["nav-item"],"galleryTab");return n.appendChild(t),n.appendChild(o),n.appendChild(e),n.appendChild(r),n.appendChild(l),n.classList.add("nav-bar"),n}();n.appendChild(e)}(),function(){const n=document.getElementById("homeTab"),e=document.getElementById("aboutTab"),t=document.getElementById("contactsTab"),o=document.getElementById("menuTab"),r=document.getElementById("galleryTab");n.addEventListener("click",(function(){c("home")})),e.addEventListener("click",(function(){c("about")})),t.addEventListener("click",(function(){c("contacts")})),o.addEventListener("click",(function(){c("menu")})),r.addEventListener("click",(function(){c("gallery")}))}(),l(),i()})()})();
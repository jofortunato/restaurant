(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(645),a=t.n(o)()((function(n){return n[1]}));a.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const r=a},426:(n,e,t)=>{t.d(e,{Z:()=>E});var o=t(645),a=t.n(o),r=t(667),i=t.n(r),l=t(925),c=t(198),d=t(843),s=t(773),u=t(436),m=t(592),f=t(225),p=a()((function(n){return n[1]})),h=i()(l),g=i()(c),b=i()(d),v=i()(s),y=i()(u),x=i()(m),w=i()(f);p.push([n.id,'/* epilogue-200 - latin */\n@font-face {\n  font-family: "Epilogue";\n  font-style: normal;\n  font-weight: 200;\n  src: local(""), url('+h+') format("woff2"),\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\n      url('+g+') format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* epilogue-regular - latin */\n@font-face {\n  font-family: "Epilogue";\n  font-style: normal;\n  font-weight: 400;\n  src: local(""), url('+b+') format("woff2"),\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\n      url('+v+') format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* epilogue-800 - latin */\n@font-face {\n  font-family: "Epilogue";\n  font-style: normal;\n  font-weight: 800;\n  src: local(""), url('+y+') format("woff2"),\n    /* Chrome 26+, Opera 23+, Firefox 39+ */\n      url('+x+') format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n:root {\n  --main-color1: #394910;\n  --main-color2: #928e45;\n  --main-color3: #f5dc85;\n  --dark-color1: #1f1f1f;\n  --dark-color2: #272727;\n  --ligh-color1: #f7f7f7;\n\n  --small-l1: 6px;\n  --small-l2: 10px;\n  --small-l3: 14px;\n\n  --med-l1: 16px;\n  --med-l2: 22px;\n  --med-l3: 28px;\n\n  --large-l1: 40px;\n  --large-l2: 56px;\n  --large-l3: 72px;\n}\n\nbody {\n  background-image: url('+w+');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  overflow: auto; /*If problem happens try: scroll.*/\n}\n\n.nav-bar {\n  position: fixed;\n  width: 100vw;\n  top: 0%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  /*padding: var(--med-l3) var(--med-l3);*/\n  align-items: center;\n  height: var(--large-l3);\n  background-color: var(--main-color1);\n}\n\n#content {\n  padding-top: var(--large-l3);\n}\n\n.nav-item {\n  color: var(--ligh-color1);\n  font-family: "Epilogue";\n  font-weight: 800;\n  font-size: var(--small-l3);\n}\n\n.nav-item:hover {\n  color: var(--main-color3);\n}\n\n.home {\n  margin: var(--large-l3) auto 0 auto;\n  width: 80%;\n  max-width: 400px;\n  text-align: center;\n}\n\n.home-main-title {\n  color: var(--ligh-color1);\n  font-family: "Epilogue";\n  font-weight: 800;\n  font-size: var(--large-l1);\n  margin-bottom: var(--med-l1);\n}\n\n.home-secundary-title {\n  color: var(--main-color3);\n  font-family: "Epilogue";\n  font-weight: 400;\n  font-size: var(--med-l1);\n  margin-bottom: var(--large-l2);\n}\n\n.home-btn {\n  padding: var(--small-l2) var(--small-l2);\n  margin: 0 var(--med-l1);\n  font-family: "Epilogue";\n  font-weight: 800;\n  font-size: var(--small-l3);\n  text-align: center;\n  border-radius: calc((var(--small-l2) * 2 + var(--small-l3) + 6px) / 2);\n  outline: none;\n  border: none;\n}\n\n#book-now {\n  background-color: transparent;\n  border: 2px solid var(--main-color2);\n  color: var(--main-color3);\n}\n\n#view-menu {\n  background-color: var(--main-color2);\n  border: 2px solid var(--main-color2);\n  color: var(--ligh-color1);\n}\n\n#book-now:hover {\n  background-color: var(--main-color2);\n  border: 2px solid var(--main-color2);\n  color: var(--ligh-color1);\n}\n\n#view-menu:hover {\n  background-color: transparent;\n  border: 2px solid var(--main-color2);\n  color: var(--main-color3);\n}\n\n.about {\n  width: 80%;\n  max-width: 600px;\n  margin: var(--large-l3) auto 0 auto;\n  padding: var(--med-l3);\n  background-color: rgba(57, 73, 16, 0.5);\n  border-radius: var(--small-l2);\n  box-shadow: 8px 8px 8px 1px rgba(0, 0, 0, 0.4);\n}\n\n.about-main-title {\n  text-align: center;\n  color: var(--ligh-color1);\n  font-family: "Epilogue";\n  font-weight: 800;\n  font-size: var(--med-l3);\n  margin-bottom: var(--small-l3);\n}\n\n.about-text {\n  text-align: justify;\n  color: var(--main-color3);\n  font-family: "Epilogue";\n  font-weight: 400;\n  font-size: var(--med-l1);\n  line-height: var(--med-l2);\n}\n',""]);const E=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var o,a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function i(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},o=[],a=0;a<n.length;a++){var l=n[a],c=e.base?l[0]+e.base:l[0],d=t[c]||0,s="".concat(c," ").concat(d);t[c]=d+1;var u=i(s),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(r[u].references++,r[u].updater(m)):r.push({identifier:s,updater:h(m,e),references:1}),o.push(s)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,s=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=s(e,a);else{var r=document.createTextNode(a),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(r,i[e]):n.appendChild(r)}}function m(n,e,t){var o=t.css,a=t.media,r=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,p=0;function h(n,e){var t,o,a;if(e.singleton){var r=p++;t=f||(f=c(e)),o=u.bind(null,t,r,!1),a=u.bind(null,t,r,!0)}else t=c(e),o=m.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var a=i(t[o]);r[a].references--}for(var c=l(n,e),d=0;d<t.length;d++){var s=i(t[d]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}t=c}}}},198:(n,e,t)=>{n.exports=t.p+"12090e399832bcb8e688.woff"},925:(n,e,t)=>{n.exports=t.p+"7042176f60b752e12967.woff2"},592:(n,e,t)=>{n.exports=t.p+"7583ddf38607ebeec1e8.woff"},436:(n,e,t)=>{n.exports=t.p+"d6eeb98527e5f29258f5.woff2"},773:(n,e,t)=>{n.exports=t.p+"1cb931358b2e359736e1.woff"},843:(n,e,t)=>{n.exports=t.p+"ea112f242734f7b1ef5d.woff2"},225:(n,e,t)=>{n.exports=t.p+"90e601cee4babde4e6e1.jpg"}},e={};function t(o){if(e[o])return e[o].exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),o=t(917);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var a=t(426);function r(n,e=[],t){let o=document.createElement("div"),a=document.createElement("span");return a.textContent=n,o.appendChild(a),0!==e.length&&o.classList.add(...e),o.id=t,o}function i(){let n=document.getElementById("content"),e=function(){let n=document.createElement("div"),e=document.createElement("p");e.textContent="ENJOY YOUR MEAL",e.classList.add("home-main-title");let t=document.createElement("p");t.textContent="Only the most fresh ingredients.",t.classList.add("home-secundary-title");let o=document.createElement("div");o.classList.add("home-btns-container");let a=document.createElement("button");a.textContent="BOOK NOW",a.classList.add("home-btn"),a.id="book-now";let r=document.createElement("button");return r.textContent="VIEW MENU",r.classList.add("home-btn"),r.id="view-menu",o.appendChild(a),o.appendChild(r),n.appendChild(e),n.appendChild(t),n.appendChild(o),n.id="pageContainer",n.classList.add("home"),n}();n.appendChild(e)}function l(){const n=document.getElementById("book-now"),e=document.getElementById("view-menu");n.addEventListener("click",(function(){c("contacts")})),e.addEventListener("click",(function(){c("menu")}))}function c(n){let e=document.getElementById("pageContainer");null!==e&&e.remove(),"home"===n?(i(),l()):"about"===n?function(){let n=document.getElementById("content"),e=function(){let n=document.createElement("div"),e=document.createElement("h1");e.textContent="ABOUT",e.classList.add("about-main-title");let t=document.createElement("p");return t.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quidem non sint dolore ex ad commodi, repudiandae voluptatibus. Aliquid fugit doloribus error hic, nesciunt laborum nam dolore nostrum adipisci? Repudiandae amet aut, cupiditate nesciunt reiciendis, vero dolor, quisquam cum earum illum dolore mollitia? Numquam nostrum dolor nobis iusto, nam voluptatum tenetur nihil, nulla quo, suscipit fugit? Architecto recusandae sapiente aut placeat molestiae libero repudiandae eos consequatur itaque aperiam aspernatur, dolore deleniti magnam, adipisci doloremque facilis similique ab eveniet quod eligendi ipsam dignissimos nihil iste. Est obcaecati illum totam. Expedita, nemo. Facere doloribus, excepturi impedit unde ratione cumque repellendus voluptates exercitationem.",t.classList.add("about-text"),n.appendChild(e),n.appendChild(t),n.id="pageContainer",n.classList.add("about"),n}();n.appendChild(e)}():"contacts"===n?alert("Contacts"):"gallery"===n?alert("Gallery"):"menu"===n&&alert("Menu")}e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,function(){let n=document.getElementById("content"),e=function(){let n=document.createElement("nav"),e=r("Joao Steak House",["nav-item"],"homeTab"),t=r("Contacts",["nav-item"],"contactsTab"),o=r("About",["nav-item"],"aboutTab"),a=r("Menu",["nav-item"],"menuTab"),i=r("Gallery",["nav-item"],"galleryTab");return n.appendChild(t),n.appendChild(o),n.appendChild(e),n.appendChild(a),n.appendChild(i),n.classList.add("nav-bar"),n}();n.appendChild(e)}(),function(){const n=document.getElementById("homeTab"),e=document.getElementById("aboutTab"),t=document.getElementById("contactsTab"),o=document.getElementById("menuTab"),a=document.getElementById("galleryTab");n.addEventListener("click",(function(){c("home")})),e.addEventListener("click",(function(){c("about")})),t.addEventListener("click",(function(){c("contacts")})),o.addEventListener("click",(function(){c("menu")})),a.addEventListener("click",(function(){c("gallery")}))}(),i(),l()})()})();
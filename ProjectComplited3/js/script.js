window.onload=function(){function g(b){var a=this;a.btn=document.querySelector(b.btn);a.menuBody=document.querySelector(b.menuBody);a.blockBody=b.blockBody||!1;a.scroll=b.scroll||!1;if(a.scroll)for(a.fromEl=document.querySelectorAll(b.fromEl),a.toEl=document.querySelectorAll(b.toEl),b={$jscomp$loop$prop$i$5:0};b.$jscomp$loop$prop$i$5<a.fromEl.length;b={$jscomp$loop$prop$i$5:b.$jscomp$loop$prop$i$5},b.$jscomp$loop$prop$i$5++)a.fromEl[b.$jscomp$loop$prop$i$5].addEventListener("click",function(c){return function(e){a.toEl[c.$jscomp$loop$prop$i$5].scrollIntoView({behavior:"smooth",
block:"start"});a.removeBurger();e.preventDefault()}}(b));a.addBurger=function(){a.btn.classList.toggle("active");a.menuBody.classList.toggle("active");a.blockBody&&f.classList.toggle("overflow")};a.removeBurger=function(c){a.btn.classList.remove("active");a.menuBody.classList.remove("active");a.blockBody&&f.classList.remove("overflow")};a.btn.addEventListener("click",a.addBurger);a.menuBody.addEventListener("click",a.removeBurger)}function h(b){var a=this;a.btn=document.querySelector(b.btn);a.modal=
document.querySelector(b.modal);a.close=document.querySelector(b.close);a.btnSeacrh=document.querySelector(b.btnSeacrh);a.input=document.querySelectorAll(b.input);a.addClass=b.addClass;a.show=function(){a.modal.classList.add(a.addClass);a.close.classList.add(a.addClass);f.classList.add("overflow")};a.hide=function(){a.modal.classList.remove(a.addClass);a.close.classList.remove(a.addClass);f.classList.remove("overflow")};a.btn.addEventListener("click",a.show);a.close.addEventListener("click",a.hide);
a.seacrh=function(c){for(var e=!1,d=0;d<a.input.length;d++)""==a.input[d].value?(a.input[d].classList.add("err"),e=!0):a.input[d].classList.remove("err");c.preventDefault();if(e)return!1;for(c=0;c<a.input.length;c++)a.input[c].value="";alert("\u0417\u0430\u043f\u0440\u043e\u0441...")};a.btnSeacrh.addEventListener("click",a.seacrh)}function k(b){this.btn=document.querySelector(b.btn);this.btn.addEventListener("click",function(a){alert("\u0417\u0430\u043f\u0440\u043e\u0441...");a.preventDefault()})}
var l=document.getElementById("scene");new Parallax(l);var f=document.querySelector("body"),m=document.querySelector(".popup-conteiner");new function(b){var a=this;a.btn=document.querySelectorAll(b.btn);a.works=document.querySelectorAll(b.works);for(b={$jscomp$loop$prop$i$3:0};b.$jscomp$loop$prop$i$3<a.btn.length;b={$jscomp$loop$prop$i$3:b.$jscomp$loop$prop$i$3},b.$jscomp$loop$prop$i$3++)a.btn[b.$jscomp$loop$prop$i$3].addEventListener("click",function(c){return function(e){for(var d=0;d<a.works.length;d++)a.btn[d].classList.remove("active"),
a.works[d].classList.remove("active");a.works[c.$jscomp$loop$prop$i$3].classList.add("active");a.btn[c.$jscomp$loop$prop$i$3].classList.add("active");e.preventDefault()}}(b))}({btn:".main__menu .menu__list .menu__link",works:".portfolio .works .work-conteiner"});new g({btn:".header__menu .menu__icon",menuBody:".header__menu .menu__body",blockBody:!0,scroll:!0,fromEl:".header__menu .menu__link",toEl:".scroll"});new g({btn:".main__menu .menu__icon",menuBody:".main__menu .menu__body",scroll:!0,fromEl:".footer__conteiner .menu__logo .menu__link",
toEl:".up"});1024<this.innerWidth&&setTimeout(function(){m.classList.add("active")},3E3);new h({btn:".search__acc .search",modal:".search__modal",addClass:"active",btnSeacrh:".search__modal .search-content .search-icon button",input:".search__modal .search-content .search-input input",close:".close"});new h({btn:".search__acc .account",modal:".account__modal",addClass:"active",btnSeacrh:'.account__modal .account-content form .submit input[type="submit"]',input:"form .search-input input",close:".close"});
new k({btn:".decription .decription-link .link-detailde"});new k({btn:".decription .decription-link .link-document"})};

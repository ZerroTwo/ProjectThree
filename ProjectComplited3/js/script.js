window.onload = function() {
  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);
	const body = document.querySelector('body');
	const popupConteiner = document.querySelector('.popup-conteiner');
new ShowWorks({
	btn:".main__menu .menu__list .menu__link",
	works:".portfolio .works .work-conteiner",
});
function ShowWorks(propos){
	let that = this;
	that.btn = document.querySelectorAll(propos.btn);
	that.works = document.querySelectorAll(propos.works);
	for(let i = 0 ; i < that.btn.length ; i++){
		that.btn[i].addEventListener('click', function(event) {
			for(let i = 0 ; i < that.works.length ; i++){
				that.btn[i].classList.remove('active');
				that.works[i].classList.remove('active');
			}
			that.works[i].classList.add('active');
			that.btn[i].classList.add('active');
			event.preventDefault();
		});};};
new MenuBurger({
	btn:".header__menu .menu__icon",
	menuBody:".header__menu .menu__body",
	blockBody: true,
	scroll: true,
	fromEl:".header__menu .menu__link",
	toEl: ".scroll",													
});
new MenuBurger({
	btn:".main__menu .menu__icon",
	menuBody:".main__menu .menu__body",
	scroll: true,
	fromEl:".footer__conteiner .menu__logo .menu__link",
	toEl: ".up",
});
function MenuBurger(propos){
	let that = this;
	that.btn = document.querySelector(propos.btn);
	that.menuBody = document.querySelector(propos.menuBody);
	that.blockBody = propos.blockBody || false;
	that.scroll = propos.scroll || false;
if (that.scroll){
	that.fromEl = document.querySelectorAll(propos.fromEl);
	that.toEl = document.querySelectorAll(propos.toEl);
	for(let i = 0 ; i < that.fromEl.length ; i++){
		that.fromEl[i].addEventListener('click' , function(event){
			that.toEl[i].scrollIntoView({behavior: "smooth" , block: "start"});
			that.removeBurger();
			event.preventDefault();
		});};};
		that.addBurger = function (){
				that.btn.classList.toggle('active');
				that.menuBody.classList.toggle('active');
				if(that.blockBody){
					body.classList.toggle('overflow');
				};};
		that.removeBurger = function (event){
				that.btn.classList.remove('active');
				that.menuBody.classList.remove('active');
				if(that.blockBody){
					body.classList.remove('overflow');
				};};
	that.btn.addEventListener('click' , that.addBurger);
	that.menuBody.addEventListener('click' ,	that.removeBurger );};
if(this.innerWidth > 1024){
		setTimeout(popupTimer , 3000);		
		function popupTimer(){
			popupConteiner.classList.add('active');
		};};
		new ShowAccSearch({
			btn: ".search__acc .search",
			modal: ".search__modal",
			addClass:"active",							//Класс для показа и скрытия для modal and close
			btnSeacrh:".search__modal .search-content .search-icon button",
			input:".search__modal .search-content .search-input input",
			close:".close",
});
		new ShowAccSearch({
			btn: ".search__acc .account",
			modal: ".account__modal",
			addClass:"active",							//Класс для показа и скрытия для modal and close
			btnSeacrh:'.account__modal .account-content form .submit input[type="submit"]',
			input:"form .search-input input",
			close:".close",						
});
		function ShowAccSearch(propos){
			let that = this;
			that.btn = document.querySelector(propos.btn);
			that.modal = document.querySelector(propos.modal);
			that.close = document.querySelector(propos.close);
			that.btnSeacrh = document.querySelector(propos.btnSeacrh);
			that.input = document.querySelectorAll(propos.input);
			that.addClass = propos.addClass;
			that.show = function(){
				that.modal.classList.add(that.addClass);
				that.close.classList.add(that.addClass);
				body.classList.add('overflow');
			};
			that.hide = function(){
				that.modal.classList.remove(that.addClass);
				that.close.classList.remove(that.addClass);
				body.classList.remove('overflow');
			};
			that.btn.addEventListener('click', that.show);
			that.close.addEventListener('click', that.hide);
			that.seacrh = function(e){
				let errors = false;
					for(let i = 0 ; i < that.input.length ; i++){
						if(that.input[i].value == ''){
							that.input[i].classList.add('err');
							errors = true;
						} else {
							that.input[i].classList.remove('err');
						};
					};
					e.preventDefault();	
						if(errors){
								errors = false;
								return false;
						};
					for(let i = 0 ; i < that.input.length ; i++){
						that.input[i].value = '';
					};
					alert('Запрос...');		

			};
			that.btnSeacrh.addEventListener('click' , that.seacrh);
		};		
	new Reques({
		btn:'.decription .decription-link .link-detailde',
	});
	new Reques({
		btn:'.decription .decription-link .link-document',
	});
	function Reques(propos){
		let that = this;
		that.btn = document.querySelector(propos.btn);
		that.btn.addEventListener('click', function(e){
			alert('Запрос...');
			e.preventDefault();
		});};};

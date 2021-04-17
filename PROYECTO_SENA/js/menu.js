let logo = document.getElementById('btnmenu');
let lista = document.getElementById('menu');

logo.addEventListener('click', function(){
	'use strict';
	lista.classList.toggle('mostrar');
});
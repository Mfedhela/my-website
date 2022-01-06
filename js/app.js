let menu = document.querySelector('.menu');
menu.addEventListener('click', function(){
				let nav = document.querySelector('.nav');
				if (nav.classList.contains('nav')) {
								
								nav.classList.add('nav-full');
				}else{
				
								nav.classList.remove('nav-full');
								
				}
});
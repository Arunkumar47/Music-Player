
$(document).ready(function(){

	count = 0;

	$('.wrapper').click(function(){

		// var $this = $(this);
		var audio = $('.wrapper').siblings('audio')[count];	

		if (audio.paused === false) {
			audio.pause();
			$('.wrapper').removeClass('playing');
		}else{
			audio.play();
			$('.wrapper').addClass('playing');
		}

	});


	$('.next').click(function(){

		audio = $('.wrapper').siblings('audio')[count++];	

		if (count === 1){
			var audio = $('.wrapper').siblings('audio')[count];
			audio.load();
		}else if (count === 2) {
			var audio = $('.wrapper').siblings('audio')[count];
			audio.load();
		}else {
			var audio = $('.wrapper').siblings('audio')[count];
			audio.load();
		}

		if (audio.paused === false) {
			audio.pause();
			$('.wrapper').removeClass('playing');
		}else{
			audio.play();
			$('.wrapper').addClass('playing');
		}	
	});

	$('.back').click(function(){

		audio = $('.wrapper').siblings('audio')[count--];	

		if (count === 1){
			var audio = $('.wrapper').siblings('audio')[count];
		}else if (count === 2) {
			var audio = $('.wrapper').siblings('audio')[count];
		}else {
			var audio = $('.wrapper').siblings('audio')[count];
		}

		if (audio.paused === false) {
			audio.pause();
			$('.wrapper').removeClass('playing');
		}else{
			audio.play();
			$('.wrapper').addClass('playing');
		}	
	});




});

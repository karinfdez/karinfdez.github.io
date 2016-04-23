$( document ).ready(function() {
	$('#carousel').carousel({
     interval: false

    });
	$(".rectangle").hide();
	
	$('.slide-menu').click(function(){
	    $('.rectangle').animate({width: 'toggle'});
	    // $('.rectangle').show('5000');
	});

		$('.close').click(function(){
	    // $('.rectangle').hide('5000');
	    $(".rectangle").animate({width:'toggle'},350);
	});

	
});
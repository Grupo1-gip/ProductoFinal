$(function(){
	

	$("#fadeTo").click(function(){
		$("iframe").fadeTo(2000,0.2)
	});
	//Deslizamiento
	$("#ocultar").click(function(){
		$("iframe").slideUp("slow");
	});
	$("#mostrar").click(function(){
		$("iframe").slideDown("slow");
	});


});


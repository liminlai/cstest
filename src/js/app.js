$(function() {
    $('#toggle').click(function(){
        $("#menu").toggleClass("on"); 
    });
 
	$(window).resize(function() {
		if ($(window).width() > 768) { 
	    	$("#menu").addClass( "on" );
		}  
		else {
	    	$("#menu").removeClass( "on" );
		}
	});
	if ($(window).width() <= 768) { 
    	$("#menu").removeClass( "on" );
	}  
}); 
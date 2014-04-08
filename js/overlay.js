(function ( $ ) {
 
    $.fn.modalise = function( options ) {

        $('body').append('<div class="overlay modal-close hide"></div>');

        $('.modal-close').on('click',function(){
            $('.overlay').toggleClass("hide");
            $('.overlay-message').addClass("hide");
            console.log('click');     
        });

    	// // Parameters for the plugin
    	// var settings = $.extend({
    	// 	//default options - extend function allows us to override these with the options parameter.
    	// 	color: "#556b2f",
    	// 	backgroundColor: "white"
    	// }, options );
        
        return this.each(function(index){
        	var t = $(this);
        	t.on('click',function(){
                var target = $(this).attr('data-target');
                $('#' + target + ', .overlay').toggleClass("hide");
                console.log(target);
            });

        });

    };
 
}( jQuery ));




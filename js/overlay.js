(function ( $ ) {
 
    $.fn.modalise = function( options ) {

        // Add and initialise the overlay background 
        $('body').append('<div class="overlay modal-close hide"></div>').find('.overlay.modal-close').on('click',function(){
            $(this).toggleClass("hide");
            $('.overlay-message').addClass("hide");   
        });

    	// Options for the plugin
    	var settings = $.extend({
    		// Default options
    		width: "700px",
            closeButton: true
    	}, options );
        
        return this.each(function(index){
            // Dom elements
        	var openButton = $(this),
                targetSelector = '#' + $(this).attr('data-target');

            // Add and initiate close button
            if(settings.closeButton){
                $(targetSelector).prepend('<a href="#" class="modal-close btn">X</a>').find('.modal-close').on('click',function(){
                    $('.overlay').addClass("hide");
                    $('.overlay-message').addClass("hide"); 
                });
            }

            // Show the relevant modal window on clicking the open button
        	openButton.on('click',function(){
                var targetSelector = '#' + $(this).attr('data-target');
                $(targetSelector + ', .overlay').toggleClass("hide");
            });

        });

    };
 
}( jQuery ));




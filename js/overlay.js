$( document ).ready(function() {
    $('body').append($('<div>',{
        class:'overlay modal-close hide'
    }));

    $('.modal-close, .modal-open').on('click',function(){
		$('.overlay').toggleClass("hide");
		$('.overlay-message').toggleClass("hide");		
    });
});

// $.fn.greenify = function() {
//     this.css( "color", "green" );
//     return this;
// };

// (function ( $ ) {
 
//     var shade = "#556b2f";
 
//     $.fn.greenify = function() {
//         this.css( "color", shade );
//         return this;
//     };
 
// }( jQuery ));

(function ( $ ) {
 
    $.fn.greenify = function( options ) {

    	// Parameters for the plugin
    	var settings = $.extend({
    		//default options - extend function allows us to override these with the options parameter.
    		color: "#556b2f",
    		backgroundColor: "white"
    	}, options );
        
        return this.each(function(index){
        	var t = $(this);
        	t.append(index);
        	t.css( "color", settings.color );
        });

    };
 
}( jQuery ));

$( "h1" ).greenify(); 
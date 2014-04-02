// $( document ).ready(function() {
//     $('body').append($('<div>',{
//         class:'overlay modal-close hide'
//     }));

//     $('.modal-open').on('click',function(){
//         var target = $(this).attr('data-target');
//         $('#' + target + ', .overlay').toggleClass("hide");

//         console.log(target);
//     });

//     $('.modal-close').on('click',function(){
// 		$('.overlay').toggleClass("hide");
// 		$('.overlay-message').addClass("hide");		
//     });
// });

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
 
    $.fn.modalise = function( options ) {

        $('body').append($('<div>',{
            class:'overlay modal-close hide'
        }));

        $('.modal-close').on('click',function(){
            $('.overlay').toggleClass("hide");
            $('.overlay-message').addClass("hide");     
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

$( ".modal-open" ).modalise(); 




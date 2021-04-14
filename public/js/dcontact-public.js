(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	
	 console.log("in javascript");
	 jQuery("#dcontact-submit").on("click",function(event){
		 console.log("form submit");
		 event.preventDefault();
		 var name = jQuery("#name");
		 var email = jQuery("#email");
		 var subject = jQuery("#subject");
		 var message = jQuery("#message");
 
		 if(name.val() == ""){
			 
			 name.next().show();
		 }else if(email.val() == "" || !email.val().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
			 console.log(email.val());
			 email.next().show();
		 }else if(subject.val() == ""){
			 subject.next().show();
		 }else if(message.val() == ""){
			 message.next().show();
		 }else{
			 name.next().hide();
			 email.next().hide();
			 subject.next().hide();
			 message.next().hide();
			 console.log("form valid");
			 jQuery.ajax({
				 url: ajax_object.ajax_url,
				 type: "post",
				 data: {action: 'submit_form',name: name, email: email, subject: subject, message: message},
				 success: function(data){
					 console.log(data);
				 },
				 error: function(data){
					 console.log(data);
				 }
			 });
		 }
 
	 });
	
})( jQuery );

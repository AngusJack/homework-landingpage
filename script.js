// Testing that js working: alert("Hello! I am an alert box!!"); YAY, it is!

//delay code until DOM has loaded
$(document).ready(function(){


//add in the 'boilerplate' js to stop default anchor behaviour 
$('a[href="#"]' ).click(function(e){
	e.preventDefault();

});

//target DOM elements with CSS selectors 
	
	///on click of 'Read More'
	$('.readmore').on('click', function(){
	
		///display para by sliding down content - target the specific ID in the HTML
		$('#show-this-on-click').slideDown();
	
		///display a 'Read Less' link
		$('.readless').show();
	
		///hide the 'Read More' link'
		$('.readmore').hide();

	});
	///on click of 'Read Less'
	$('.readless').on('click', function(){
		
		///slide the para up
		$('#show-this-on-click').slideUp();
		
		///hide the 'Read Less' link
		$('.readless').hide();
		
		///display the 'Read More' link
		$('.readmore').show();	
	});
	
	//on click of the 'Learn More' link in the sidebar
	$('.learnmore').on('click', function(){

		///slide down span inside the p tag
	$('#learnmoretext').slideDown();

	///hide the 'Learn More' link
		$('.learnmore').hide();

	});

});
	

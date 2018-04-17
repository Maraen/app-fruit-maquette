// on.click , closest , slideToggle , toggleClass, removeClass , addClass

$(document).ready(function () {
	// Creation of an accordion
	$(".div-folded").click(function(){
		var $divf = $(this);

		$divf.siblings().removeClass("active"); // When clicking another div will remove the active class of the other div
		$divf.siblings().find(".description").slideUp("slow");// if you click on another div will make the content slide back up
		
		$divf.toggleClass("active"); // on clicking the div will add or remove (toggle) the 'active' class
		$divf.find(".description").slideToggle("slow"); // on clicking will make the content slide down

		$divf.siblings().find(".x-cross").removeClass("active"); // preventing all but the one cross you clicked from triggering the animation.
    	$divf.find(".x-cross").toggleClass('active'); // toggle the active animation on the cross, creating the animation
	});
});
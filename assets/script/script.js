// on.click , closest , slideToggle , toggleClass, removeClass , addClass

$(document).ready(function () {
	$(".div-folded").click(function(){
		var that = $(this);

		that.siblings().removeClass("active");
		that.siblings().find(".description").slideUp("slow");
		
		that.toggleClass("active");
		that.find(".description").slideToggle("slow");
		
	})
		
	
});
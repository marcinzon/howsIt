$(document).ready( function(){

console.log("ready!");

var answerArray= [];
var tempAnswer;

$('.answerBox').click(function(event) {

	$(this).parents().next('.qNext').removeClass('hidden');
	
	if($(this).siblings().hasClass('selected')){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
	}
	else{
		$(this).addClass('selected');
	}

		tempAnswer = event.target.id;
		$('#temp').remove();
		$('.testing').append("<span id="+"temp"+"><p>tempAnswer = "+tempAnswer+"</p></span>");

});

// SCROLL ANIMATION
$('.qNext').click(function() {

		answerArray.push(tempAnswer);

		$('#tempArr').remove();
		$('.testing').append("<span id="+"tempArr"+"><p>answerArray contents = "+answerArray+"</p></span>");

		$(this).parent().next().removeClass('hidden');
	    $('html, body').animate({
        scrollTop: $(this).parent().next().offset().top
    }, 500);
});



$(".redo").click(function() {
	$('#results').addClass('hidden');
    $('html, body').animate({
        scrollTop: $("#survey").offset().top
    }, 2000);
});

function scrollReveal(){

}



});
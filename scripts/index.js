$(document).ready( function(){

$('html, body').animate({scrollTop: $('#landing').offset().top}, 300);

console.log("ready!");

var answerArray= [];
var tempAnswer;
var parentID;



$('#beginBut').click(function(event) {
		$('#survey').removeClass('hidden');
		$('#footer').addClass('hidden');
	    $('html, body').animate({
        scrollTop: $('#survey').offset().top
    }, 800);


});

$('.answerBox').click(function(event) {

	parentID = $(this).closest('.questionPage').prop('id');
	testParent(parentID);

	fluff =  $(this).attr('class').split(' ')[1];

	$(this).parents().next('.qNext').removeClass('hidden');
	
	if($(this).siblings().hasClass('selected') && $('.'+fluff+'t').siblings().hasClass('active')){
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		$('.'+fluff+'t').siblings().removeClass('active');
		$('.'+fluff+'t').siblings().addClass('hidden');
		$('.'+fluff+'t').removeClass('hidden');
		$('.'+fluff+'t').addClass('active');
		console.log("first");


	}
	else{
		$(this).addClass('selected');
		$('.'+fluff+'t').removeClass('hidden');
		$('.'+fluff+'t').addClass('active');
	}

		tempAnswer = event.target.id;
		$('#temp').remove();
		$('.testing').append("<span id="+"temp"+"><p>tempAnswer = "+tempAnswer+"</p></span>");

});

$('#showResults').click(function(event) {

	$('#results').removeClass('hidden');
	$('html, body').animate({scrollTop: $('#results').offset().top}, 500);


});

// SCROLL ANIMATION
$('.qNext').click(function() {
	$('.testing').append(parentID);

	if(parentID=='Question5'){
		answerArray.push(tempAnswer);
		$('#preResults').removeClass('hidden');
		$(this).parent().slideUp(500);
		$('html, body').animate({scrollTop: $('#preResults').offset().top}, 500);
		$('#tempArr').remove();
		$('.testing').append("<span id="+"tempArr"+"><p>DONE - answerArray contents = "+answerArray+"</p></span>");
		

	}
	else{
		answerArray.push(tempAnswer);

		$('#tempArr').remove();
		$('.testing').append("<span id="+"tempArr"+"><p>answerArray contents = "+answerArray+"</p></span>");

		$(this).parent().next().removeClass('hidden');

	    $(this).parent().slideUp(500);
	    $('html, body').animate({scrollTop: $('#survey').offset().top}, 300);
	}

});



$(".redo").click(function() {
	$('#results').addClass('hidden');
	// $('#Question1').removeClass('hidden');
    $('html, body').animate({
        scrollTop: $("#landing").offset().top
    }, 2000);
});

function testParent(parentID){

	if(parentID=='Question1'){
		$('#aboutFluff').remove();
		$('#about').append("<span id="+"aboutFluff"+"><p> You just started, go back down there </p></span>");

	}
	else if(parentID=='Question5'){
		$('#aboutFluff').remove();
		$('#about').append("<span id="+"aboutFluff"+"><p> Why are you scrolling up now? You're almost finished! </p></span>");
	}
	else{
		$('#aboutFluff').remove();
		$('#about').append("<span id="+"aboutFluff"+"><p> Seriously, stop scrolling up here </p></span>");
	}
	
	
}

});
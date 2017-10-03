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

});

$('#showResults').click(function(event) {

	$('#results').removeClass('hidden');
	$('html, body').animate({scrollTop: $('#results').offset().top}, 500);
	$('#showResults').addClass('hidden');


});

// SCROLL ANIMATION
$('.qNext').click(function() {
	$('.testing').append(parentID);

	if(parentID=='Question5'){
		answerArray.push(tempAnswer);
		$('#preResults').removeClass('hidden');
		$(this).parent().slideUp(500);
		$('html, body').animate({scrollTop: $('#preResults').offset().top}, 500);
		

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

$('.return').click(function(event) {
	$('html, body').animate({scrollTop: $('#landing').offset().top}, 800);
	$('.landingContainer').remove();
	$('#landing').append("<div class="+"landingContainer"+"><h1 id="+"landingH1"+">WAS IT REALLY <br>THAT BAD?</h1><p><span>Give it another go</span></p></div>");
	$('#preResults').addClass('hidden');
	$('#beginBut').addClass('hidden');
	$('#beginButAgain').removeClass('hidden');

});
$('#beginButAgain').click(function(event) {
	location.reload();
});


});
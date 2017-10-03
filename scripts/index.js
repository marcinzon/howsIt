$(".reveal").click(function() {

	$(this).parent().next().removeClass('hidden');
});

$(".redo").click(function() {
	$('#results').addClass('hidden');
    $('html, body').animate({
        scrollTop: $("#survey").offset().top
    }, 2000);
});

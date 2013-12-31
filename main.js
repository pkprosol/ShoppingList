$(document).ready(function() {
	$('button[name=submit]').click(function() {
		var userInputValue = $('input[name=userInput]').val();
		$('.list').append('<div class="openItem">' + userInputValue + '</div>');
	});
	$(document).on('click','.openItem',function() {
        $(this).remove();
    });
});

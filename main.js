$(document).ready(function() {
	$('button[name=submit]').click(function() {
		var userInputValue = $('input[name=userInput]').val();
		$('.list').append('<div class="openItem"><ul><li>' + userInputValue + '</li></ul></div>');
	});
	$(document).on('click','.openItem',function() {
        $(this).remove();
    });
});

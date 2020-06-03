
$('.modal-close').click(function() {
    $(this).parents('.modal').removeClass('is-active');
});

$('#zipButton').click(function() {
    $('#zipModal').addClass('is-active');
});

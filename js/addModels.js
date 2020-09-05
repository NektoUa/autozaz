jQuery(document).ready(function () {
    $(function () {
        $('.model-link').on('click', function () {
            $('#models-sub-menu').slideToggle(400);
            var txt = $('.expand').text()
            if (txt == 'expand_more') {
                $('.expand').text('expand_less')
            } else {
                $('.expand').text('expand_more')
            }
        });
    });
});



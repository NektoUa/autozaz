jQuery(document).ready(function () {
    $(function () {
        $(function () {
            $('.model-link').on('click', function () {
                $('#models-sub-menu').toggle(function () {
                    if (window.scrollY > 0) {
                        $('#models-sub-menu').css({ 'display': 'none' })
                    }
                });
            });
        });
    });
    // $('.model-wrapper').mouseover(function () {
    // $('figcaption').removeClass('.title')
    //  => detail
    // alert('ffffdf')
    // })
});



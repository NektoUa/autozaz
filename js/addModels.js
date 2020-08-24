// jQuery(document).ready(function () {
//     let title = "Моделі";
//     let link_per_mobile = "#";

//     let link = "#";
//     let int_menu_mobile = 0
//     let add_models = `<li class='model-link has-dropdown hide-for-mobile menu-item menu-item-type-custom menu-item-object-custom'><a href='${link}'>${title}</a></li>`;
//     let strClass = 'top-bar-menu.left';

//     if (int_menu_mobile == 1) {
//         link = link_per_mobile
//         add_models = `<li class='menu-mobile-link menu-item menu-item-type-post_type menu-item-object-page'><a href='${link}'>${title}</a></li>";
//         strClass = "off-canvas-list`;

//     }


//     jQuery("." + strClass).prepend(add_models);

// });


$(function () {
    $(function () {
        $('.model-link').on('click', function () {
            console.log('fff')
            $('.models-sub-menu').css({ "display": "block" })
            // $(this).closest('.menu').toggleClass('menu-open');
        });
    });
});



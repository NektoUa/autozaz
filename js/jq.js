jQuery(document).ready(function () {
    let title = "Моделі";
    let link_per_mobile = "#";

    let link = "#";
    let int_menu_mobile = 0
    let str_html_li_da_inserire = "<li class='divider'></li><li class='model-link has-dropdown hide-for-mobile menu-item menu-item-type-custom menu-item-object-custom'><a href='" + link + "'>" + title + "</a></li>";
    let str_classe_ul_target = "top-bar-menu.left";

    if (int_menu_mobile == 1) {
        link = link_per_mobile
        str_html_li_da_inserire = "<li class='menu-mobile-link menu-item menu-item-type-post_type menu-item-object-page'><a href='" + link + "'>" + title + "</a></li>";
        str_classe_ul_target = "off-canvas-list";

    }


    jQuery("." + str_classe_ul_target).prepend(str_html_li_da_inserire);

});

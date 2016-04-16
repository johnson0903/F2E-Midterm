var main = function() {

    $('.map_info').click(function() {
        $('.active-map_info_pop_up').fadeOut(0).removeClass('active-map_info_pop_up');
    });

    $('#place1').click(function() {
        $('#place1').find("div").fadeIn(200).addClass('active-map_info_pop_up');
    });

    $('#place2').click(function() {
        $('#place2').find("div").fadeIn(200).addClass('active-map_info_pop_up');
    });

}


$(document).ready(main);

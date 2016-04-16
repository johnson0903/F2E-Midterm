var main = function() {
  $('.map_info').click(function() {
    $('.map_info_pop_up').fadeIn(600).addClass('active-map_info_pop_up');
  });
}

$(document).ready(main);

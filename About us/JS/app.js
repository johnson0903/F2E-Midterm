var main = function() {
  $('#menu_Home').click(function() {
    $('#map_info').fadeIn(500);
  });

  $('#menu_AboutUs').click(function() {
    $('#map_info').fadeOut(500);
  });
}

$(document).ready(main);

$("#menu-toggle").click(function (e) {
  e.stopPropagation(); // prevents executing the above event
  e.preventDefault();

  $("#wrapper").toggleClass("toggled");
});

$(document).click(function (e) {
  var $target = $(e.target);

  //checking to see if the ancestor of the clicked element is the wrapper 
  if (!$target.closest('#wrapper').length && !$('#wrapper').hasClass('toggled')) {

    $('#wrapper').toggleClass('toggled');
    e.stopPropagation();
    e.preventDefault();
  }
});
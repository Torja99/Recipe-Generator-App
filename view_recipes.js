$(document).ready(function () {
  //delete all functionality 
  $(document).on("click", ".show-alert", function (e) {
    bootbox.confirm({
      message: "Do you wish to permanently delete all recipes (even those that may not be on screen)",
      buttons: {
        confirm: {
          label: 'Yes',
          className: 'btn-success',
        },
        cancel: {
          label: 'No',
          className: 'btn-danger'
        }
      },
      callback: function (result) {
        if (result) {
          $(".grid").empty();
        }
      }
    });
  });

  //filter - changing what is displayed based on range selected
  const $valueSpan = $('.valueSpan2');
  const $value = $('#customRange11');
  $valueSpan.html($value.val());
  $value.on('input change', () => {
    $valueSpan.html($value.val());
  });


  //initialize isotope with masonry layout 
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    masonry: {
      gutter: 25
    }
  });

  //allows changes in date to cook to be reflected in tile view
  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  $("#card1").on("change", function () {
    var selected = $(this).val();
    var d = new Date(selected);
    var n = month[d.getUTCMonth()];
    day = (d.getUTCDate());
    $('.month1').text(n);
    $('.day1').text(day);
  });

  $("#card2").on("change", function () {
    var selected = $(this).val();
    var d = new Date(selected);
    var n = month[d.getUTCMonth()];
    day = (d.getUTCDate());
    $('.month2').text(n);
    $('.day2').text(day);
  });

  $("#card3").on("change", function () {
    var selected = $(this).val();
    var d = new Date(selected);
    var n = month[d.getUTCMonth()];
    day = (d.getUTCDate());
    $('.month3').text(n);
    $('.day3').text(day);
  });

  $("#card4").on("change", function () {
    var selected = $(this).val();
    var d = new Date(selected);
    var n = month[d.getUTCMonth()];
    day = (d.getUTCDate());
    $('.month4').text(n);
    $('.day4').text(day);
  });

  $("#card5").on("change", function () {
    var selected = $(this).val();
    var d = new Date(selected);
    var n = month[d.getUTCMonth()];
    day = (d.getUTCDate());
    $('.month5').text(n);
    $('.day5').text(day);
  });

  $("#card6").on("change", function () {
    var selected = $(this).val();
    var d = new Date(selected);
    var n = month[d.getUTCMonth()];
    day = (d.getUTCDate());
    $('.month6').text(n);
    $('.day6').text(day);
  });

  //apply filter settings through isotope filter 
  $('#aSet').on('click', function () {

    var filter1 = '';
    if ($('#time1').prop('checked')) {
      filter1 += ',[data-time=short]';
    }
    if ($('#time2').prop('checked')) {
      filter1 += ',[data-time=med]';
    }
    if ($('#time3').prop('checked')) {
      filter1 += ',[data-time=long]';
    }
    //if none are checked filter for all
    if (!($('#time3').prop('checked')) && !($('#time2').prop('checked')) && !($('#time1').prop('checked'))) {
      filter1 += '*';
    }

    //get rid of first comma
    if (filter1.charAt(0) === ',') {
      filter1 = filter1.substring(1);
    }

    $grid.isotope({
      filter: filter1
    });

  });

  //reset filter settlings  
  $('#resBut').on('click', function () {
    $('#time1').prop("checked", false);
    $('#time2').prop("checked", false);
    $('#time3').prop("checked", false);
    $grid.isotope({ filter: '*' });
  });

  //search bar filtering
  $('.sName').keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      var filterValue = $(".sName").val().toLowerCase();
      $grid.isotope({ filter: '[data-name*=' + filterValue + ']' });
      $(".sName").val("");
    }
  });

  //refresh search 
  $(".fa-refresh").click(function () {
    $grid.isotope({ filter: '*' });
  });

  //delete a tile
  $('.close-icon').on('click', function (e) {
    x = $(this).parents('.grid-item');
    $grid.isotope('remove', x)
      .isotope('layout');
    //stop propagation so  click is not registered as a click on the tile
    e.stopPropagation();
  });
});
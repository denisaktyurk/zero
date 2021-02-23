// Main page slick slider config 

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    infinite: false
  });

$(".dropdown-title").click(function() {
  $(this).siblings('.dropdown-text').toggle();
  if($(this).siblings('.dropdown-text').css('display') == 'block') {
    $(this).css('background-color', '#264416').css('color', 'white');
  } else {
    $(this).css('background-color', '').css('color', '');
  }
});
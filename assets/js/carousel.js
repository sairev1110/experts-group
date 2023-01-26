$('.textswiper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  // fade: true,
  adaptiveHeight: true,
  asNavFor: '.thumbswiper'
});
$('.thumbswiper').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerPadding: '10px',
  asNavFor: '.textswiper',
  centerMode: true,
  dots: false,
  focusOnSelect: true,
  prevArrow: $('.swiper-button-prev'),
  nextArrow: $('.swiper-button-next'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
$(document).ready(function () {

  $('.menu').click(() => {
    $('header, .menu').toggleClass('active');
  });

  $('header').click(() => {
    $('header, .menu').toggleClass('active');
  })

  $('.slider-iphone').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
  });

  $('.services-slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: 0,
        }
      },
    ]
  });

  $('.team-slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          infinite: false,
          dots: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: 0,
        }
      },
    ]
  });

  new Waypoint({
    element: document.querySelector('.wr-intro'),
    handler(direction) {
      $(this.element)
        .addClass('fade-in')
        .removeClass('hidden');
    },
    offset: '50%',
  });

  new Waypoint({
    element: document.querySelector('.wr-features'),
    handler(direction) {
      $(this.element)
        .addClass('fade-in')
        .removeClass('hidden');
    },
    offset: '50%',
  });

  new Waypoint({
    element: document.querySelector('.wr-advantages'),
    handler(direction) {
      $(this.element)
        .addClass('fade-in')
        .removeClass('hidden');
    },
    offset: '50%',
  });

  new Waypoint({
    element: document.querySelector('.wr-quote'),
    handler(direction) {
      $(this.element)
        .addClass('fade-in')
        .removeClass('hidden');
    },
    offset: '50%',
  });

  new Waypoint({
    element: document.querySelector('.wr-services'),
    handler(direction) {
      $(this.element)
        .addClass('fade-in')
        .removeClass('hidden');
    },
    offset: '50%',
  });

  new Waypoint({
    element: document.querySelector('.wr-marketing'),
    handler(direction) {
      $(this.element)
        .addClass('fade-in')
        .removeClass('hidden');
    },
    offset: '50%',
  });

  new Waypoint({
    element: document.querySelector('.wr-contacts'),
    handler(direction) {
      $(this.element)
        .addClass('fade-in')
        .removeClass('hidden');
    },
    offset: '50%',
  });

  new Waypoint({
    element: document.querySelector('.wr-team'),
    handler(direction) {
      $(this.element)
        .addClass('fade-in')
        .removeClass('hidden');
    },
    offset: '50%',
  });

  new Waypoint({
    element: document.querySelector('.wr-subscribe'),
    handler(direction) {
      $(this.element)
        .addClass('fade-in')
        .removeClass('hidden');
    },
    offset: '50%',
  });

});
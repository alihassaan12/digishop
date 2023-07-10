// owal-slider
$('.product-carousel').owlCarousel({
  // loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  navContainer: '.main-content .custom-nav',
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    }
  }
})

$('.catagory-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  navContainer: '.main-content .custom-nav',
  responsive: {
    0: {
      items: 5
    },
    600: {
      items: 9
    },
    1000: {
      items: 14
    }
  }
})

// $('.product-carousel').owlCarousel({
//   loop: true,
//   margin: 0,
//   nav: true,
//   navText: [
//       '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//       '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//   ],
//   navContainer: '.product-content .custom-nav',
//   responsive:{
//       0:{
//           items: 1
//       },
//       600:{
//           items: 3
//       },
//       1000:{
//           items: 3
//       }
//   }
// });

// owal-slider
// nav-hide-show
$(document).ready(function () {
  $('#topSearchBar').attr('hidden', 'hidden');

});
$('#mainContentSection').on("scroll", function () {
  if ($('#mainContentSection').scrollTop() >= 50) {
    $('#navbar').attr('hidden', 'hidden');
    $('#topSearchBar').removeAttr('hidden');
  }
  if ($('#mainContentSection').scrollTop() < 50) {
    $('#topSearchBar').attr('hidden', 'hidden');
    $('#navbar').removeAttr('hidden');
  }
});
// nav-hide-show
// slick-slider
const init = {
  autoplay: false,
  infinite: true,
  cssEase: "linear",
  slidesToShow: 1.5,
  slidesToScroll: 1
};
$(() => {
  const win = $(window);
  const slider = $(".slider");

  win.on("load resize", () => {
    if (win.width() < 900) {
      slider.not(".slick-initialized").slick(init);
    } else if (slider.hasClass("slick-initialized")) {
      slider.slick("unslick");
    }
  });
});
// slick-slider
// id-active
(function () {
  const scrollspys = document.querySelectorAll(".caro-scrollspy");
  const links = document.querySelector(".caro-links");
  const linksHeight = links.offsetHeight;
  const allLinks = links.querySelectorAll(".item a");
  //console.log('LinksHeight'+linksHeight);
  function scrollspy() {
    scrollspys.forEach(current => {
      var _ = current;
      let currentElementOffset = _.offsetTop;
      //console.log('currentElementOffset'+currentElementOffset);
      let scrollPosition = document.getElementById('mainContentSection').scrollTop;
      console.log(scrollPosition)
      if (currentElementOffset - (linksHeight * 2) <= scrollPosition + linksHeight) {
        allLinks.forEach(currentLink => {
          currentLink.classList.remove("caro-active");
        });
        const currentID = current.getAttribute("id");

        document
        $('body').find('.owl-stage .owl-item').removeClass('caro-active')
        console.log(currentID)
        $('.item a[href="#' + currentID + '"]').parent().parent().addClass('caro-active')
      }
    });
  }
  document.getElementById('mainContentSection').addEventListener("scroll", scrollspy);
})();
// id-active
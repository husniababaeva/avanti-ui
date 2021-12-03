$(document).ready(function () {
  $(this).scrollTop(0);
  var scroll_start = 0;
  var startchange = $("#header");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $("#header").css({
          "background-color": "rgba(255, 255, 255, 0.30)",
          "backdrop-filter": "blur(4px)",
          
        });
      } else {
        $("#header").css({ "background-color": "transparent" });
      }
    });
  }

  $(".hamburger").click(function () {
    var $this = $(this);

    if ($this.hasClass("is-active")) {
      $(".fsmenu, .logo").removeClass("is-active");
      $(".fsmenu, .logo").addClass("close-menu");
    } else {
      $(".fsmenu, .logo").removeClass("close-menu");
      $(".fsmenu, .logo").addClass("is-active");
    }
    $this.toggleClass("is-active");
  });

  $(".fsmenu--list-element").hover(
    function () {
      $(this).addClass("open");
      $(this).removeClass("is-closing");
    },
    function () {
      $(this).removeClass("open");
      $(this).addClass("is-closing");
    }
  );
});
var swiper = new Swiper(".autoslide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

//filter-portfolio
// $("#mix-wrapper").mixItUp({
//   load: {
//     sort: "order:asc",
//   },
//   animation: {
//     effects: "fade rotateZ(-180deg)",
//     duration: 700,
//   },
//   selectors: {
//     target: ".mix-target",
//     filter: ".filter-btn",
//     sort: ".sort-btn",
//   },
//   callbacks: {
//     onMixEnd: function (state) {
//       console.log(state);
//     },
//   },
// });
// $(function () {
//   var filterList = {
//     init: function () {
//       $("#portfoliolist").mixItUp({
//         selectors: {
//           target: ".portfolio",
//           filter: ".filter",
//         },
//         load: {
//           filter: ".app",
//         },
//       });
//     },
//   };

//   // Run the show!
//   filterList.init();
// });


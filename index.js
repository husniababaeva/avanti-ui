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

  // Create object to store filter for each group
  var buttonFilters = {};
  var buttonFilter = "*";
  // Create new object for the range filters and set default values
  // The default values should correspond to the default values from the slider

  // Initialise Isotope
  // Set the item selector
  var $grid = $(".grid").isotope({
    itemSelector: ".item",
    layout: "masonry",
    // use filter function
    filter: function () {
      var $this = $(this);
      return $this.is(buttonFilter);
    },
  });

  // Look inside element with .filters class for any clicks on elements with .btn
  $(".filters").on("click", ".btn", function () {
    var $this = $(this);
    // Get group key from parent btn-group (e.g. data-filter-group="color")
    var $buttonGroup = $this.parents(".btn-group");
    var filterGroup = $buttonGroup.attr("data-filter-group");
    // set filter for group
    buttonFilters[filterGroup] = $this.attr("data-filter");
    // Combine filters or set the value to * if buttonFilters
    buttonFilter = concatValues(buttonFilters) || "*";
    // Log out current filter to check that it's working when clicked
    console.log(buttonFilter);
    // Trigger isotope again to refresh layout
    $grid.isotope();
  });

  // change checked class on btn-filter to toggle which one is active
  $(".btn-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", ".btn-filter", function () {
      $buttonGroup.find(".checked").removeClass("checked");
      $(this).addClass("checked");
    });
  });
});
function concatValues(obj) {
  var value = "";
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

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

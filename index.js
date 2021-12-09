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
      // $("is-active").css({
      //   "z-index": "0",
      // })
    } else {
      $(".fsmenu, .logo").removeClass("close-menu");
      $(".fsmenu, .logo").addClass("is-active");
      $("close-menu").css({
        "display": "none",
      })
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

/*******************Our Amazing Work Section*****************/

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn_portfolio");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
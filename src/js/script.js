/*Хедер*/

$(document).ready(function () {
  $(".header__menu").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header-mobile").removeClass("active");
      $("body").removeClass("ov-hid");
    } else {
      $(".header__search").removeClass("active");
      $("#searchPopup").removeClass("show");
      $(".header__menu").addClass("active");
      $(".header-mobile").addClass("active");
      $("body").addClass("ov-hid");
    }
  });

  $(document).scroll(function () {
    if ($(window).scrollTop() >= $(".header").height()) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  $(".main-page > .swiper-container .swiper-slide").on(
    "mousewheel",
    function (e) {
      var screenWidth = $(window).width();
      if (screenWidth > 1199) {
        $(".header-main").addClass("none");
        setTimeout(function () {
          $(".header-main").removeClass("none");
        }, 1000);
      }
    }
  );

  $(".main-page > .swiper-container .swiper-slide")
    .first()
    .on("mousewheel", function (e) {
      var screenWidth = $(window).width();
      if (screenWidth > 1199 && e.originalEvent.deltaY < 0) {
        $(".header-main").removeClass("none");
      }
    });

  $(".main-page > .swiper-container .swiper-slide")
    .last()
    .on("mousewheel", function (e) {
      var screenWidth = $(window).width();
      if (screenWidth > 1199 && e.originalEvent.deltaY > 0) {
        $(".header-main").removeClass("none");
      }
    });
});

/*Модалка с поиском*/

$(document).ready(function () {
  $(".header__search").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header").removeClass("fixed");
      $("#searchPopup").removeClass("show");
      $("body").removeClass("ov-hid");
    } else {
      $(".header__menu").removeClass("active");
      $(".header-mobile").removeClass("active");
      $(".header__search").addClass("active");
      $(".header").addClass("fixed");
      $("#searchPopup").addClass("show");
      $("body").addClass("ov-hid");
    }
  });
});

/*Главный слайдер*/

$(document).ready(function () {
  var swiperMain = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth > 1199 && swiperMain == undefined) {
      swiperMain = new Swiper(".main-page > .swiper-container", {
        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        direction: "vertical",
        speed: 1000,
        grabCursor: false,
        simulateTouch: false,
        mousewheel: {
          eventsTarget: ".main-page",
        },
        autoHeight: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
      });
    } else if (screenWidth < 1200 && swiperMain != undefined) {
      swiperMain.destroy();
      swiperMain = undefined;
      $(".main > .swiper-container .swiper-wrapper").removeAttr("style");
      $(".main > .swiper-container .swiper-slide").removeAttr("style");
    }
  }

  initSwiper();

  $(window).on("resize", function () {
    initSwiper();
  });
});

/*Слайдер сотрудников*/

$(document).ready(function () {
  swiperEmployee = new Swiper(".employee-slider .swiper-container", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".employee-slider .swiper-button-next",
      prevEl: ".employee-slider .swiper-button-prev",
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      992: {
        loop: false,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        autoHeight: false,
        spaceBetween: 30,
      },
      1200: {
        loop: false,
        slidesPerView: 5,
        slidesPerColumn: 2,
        slidesPerGroup: 5,
        autoHeight: false,
        spaceBetween: 30,
      },
      1440: {
        loop: false,
        slidesPerView: 6,
        slidesPerColumn: 2,
        slidesPerGroup: 6,
        autoHeight: false,
        spaceBetween: 30,
      },
      1680: {
        loop: false,
        slidesPerView: 5,
        slidesPerColumn: 2,
        slidesPerGroup: 5,
        autoHeight: false,
        spaceBetween: 40,
      },
    },
  });
});

/*Слайдер героев*/

$(document).ready(function () {
  var galleryThumbs = new Swiper(".hero-slider .gallery-thumbs", {
    loop: false,
    spaceBetween: 12,
    slidesPerView: 3,
    autoHeight: true,
    freeMode: true,
    grabCursor: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      540: {
        spaceBetween: 18,
        slidesPerView: 4,
      },
      768: {
        spaceBetween: 18,
        slidesPerView: 5,
      },
      992: {
        spaceBetween: 18,
        slidesPerView: 7,
      },
      1200: {
        spaceBetween: 18,
        slidesPerView: 8,
      },
      1440: {
        loop: true,
        spaceBetween: 18,
        slidesPerView: 9,
      },
    },
  });
  var galleryTop = new Swiper(".hero-slider .gallery-top", {
    loop: true,
    spaceBetween: 40,
    autoHeight: true,
    grabCursor: true,
    thumbs: {
      swiper: galleryThumbs,
    },
    navigation: {
      nextEl: ".hero-slider .swiper-button-next",
      prevEl: ".hero-slider .swiper-button-prev",
    },
  });
});

/*Кастомный селект*/

$(document).ready(function () {
  $(".select").each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children("option").length;

    $this.addClass("select");
    $this.wrap('<div class="select-custom"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());

    var $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        html: "<span>" + $this.children("option").eq(i).text() + "</span>",
        rel: $this.children("option").eq(i).val(),
        title: $this.children("option").eq(i).val(),
      }).appendTo($list);
    }

    var $listItems = $list.children("li");

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });
      $(this).toggleClass("active").next("ul.select-options").toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect
        .html('<span class="select-value">' + $(this).text() + "</span>")
        .removeClass("active");
      $styledSelect.attr("rel", $(this).attr("rel"));
      $styledSelect.attr("title", $(this).attr("title"));
      $this.val($(this).attr("rel"));
      $this.val($(this).attr("title"));
      $list.hide();
      $this.trigger("changed");
    });

    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
    });

    $(
      '.popup__form button[type="reset"], .search__form button[type="reset"]'
    ).click(function () {
      $styledSelect.html(
        "<span>" + $this.children("option").eq(0).text() + "</span>"
      );
      $styledSelect.removeAttr("rel");
      $styledSelect.removeAttr("title");
      for (var j = 0; j < numberOfOptions; j++) {
        $this.children("option").eq(j).removeAttr("selected");
      }
    });

    for (var j = 0; j < numberOfOptions; j++) {
      if ($this.children("option").eq(j).attr("selected")) {
        $styledSelect.html(
          "<span>" + $this.children("option").eq(j).text() + "</span>"
        );
        $styledSelect.attr("rel", $this.children("option").eq(j).val());
        $styledSelect.attr("title", $this.children("option").eq(j).val());
      }
    }
  });
});

/*Инпут выбор даты*/

$(document).ready(function () {
  $.datepicker.regional["ru"] = {
    closeText: "Закрыть",
    prevText: "<",
    nextText: ">",
    currentText: "Сегодня",
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    monthNamesShort: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    dayNames: [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ],
    dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    minDate: null,
    isRTL: false,
    showMonthAfterYear: false,
    showButtonPanel: true,
    yearSuffix: "",
    changeYear: true,
    changeMonth: true,
  };

  $.datepicker.setDefaults($.datepicker.regional["ru"]);
  $(".input-datepicker").datepicker($.datepicker.regional["ru"]);
  $(".input-datepicker").datepicker("option", "yearRange", "1940:2010");
  $(".input-datepicker").datepicker(
    "option",
    "minDate",
    new Date(1940, 0 - 1, 1)
  );
  $(".input-datepicker").datepicker().datepicker("setDate");

  /*$('.popup__form button[type="reset"]').click(function(){
    $(".input").attr("value", "");
  });*/
});

/*Раскрытие заметок*/

$(document).ready(function () {
  $(".note__caption").click(function () {
    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
    } else {
      $(this).parent().addClass("active");
    }
  });
});

/*Раскрытие поиска*/

$(document).ready(function () {
  $(".search__show").click(function () {
    $(this).parent().prev().addClass("active");
  });
  $(".search__hide").click(function () {
    $(this).parent().parent().removeClass("active");
  });
});

/*Бегущая строка*/

$(document).ready(function () {
  var ticker = document.querySelector(".gallery"),
    list = document.querySelector(".gallery__wrap"),
    clone = list.cloneNode(true);

  ticker.append(clone);
});

/*Раскрытие заметок*/

$(document).ready(function () {
  $("span.header-mobile__link").click(function () {
    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
    } else {
      $(this).parent().addClass("active");
    }
  });
});

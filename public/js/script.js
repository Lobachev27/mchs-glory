$(document).ready(function(){$(".header__menu").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".header-mobile").removeClass("active"),$("body").removeClass("ov-hid")):($(".header__search").removeClass("active"),$("#searchPopup").removeClass("show"),$(".header__menu").addClass("active"),$(".header-mobile").addClass("active"),$("body").addClass("ov-hid"))}),$(document).scroll(function(){$(window).scrollTop()>=$(".header").height()?$(".header").addClass("fixed"):$(".header").removeClass("fixed")}),$(".main-page > .swiper-container .swiper-slide").on("mousewheel",function(e){1199<$(window).width()&&($(".header-main").addClass("none"),setTimeout(function(){$(".header-main").removeClass("none")},1e3))}),$(".main-page > .swiper-container .swiper-slide").first().on("mousewheel",function(e){1199<$(window).width()&&e.originalEvent.deltaY<0&&$(".header-main").removeClass("none")}),$(".main-page > .swiper-container .swiper-slide").last().on("mousewheel",function(e){1199<$(window).width()&&0<e.originalEvent.deltaY&&$(".header-main").removeClass("none")})}),$(document).ready(function(){$(".header__search").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".header").removeClass("fixed"),$("#searchPopup").removeClass("show"),$("body").removeClass("ov-hid")):($(".header__menu").removeClass("active"),$(".header-mobile").removeClass("active"),$(".header__search").addClass("active"),$(".header").addClass("fixed"),$("#searchPopup").addClass("show"),$("body").addClass("ov-hid"))})}),$(document).ready(function(){var t=void 0;function e(){var e=$(window).width();1199<e&&null==t?t=new Swiper(".main-page > .swiper-container",{loop:!1,slidesPerView:1,slidesPerGroup:1,direction:"vertical",speed:1e3,grabCursor:!1,simulateTouch:!1,mousewheel:{eventsTarget:".main-page"},autoHeight:!0,watchSlidesProgress:!0,watchSlidesVisibility:!0}):e<1200&&null!=t&&(t.destroy(),t=void 0,$(".main > .swiper-container .swiper-wrapper").removeAttr("style"),$(".main > .swiper-container .swiper-slide").removeAttr("style"))}e(),$(window).on("resize",function(){e()})}),$(document).ready(function(){swiperEmployee=new Swiper(".employee-slider .swiper-container",{loop:!0,slidesPerView:1,slidesPerGroup:1,spaceBetween:20,autoHeight:!0,grabCursor:!0,watchSlidesProgress:!0,watchSlidesVisibility:!0,navigation:{nextEl:".employee-slider .swiper-button-next",prevEl:".employee-slider .swiper-button-prev"},breakpoints:{540:{slidesPerView:2,slidesPerGroup:1,spaceBetween:20},768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},992:{loop:!1,slidesPerView:3,slidesPerColumn:2,slidesPerGroup:3,autoHeight:!1,spaceBetween:30},1200:{loop:!1,slidesPerView:5,slidesPerColumn:2,slidesPerGroup:5,autoHeight:!1,spaceBetween:30},1440:{loop:!1,slidesPerView:6,slidesPerColumn:2,slidesPerGroup:6,autoHeight:!1,spaceBetween:30},1680:{loop:!1,slidesPerView:5,slidesPerColumn:2,slidesPerGroup:5,autoHeight:!1,spaceBetween:40}}})}),$(document).ready(function(){var e=new Swiper(".hero-slider .gallery-thumbs",{loop:!1,spaceBetween:12,slidesPerView:3,autoHeight:!0,freeMode:!0,grabCursor:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,breakpoints:{540:{spaceBetween:18,slidesPerView:4},768:{spaceBetween:18,slidesPerView:5},992:{spaceBetween:18,slidesPerView:7},1200:{spaceBetween:18,slidesPerView:8},1440:{loop:!0,spaceBetween:18,slidesPerView:9}}});new Swiper(".hero-slider .gallery-top",{loop:!0,spaceBetween:40,autoHeight:!0,grabCursor:!0,thumbs:{swiper:e},navigation:{nextEl:".hero-slider .swiper-button-next",prevEl:".hero-slider .swiper-button-prev"}})}),$(document).ready(function(){$(".select").each(function(){var t=$(this),i=$(this).children("option").length;t.addClass("select"),t.wrap('<div class="select-custom"></div>'),t.after('<div class="select-styled"></div>');var s=t.next("div.select-styled");s.text(t.children("option").eq(0).text());for(var a=$("<ul />",{class:"select-options"}).insertAfter(s),e=0;e<i;e++)$("<li />",{html:"<span>"+t.children("option").eq(e).text()+"</span>",rel:t.children("option").eq(e).val(),title:t.children("option").eq(e).val()}).appendTo(a);var r=a.children("li");s.click(function(e){e.stopPropagation(),$("div.select-styled.active").not(this).each(function(){$(this).removeClass("active").next("ul.select-options").hide()}),$(this).toggleClass("active").next("ul.select-options").toggle()}),r.click(function(e){e.stopPropagation(),s.html('<span class="select-value">'+$(this).text()+"</span>").removeClass("active"),s.attr("rel",$(this).attr("rel")),s.attr("title",$(this).attr("title")),t.val($(this).attr("rel")),t.val($(this).attr("title")),a.hide(),t.trigger("changed")}),$(document).click(function(){s.removeClass("active"),a.hide()}),$('.popup__form button[type="reset"], .search__form button[type="reset"]').click(function(){s.html("<span>"+t.children("option").eq(0).text()+"</span>"),s.removeAttr("rel"),s.removeAttr("title");for(var e=0;e<i;e++)t.children("option").eq(e).removeAttr("selected")});for(var o=0;o<i;o++)t.children("option").eq(o).attr("selected")&&(s.html("<span>"+t.children("option").eq(o).text()+"</span>"),s.attr("rel",t.children("option").eq(o).val()),s.attr("title",t.children("option").eq(o).val()))})}),$(document).ready(function(){$.datepicker.regional.ru={closeText:"Закрыть",prevText:"<",nextText:">",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Нед",dateFormat:"dd.mm.yy",firstDay:1,minDate:null,isRTL:!1,showMonthAfterYear:!1,showButtonPanel:!0,yearSuffix:"",changeYear:!0,changeMonth:!0},$.datepicker.setDefaults($.datepicker.regional.ru),$(".input-datepicker").datepicker($.datepicker.regional.ru),$(".input-datepicker").datepicker("option","yearRange","1940:2010"),$(".input-datepicker").datepicker("option","minDate",new Date(1940,-1,1)),$(".input-datepicker").datepicker().datepicker("setDate")}),$(document).ready(function(){$(".note__caption").click(function(){$(this).parent().hasClass("active")?$(this).parent().removeClass("active"):$(this).parent().addClass("active")})}),$(document).ready(function(){$(".search__show").click(function(){$(this).parent().prev().addClass("active")}),$(".search__hide").click(function(){$(this).parent().parent().removeClass("active")})}),$(document).ready(function(){var e=document.querySelector(".gallery"),t=document.querySelector(".gallery__wrap").cloneNode(!0);e.append(t)}),$(document).ready(function(){$("span.header-mobile__link").click(function(){$(this).parent().hasClass("active")?$(this).parent().removeClass("active"):$(this).parent().addClass("active")})});
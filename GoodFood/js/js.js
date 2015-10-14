jQuery(document).ready(function($){

    if ($(window).width() > 483 ) {
        $('.owl-carousel').owlCarousel({
            loop: true, //Зацикливаем слайдер
            nav: true, //Отключил навигацию
            autoplay: false, //Автозапуск слайдера
            smartSpeed: 1000, //Время движения слайда
            autoplayTimeout: 2000, //Время смены слайда
            singleItem: false,
            responsive: { //Адаптация в зависимости от разрешения экрана
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

    if ($(window).width() > 1200 ) {
        var image1 = $('.icon1 img');
        var image2 = $('.icon2 img');
        var image3 = $('.icon3 img');
        var image4 = $('.what-we-do a');
        $('.icon1').mouseover(function () {
            image1.addClass('animated zoomIn');
           });
        $('.icon1').mouseout(function () {
            image1.removeClass('animated zoomIn');
        });
        $('.icon2').mouseover(function () {
            image2.addClass('animated flipInY');
        });
        $('.icon2').mouseout(function () {
            image2.removeClass('animated flipInY');
        });
        $('.icon3').mouseover(function () {
            image3.addClass('animated rotateIn');
        });
        $('.icon3').mouseout(function () {
            image3.removeClass('animated rotateIn');
        });
    }

    var menu = $('.menu');
    $('.cmn-toggle-switch').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')){
                menu.slideDown('fast');
        }
        else{
            menu.slideUp('fast');
        }
    });

    $('.icon-manufacture1').mouseover(function () {
        $(this).addClass('icon-manufacture1-hover');
        $(this).next().next().css('color','#669933');
    });
    $('.icon-manufacture1').mouseout(function () {
        $(this).removeClass('icon-manufacture1-hover');
        $(this).next().next().css('color','#a8a8a8');
    });
    $('.icon-box1').mouseover(function () {
        $(this).addClass('icon-box1-hover');
        $(this).next().next().css('color','#669933');
    });
    $('.icon-box1').mouseout(function () {
        $(this).removeClass('icon-box1-hover');
        $(this).next().next().css('color','#a8a8a8');
    });
    $('.icon-export1').mouseover(function () {
        $(this).addClass('icon-export1-hover');
        $(this).next().next().css('color','#669933');
    });
    $('.icon-export1').mouseout(function () {
        $(this).removeClass('icon-export1-hover');
        $(this).next().next().css('color','#a8a8a8');
    });

    var piechart = $(".piechart li");
    var textover = $(".text-over-section");
    if ($(window).width() > 1200 ) {
        piechart.mouseover(function () {
            var id = $(this).attr("id");
            $("#" + id + "-bg").find(".text-over-section").show();
            $(this).find('img').css('display','none');
            textover.css("display","block").addClass('animated flipInX');
        });
        piechart.mouseout(function () {
            var id = $(this).attr("id");
            $("#" + id + "-bg").find(".text-over-section").hide();
            $(this).find('img').css('display','initial');
            textover.css("display","block").removeClass('animated flipInX');
        });
    }
    else
    {
            piechart.click(function () {
            var id = $(this).attr("id");
            $("#" + id + "-bg").find(".text-over-section").show();
            $("#" + id).addClass("active");
     });
            piechart.mouseout(function () {
            $(".active").removeClass("active");
        });
    }
});



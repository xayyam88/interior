$(function(){
    $('.projects__slider').slick({
        infinite: true,
        fade: true,
        dots: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.tap__slider',
        responsive: [
            {
                breakpoint: 889,
                settings: {
                    infinite: true,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    infinite: true,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                }
            }
        ],
    });

    $(".tap__slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.projects__slider',
        customPaging: function (tap__slider, i) {
            var title = $(tap__slider.$slides[i]).find('[data-title]').data('title');
            return '<a class="pager__item"> ' + title + ' </a>';      
        },
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    dots: false,
                }
            }
        ],
    });

    $(".tap__slider-img").slick({
        draggable: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows2-right.svg" alt=""></img>',
        nextArrow: false,
        responsive: [
            {
                breakpoint: 888,
                settings: {
                    nextArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows2-left.svg" alt=""></img>',
                }
            },
        ],
        
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $(".fantasies__slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        cssEase: 'ease-in-out',
        nextArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows2-left.svg" alt=""></img>',
        prevArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows2-right.svg" alt=""></img>',
        customPaging: function (fantasies__slider, i){
            var title = $(fantasies__slider.$slides[i]).find('[data-title]').data('title');
        return '<a class="pager__item"> ' + title + ' </a>';
        },
        responsive: [      
            {
                breakpoint: 550,
                settings: {
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
            }
        ]
    });

    $('.clients__leftslider').slick({
        infinite: true,
        fade: true,
        dots: true,
        prevArrow: '<img class="clients__slider__arrows clients__slider__left-arrows" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="clients__slider__arrows clients__slider__right-arrows" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.clients__rightslider',
        responsive: [
            {
                breakpoint: 1113,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });

    $(".clients__rightslider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'ease-in-out',
        asNavFor: '.clients__leftslider',
        customPaging: function (clients__rightslider, i) {
            var title = $(clients__rightslider.$slides[i]).find('[data-title]').data('title');
            return '<a class="pager__item"> ' + title + ' </a>';
        }
    });

    var clients = $('.clients');
    var clientsTop = clients.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > clientsTop) {
            $('.map-responsive').html('<iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.555312435809!2d39.72099081531356!3d47.24484357916228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b47a7e7029%3A0x9e8cb546a10601cc!2z0KLQpiAi0JTQtdC60L7RgNGD0Lwi!5e0!3m2!1sru!2s!4v1577682193216!5m2!1sru!2s" width = "925" height = "465" frameborder = "0" style = "border:0;" allowfullscreen = ""></iframe >');
            $(window).unbind('scroll');
        }
    });
});
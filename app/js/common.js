$(document).ready(function () {

    // slider
    $('.how-it-work__slider').slick({
        slidesToShow: 3,
        infinite: false,
        arrows: true,
        appendArrows: '.how-it-work-arrow',
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1010,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews-slider').slick({
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        appendArrows: '.reviews-arrow',
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false
                }
            }
        ]
    });

    $('.img-slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.question-section__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.company-goal__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.certificate-slider').slick({
        slidesToShow: 1,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>'
    });

    $('.project-slider').slick();
    // slider end

    $('.links-tooltip, .interactive-icon').click(function (e) {
       e.preventDefault();
    });


    $(document).ready(function () { //плавный скролл
        $(".go_to").on("click", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 500 мс
            $('body,html').animate({scrollTop: top - 120}, 500);
        });
    });

    // hover icon
    $('.interactive-icon').hover(function () {

        $(this).closest('.image-interactive').find('.text-description__box').removeClass('active');

        var selectTab = $(this).attr("href");

        $(selectTab).addClass('active');
    });
    // hover icon

    //100% height block
    $('.for-whom__box').on('click', function () {
        // $().removeClass('');
        $(this).toggleClass('open');
        $('.for-whom__box').not(this).removeClass('open');
    });

// активная ссылка меню
    $('.menu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('current');
        }
    });
// end


    //Инициализация wow.js
    var wow = new WOW(
        {
            boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
            animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
            offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
            mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
            live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
            scrollContainer: null, // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
            resetAnimation: true
        }
    );
    wow.init();


    // модальные окна (несколько)
    $(document).ready(function () {
        var overlay = $('.overlay');
        var open_modal = $('.open_modal');
        var close = $('.overlay');
        var btnClose = $('.modal__close, .btn-close');
        var modal = $('.modal__div');

        open_modal.click(function (event) {
            event.preventDefault();

            modal.css('pointer-events', 'none').animate({
                        opacity: 0,
                        top: '45%'
                    }, 200);

            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function () {
                    $(div)
                        .css('pointer-events', 'auto')
                        .animate({
                            opacity: 1,
                            top: '50%'
                        }, 200);
                });
        });

        close.click(function () {
            modal
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('pointer-events', 'none');
                        overlay.fadeOut(400);
                    }
                );
        });

        btnClose.click(function () {
            $(this).parents('.modal__div')
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('pointer-events', 'none');
                        overlay.fadeOut(400);
                    }
                );
        });
    });

    // popup mouseleave
    $(document).mouseleave(function(e){
        if (e.clientY < 10) {
            var overlay = $('.overlay');
            var close = $('.overlay');
            var btnClose = $('.modal__close, .btn-close');
            var div = $('.poll__popup');

            overlay.css('z-index', '102').fadeIn(400,
                function () {
                    $(div)
                        .css('pointer-events', 'auto')
                        .animate({
                            opacity: 1,
                            top: '50%'
                        }, 200);
                });

        }

        close.click(function () {
            div
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('pointer-events', 'none');
                        overlay.fadeOut(400).css('z-index', '100');
                    }
                );
        });

        btnClose.click(function () {
            $(this).parents('.poll__popup')
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('pointer-events', 'none');
                        overlay.fadeOut(400).css('z-index', '100');
                    }
                );
        });
    });
    //modal end


    // form ajax
    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('.modal_div').css('pointer-events', 'none').animate({
                opacity: 0,
                top: '45%'
            }, 200);
            $('.overlay').fadeIn();
            $('#callThanks').css('pointer-events', 'auto').animate({
                opacity: 1,
                top: '50%'
            }, 200);
            $(".form").trigger("reset");
        });
        return false;
    });

    $(".form-price").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('.modal_div').css('pointer-events', 'none').animate({
                opacity: 0,
                top: '45%'
            }, 200);
            $('.overlay').fadeOut();
            $('#priceThanks').css('pointer-events', 'auto').animate({
                opacity: 1,
                top: '50%'
            }, 200);
            $(".form-price").trigger("reset");
        });
        return false;
    });

    $(".form-poll-contacts").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('.modal_div').css('pointer-events', 'none').animate({
                opacity: 0,
                top: '45%'
            }, 200);
            $('.overlay').fadeOut();
            $('#popup-thanks').css('pointer-events', 'auto').animate({
                opacity: 1,
                top: '50%'
            }, 200);
            $(".form-poll-contacts").trigger("reset");
        });
        return false;
    });
    // form ajax end

    // stages order
    $('.btn-stages-one').click(function () {
        $('.checkout-stages').removeClass('active');
        $('.content-page-order .equipment').fadeIn();
        $('.checkout-stages-one').addClass('active');
        $('.number-stages').removeClass('active').removeClass('check');
        $('.number-stages-one').addClass('active');
    });

    $('.btn-stages-two').click(function () {
        $('.checkout-stages').removeClass('active');
        $('.content-page-order .equipment').fadeOut();
        $('.checkout-stages-two').addClass('active');
        $('.number-stages').removeClass('active').removeClass('check');
        $('.number-stages-one').addClass('check');
        $('.number-stages-two').addClass('active');
    });

    $('.btn-stages-three').click(function () {
        $('.checkout-stages').removeClass('active');
        $('.content-page-order .equipment').fadeOut();
        $('.checkout-stages-three').addClass('active');
        $('.number-stages').removeClass('active').removeClass('check');
        $('.number-stages-one, .number-stages-two').addClass('check');
        $('.number-stages-three').addClass('active');
    });
// stages order end


    // hidden list > 3
    $('.blog-section__content-page-home').each(function () {
        if ($(this).find('.blog-section__box').length > 3) {
            $(this).find('.blog-section__box').slice(3).hide();
        }
    });
    // hidden list > 3

    // show list all
    $('.btn-load').on('click', function (e) {
        e.preventDefault();
        $('.blog-section__box:hidden').slice(0, 3).slideDown();
        var onBlock = $('.blog-section__box:hidden').length;
        if (onBlock <= 0) {
            $('.btn-load').hide();
        }
    });
    // show list all

    // hidden list > 3
    $('.blog-section__content-page-blog').each(function () {
        if ($(this).find('.blog-section__box').length > 6) {
            $(this).find('.blog-section__box').slice(6).hide();
        }
    });
    // hidden list > 3

    // show list all
    $('.btn-load').on('click', function (e) {
        e.preventDefault();
        $('.blog-section__box:hidden').slice(0, 6).slideDown();
        var onBlock = $('.blog-section__box:hidden').length;
        if (onBlock <= 0) {
            $('.btn-load').hide();
        }
    });
    // show list all



});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 481) {
        $('.study-with-us__content:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000
        });
    } else {
        $(".study-with-us__content.slick-initialized").slick("unslick");
    }
});
// slick active

// // parallax
$(function () {

    var rellax = new Rellax('.figure-icon', {
        speed: -3,
        center: false
    });

});
// // parallax end


// fixed header
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('fixed');
        $('body').addClass('header-scroll');
    } else {
        $('header').removeClass('fixed');
        $('body').removeClass('header-scroll');
    }
});


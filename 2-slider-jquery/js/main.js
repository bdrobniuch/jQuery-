$(function () {



    console.log("tst");
    var slideShow = $(".slide-show");
    var singleSlide = $(".single-slide");
    var slider = $(".slider");
    var enable = true;

    singleSlide.eq(slideShow.children().length - 1).clone().prependTo(slideShow);
    singleSlide.eq(0).clone().appendTo(slideShow);

    console.log("klonowanie");

    slideShow = $(".slide-show");
    singleSlide = $(".single-slide");
    slider = $(".slider");

    var slideIndex = 1;
    var ic = slideShow.children().length * 100;
    var slideCount = slideShow.children().length;
    var slideWidth = 100 / slideShow.children().length;

    quickUpdate();

    slideShow.css("width", ic + "%");

    function prev() {
        if (enable) {
            if (slideIndex > 0) {
                slideIndex--;
                update();
            } else {
                slideIndex = slideCount - 2;
                quickUpdate();
                slideIndex--;
                update();
            }
        }
    }

    function next() {
        if (enable) {
            if (slideIndex < slideCount - 1) {
                slideIndex++;
                update();
            } else {
                slideIndex = 1;
                quickUpdate();
                slideIndex++;
                update();
            }
        }
    }

    function quickUpdate() {
        slideShow.animate({
            left: (-slideIndex * 100) + "%"
        }, 0);
    }

    function update() {
        enable = false;
        $(".slide-caption").fadeOut(0);
        slideShow.animate({
            left: (-slideIndex * 100) + "%"
        }, 1000, function () {

            $(".slide-caption").fadeIn(200);
            enable = true;
        });
    }

    $(".single-slide").each(function (index) {
        $(this).css("width", slideWidth+1 + "%");
        $(this).css("margin-left", slideWidth * index + "%");
    });

    $(".prev-slide").click(function () {
        ptev();
    });


    $(".next-slide").click(function () {
        next();
    });

    $(window).keydown(function (e) {
        if (e.keyCode == 39) next();
        else if (e.keyCode == 37) prev();
    });


});

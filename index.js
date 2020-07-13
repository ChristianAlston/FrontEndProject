$(document).ready(function () {
    var previousScroll = 0;
    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll < 50) {

        } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
            if (currentScroll > previousScroll) {
                hideNav();
            } else {
                showNav();
            }
            previousScroll = currentScroll;
        }
    });

    function hideNav() {
        $(".navbar").addClass("transform");
    }

    function showNav() {
        $(".navbar").removeClass("transform");
    }
});

$(document).ready(function () {
    $('.burger').on('click', function () {
        $('a').toggleClass('burgerup');
    });
});
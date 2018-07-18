$(document).ready(function () {
    addScrolled();
});

$(document).scroll(function () {
    addScrolled();
});

function addScrolled() {

    if (window.innerWidth > 992) {
        var height = $('#main-nav').height();
        var scroll = $(window).scrollTop();
        $(".nav-hide").removeClass("close");;

        if (scroll > height) {
            $('#main-nav').addClass('transparent-blue');
            $('.navbar-collapse').addClass('transparent-blue');
        } else {
            $('#main-nav').removeClass('transparent-blue');
            $('.navbar-collapse').removeClass('transparent-blue');
        }
    }

}

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


//hide menu on click
var x = window.matchMedia("(max-width: 992px)")

$(".nav-hide li").on("click", function () {
    if (x.matches) {
        $(".nav-hide").addClass("close");
        $("#navbarSupportedContent").removeClass("show");
    }

});

$(".nav-vis").on("click", function () {
    if (x.matches) {
        $(".nav-hide").removeClass("close");
    }
});

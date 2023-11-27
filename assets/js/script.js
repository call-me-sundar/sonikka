AOS.init();

$(document).ready(function () {
    // Close the navbar when clicking outside
    $(document).on('click', function (e) {
        if ($(window).width() <= 992) {
            if (!$(e.target).closest('.navbar').length && $('.navbar-collapse').hasClass('show')) {
                $('.navbar-toggler').click();
            }
            $('.navbar .nav-link').on('click', function () {
                // Your code to execute when a nav link is clicked
                $('.navbar-toggler').click(); // This will simulate a click on the toggler
            });
        }
    });


    // navbar
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 100) {
            $('.navbar').addClass('nav-animate');
            if ($(this).scrollTop() > 500) {
                $('.navbar').addClass('nav-fixed');
            }
        }
        else {
            // Scrolling up
            $('.navbar').removeClass('nav-animate nav-fixed');
        }
    });

    var carimg = $('.amenties').height();
    $('.amenties .carousel img, .plans .carousel img').css('height', carimg);
    $(window).resize(function () {
        if ($(window).width() > 768) {
            var carimg = $('.amenties').height();
            $('.amenties .carousel img , .plans .carousel img').css('height', carimg);
        }
    })

    if ($(window).width() > 1200) {
        var planswidth = $('.plans-left').width();
        $('.plans-right').css('left', `calc(${planswidth}px + 5%)`);
    }
    $(window).resize(function () {
        if ($(window).width() > 1200) {
            var planswidth = $('.plans-left').width();
            $('.plans-right').css('left', `calc(${planswidth}px + 5%)`);
        }
    })
});

$(document).ready(function () {
    const sections = $('.projects .opacity');

    $(window).scroll(function () {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();

        sections.each(function () {
            const section = $(this);
            const sectionTop = section.offset().top;
            const sectionBottom = sectionTop + section.height();

            // Check if the section is in the middle of the screen
            if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom - windowHeight / 2) {
                sections.removeClass('highlight');
                section.addClass('highlight');
            }
        });
    });
});


$(document).ready(function() {
    $('.projects-header').click(function() {
        var targetOffset = $(this).offset().top - ($(window).height() - $(this).outerHeight()) / 2;
        
        $('html, body').animate({
            scrollTop: targetOffset
        }, "fast"); // Adjust the duration as needed
    });
});


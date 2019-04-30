$(document).ready(function() {
    
    //STICKY NAVIGATION
    $(".js-section-hiw").waypoint(function(direction) {
        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '40px;'
    });



    //SCROLL TO SECTIONS
    $('.js-scroll-to-hiw').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-hiw').offset().top}, 1000);
    });

    $('.js-scroll-to-order').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-order').offset().top}, 1500);
    });

    $('.js-scroll-to-about').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-about').offset().top}, 1575);
    });

    $('.js-scroll-to-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-contact').offset().top}, 1650);
    });


    //MOBILE NAVIGATION
    $('.js-nav-icon').click(function() {
        let nav = $('.js-main-nav');
        let icon = $('.js-nav-icon i');

        nav.slideToggle(250);
        if(icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.removeClass('ion-ios-close');
            icon.addClass('ion-ios-menu');
        }
    });


    //ANIMATIONS ON SCROLL
    


    //Calculate prices

    $('#days').on('change', function(e){
        calculate();
    });

    $('#month').on('change', function(e){
        calculate();
    });

    $('#cabin').on('change', function(e){
        calculate();
    });

    $('#peopleNumber').on('change', function(e){
        calculate();
    });

    $('#travel').on('change', function(e){
        calculate();
    });



    function calculate() {
        let days, month, cabin, people, travel, summary, finalPrice;
        days = $('#days').val();
        month = $('#month').val();
        cabin = $('#cabin').val();
        people = $('#peopleNumber').val();
        travel = $('#travel').val();
        finalPrice = 1;

        summary = [days, month, cabin, people, travel];

        if(summary[3] == 0){
            summary[3] = 1;
        }

        for(let i = 0; i < summary.length; i++){
            console.log(summary[i]);
            finalPrice *= summary[i];
        }

        $('.calculatedPrice').text(finalPrice);
    }
});

function submitForm() {
    alert("hi");
    let frm = document.getElementsByName('orderForm')[0];
    return false;
}


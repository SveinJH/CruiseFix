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
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated rotateInDownLeft');
    }, {
        offset: '55%'
    });

    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '55%'
    });

    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated slideInUp');
    }, {
        offset: '60%'
    });

    $('.js-wp-5').waypoint(function(direction) {
        $('.js-wp-5').addClass('animated bounceInUp');
    }, {
        offset: '45%'
    });


    //CALCULATE PRICES

    var member = false;

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

    $('.memberButton').click(function() {
        let number = $('#memberNumber').val();
        

        if(member) {
            alert("Medlemsnummer allerede registrert!")
        } else if(number.length === 8 && number.substring(0,3) == "EBB"){
            alert("Medlem registrert!");
            member = true;
            calculate();
            document.getElementById('memberNumber').disabled = true;
        } else {
            alert("Ugyldig medlemsnummer!");
        }
    });


    function calculate() {
        let days, month, cabin, people, travel, summary, finalPrice;
        days = $('#days').val();
        month = $('#month').val();
        cabin = $('#cabin').val();
        people = $('#peopleNumber').val();
        travel = $('#travel').val();
        finalPrice = 800;

        summary = [days, month, cabin, people, travel];

        if(summary[3] == 0){
            summary[3] = 1;
        }

        for(let i = 0; i < summary.length; i++){
            console.log(summary[i]);
            finalPrice *= summary[i];
        }

        if(member){
            finalPrice *= .8;
        }

        $('.calculatedPrice').text(Math.floor(finalPrice));
    }



    //CHANGE PICTURE ON ROUTE CHANGE
    $('#travel').on('change', function(e) {
        let value = $('#travel').val();

        if(value == 1.05){
            $('.order__img--selected').attr("src", "resources/img/travel-1.jpg");
        } else if(value == 1.10) {
            $('.order__img--selected').attr("src", "resources/img/travel-2.jpg");
        } else {
            $('.order__img--selected').attr("src", "resources/img/travel-3.jpg");
        }
    });
    
    //CHANGE TO CORRECT PICTURE AND TRAVEL ON SHIP BUTTONS
    $('.js-book_SQ').click(function() {
        $('#travel').val('1');
        $('.order__img--selected').attr("src", "resources/img/travel-3.jpg");
        calculate();
    });

    $('.js-book_CP').click(function() {
        $('#travel').val('1.1');
        $('.order__img--selected').attr("src", "resources/img/travel-1.jpg");
        calculate();
    });

    $('.js-book_CS').click(function() {
        $('#travel').val('1.05');
        $('.order__img--selected').attr("src", "resources/img/travel-2.jpg");
        calculate();
    });

});


//MESSAGE SUBMIT
function submitMessage() {
    $('#nameLabel').val('');
    $('#emailLabel').val('');
    $('#messageLabel').val('');
    alert("Your message has been sent! Thank you.");
    return false;
}


//ORDER SUBMIT
function submitForm() {
    $('#firstName').val('');
    $('#emailLabel').val('');
    $('#messageLabel').val('');
}
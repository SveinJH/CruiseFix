$(document).ready(function() {
    
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


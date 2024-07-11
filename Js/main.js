let sideBoxWidth = $('.side-box').outerWidth();
var isOpen = false;

$('aside i').on('click', function () {
    $('.side-box').animate({ width: "toggle", paddingInline: "toggle" }, 1000);
    if (!isOpen) {
        $(".mainTitle").animate({ marginLeft: sideBoxWidth }, 1000);
    } else {
        $(".mainTitle").animate({ marginLeft: "0" }, 1000);
    }
    isOpen = true;
});


$('a[href^="#"]').on('click', function (e) {
    let aHref = $(e.target).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $('body,html').animate({ scrollTop: sectionOffset }, 2000)
})

$('.innerFirst').css('display', 'block')

$('.section2 h2').on('click', function (e) {
    $('.inner').not($(this).next()).slideUp(500);
    $(e.target).next().slideToggle(500);
})


countDownToTime("25 December 2024 9:56:00");


function countDownToTime(countTo) {
    let futureDate = new Date(countTo).getTime() / 1000;
    let now = new Date().getTime() / 1000;
    let timeDifference = futureDate - now;
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * 24 * 60 * 60)) / 3600);
    let mins = Math.floor((timeDifference - (days * 24 * 60 * 60) - (hours * 3600)) / 60);
    let secs = Math.floor(timeDifference - (days * 24 * 60 * 60) - (hours * 3600) - (mins * 60));

    $(".card1").html(days);
    $(".card2").html(hours);
    $(".card3").html(mins);
    $('.card4').html(secs);

    setInterval(function () {
        countDownToTime(countTo);
    }, 1000);
}

$('textarea').on("input", function (e) {
    let lengths = this.value;


    if (lengths.length < 100) {
        $('#numRemaining').html(`${100 - lengths.length}`);
    }
    if (lengths.length > 100) {
        $('#numRemaining').html(`Your available characters finished 0`);
    }
});
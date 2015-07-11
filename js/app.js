$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $(".ryu-still").hide();
        $(".ryu-ready").show();
    })
    .mouseleave(function() {
        $(".ryu-ready").hide();
        $(".ryu-still").show();
    });
    $(".ryu").mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
        .animate(
            {"left":"1020px"}, 500, 
            function() {
                $(this).hide();
                $(this).css("left", "520px");
            });
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    $(document).keydown(function(event) {
        if (event.which == 88) {
            playCool(); //play song
            $('.ryu-still').hide();
            $('.ryu-ready').hide(); //hide .ryu-ready
            $('.ryu-cool').show(); //show .ryu-cool
        }
    });
    $(document).keyup(function(event) {
        if (event.which == 88) {
            $('#cool-sound')[0].pause();
            $('#cool-sound')[0].load(); //reload the song
            $('.ryu-cool').hide();
            $('.ryu-ready').show();
        }
    });
    $('.instruction-hadouken').fadeIn(2000, function() {
        $('.instruction-cool').fadeIn(2000);
    });
});

function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
function playCool () {
    $('#cool-sound')[0].volume = 0.6;
    $('#cool-sound')[0].play();
}

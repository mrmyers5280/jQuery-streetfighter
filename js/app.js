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
        // Play hadouken sound and 
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        $(".hadouken").show().animate(
            {"left":"1020px"}, 500, function() {
            $(this).hide();
            $(this).css("left", "520px");
        });
    })
    .mouseup(function() {
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
    });
});
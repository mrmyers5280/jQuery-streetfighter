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
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        // Play hadouken sound and move hadouken to the right.
    })
    .mouseup(function() {
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
    });
});
$(function() {
    $('a.scroll-effect').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $('a.active-change').bind('click', function(event) {
        $( ".active-change" ).each(function( index ) {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
});

window.onscroll = function() {hideBottom()};
function hideBottom() {
    var goup = document.getElementById("goup");
    if (document.body.scrollTop == 0 || document.body.scrollTop < 100) {
        goup.style = "display: none;";
    } else {
        goup.style = "";
    }
}
